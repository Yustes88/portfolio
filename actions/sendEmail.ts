'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async(formData: FormData) => {
    console.log('Running on server')
    console.log(formData.get('message'))
    console.log(formData.get('first-name'))
    console.log(formData.get('email'))
  }