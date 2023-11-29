'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async(formData: FormData) => {
    console.log('Running on server')
    console.log(formData.get('message'))
    console.log(formData.get('first-name'))
    console.log(formData.get('email'))

    console.log('email sent')
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'iuliiaobr.io@gmail.com',
        subject: 'Message from portfolio contact form',
        text: 'Hello world!'
    })
  }