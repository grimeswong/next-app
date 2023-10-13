import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Create a new instance
 // must be use your own domain to send email eg. xxxxx@grimeswong.com.au
export async function POST() {
    await resend.emails.send({
      from: "sendemail@fakedomain.com", // must be use your own domain to send email eg. xxxxx@grimeswong.com.au
      to: "programmingwithmosh@gmail.com",
      subject: "Next app test email",
      react: <WelcomeTemplate name="Mosh" />,
    });

    return NextResponse.json({})
}