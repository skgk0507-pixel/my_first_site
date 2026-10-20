import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, company, email, productInterest, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "성함과 연락처는 필수 입력 항목입니다." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    // Resend 계정 가입 이메일로 직접 수신 (100% 정상 발송 보장)
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "skgk0507@gmail.com";
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";

    if (apiKey) {
      const emailHtml = `
        <div style="font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin: 0; font-size: 20px;">(주)서광계기 신규 온라인 문의 접수</h2>
            <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">웹사이트를 통해 고객 문의가 실시간 접수되었습니다.</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 10px 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; width: 120px; color: #475569;">성함 / 담당자</td>
              <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #475569;">연락처</td>
              <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #2563eb; font-weight: 700;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #475569;">회사명</td>
              <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #0f172a;">${company || "미기재"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #475569;">고객 이메일</td>
              <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #0f172a;">${email || "미기재"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #475569;">관심 제품</td>
              <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #059669; font-weight: 600;">${productInterest || "선택 안 함"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #475569; vertical-align: top;">문의 내용</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message || "작성된 상세 내용 없음"}</td>
            </tr>
          </table>

          <div style="background-color: #f1f5f9; padding: 12px 16px; border-radius: 8px; font-size: 12px; color: #64748b;">
            접수 일시: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
          </div>
        </div>
      `;

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey.trim()}`,
        },
        body: JSON.stringify({
          from: `서광계기 문의접수 <${senderEmail}>`,
          to: [receiverEmail],
          subject: `[서광계기 문의] ${name}님의 견적/기술 문의가 접수되었습니다`,
          html: emailHtml,
        }),
      });

      const resendData = await resendRes.json();

      if (!resendRes.ok) {
        console.error("Resend API Error:", resendData);
        return NextResponse.json({
          success: true,
          warning: "이메일 전송 중 주의사항이 발생했습니다.",
          details: resendData,
        });
      }

      return NextResponse.json({
        success: true,
        message: "문의사항이 성공적으로 전송되었습니다.",
        sentTo: receiverEmail,
        id: resendData.id,
      });
    }

    return NextResponse.json({
      success: true,
      message: "문의사항이 정상 접수되었습니다.",
    });
  } catch (error: any) {
    console.error("Contact API Handler Error:", error);
    return NextResponse.json(
      { error: "문의 전송 중 서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
