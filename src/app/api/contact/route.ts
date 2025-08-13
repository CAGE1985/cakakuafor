import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();

    // Debug: Environment variables'ları kontrol et
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***' : 'NOT_SET');

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { success: false, message: 'E-posta ayarları eksik' },
        { status: 500 }
      );
    }

    // E-posta transporter'ı oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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
      { success: false, message: `E-posta gönderme hatası: ${error.message}` },
      { status: 500 }
    );
  }
}
