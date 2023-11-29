'use server'

export const sendEmail = async(formData: FormData) => {
    console.log('Running on server')
    console.log(formData.get('message'))
    console.log(formData.get('first-name'))
    console.log(formData.get('email'))
  }