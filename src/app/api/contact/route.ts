import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();

    // E-posta gönder
    const { data, error } = await resend.emails.send({
      from: 'CAKA Kuaför <noreply@caka.tr>',
      to: [to],
      subject: subject,
      html: html,
    });

    if (error) {
      console.error('Resend hatası:', error);
      return NextResponse.json(
        { success: false, message: 'E-posta gönderilirken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'E-posta başarıyla gönderildi' });
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return NextResponse.json(
      { success: false, message: 'E-posta gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
