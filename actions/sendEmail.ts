'use server'

import ContactFormEmail from '@/email/contact-form-email'
import { getErrorMessage, validateString } from '@/utils/utils'
import React from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async(formData: FormData) => {
    const senderEmail = formData.get('email')
    const message = formData.get('message')


    if(!validateString(senderEmail, 500)) {
      return {
        error: 'Invalid sender email'
      }  
    }

    
    if(!validateString(message, 5000)) {
        return {
          error: 'Invalid message'
        }  
      }

      try{
          await resend.emails.send({
              from: 'Porfolio contact form <onboarding@resend.dev>',
              to: 'iuliiaobr.io@gmail.com',
              subject: 'Message from portfolio contact form',
              reply_to: senderEmail as string,
              react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
              }),
          })
      } catch(error: unknown) {
        return {
            error: getErrorMessage(error)
        }
      }
  }