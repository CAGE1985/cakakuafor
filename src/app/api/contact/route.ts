import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();

    // Debug: Environment variables'ları kontrol et
    console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '***' : 'NOT_SET');

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: 'Resend API key eksik' },
        { status: 500 }
      );
    }

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
      { success: false, message: `E-posta gönderme hatası: ${error.message}` },
      { status: 500 }
    );
  }
}
