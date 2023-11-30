'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async(formData: FormData) => {
    const senderEmail = formData.get('email')
    const message = formData.get('message')

    if(!message || typeof message !== 'string') {
        return {
            error: 'Invalid message'
        }
    }

    

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'iuliiaobr.io@gmail.com',
        subject: 'Message from portfolio contact form',
        reply_to: senderEmail,
        text: message,
    })
  }