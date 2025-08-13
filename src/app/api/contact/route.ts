import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();

    // E-posta transporter'ı oluştur
    const transporter = nodemailer.createTransporter({
      service: 'hotmail',
      auth: {
        user: process.env.EMAIL_USER, // Hotmail adresiniz
        pass: process.env.EMAIL_PASS, // Hotmail şifresi
      },
    });

    // E-posta gönder
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'E-posta başarıyla gönderildi' });
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return NextResponse.json(
      { success: false, message: 'E-posta gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
