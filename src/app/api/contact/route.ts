import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, projectType, budget, phone } = body

    // Format the message
    const message = `*New Project Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company || 'N/A'}\n*Project Type:* ${projectType}\n*Budget:* ${budget}\n*Phone:* ${phone}`

    // ---------------------------------------------------------------------------
    // TWILIO WHATSAPP INTEGRATION (Requires Twilio Account)
    // ---------------------------------------------------------------------------
    const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
    const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
    const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER // e.g. 'whatsapp:+14155238886'
    const YOUR_PHONE_NUMBER = 'whatsapp:+917036592351'

    if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_PHONE_NUMBER) {
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`
      
      const formData = new URLSearchParams()
      formData.append('To', YOUR_PHONE_NUMBER)
      formData.append('From', TWILIO_PHONE_NUMBER)
      formData.append('Body', message)

      const response = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64')
        },
        body: formData.toString()
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('Twilio Error:', error)
        return NextResponse.json({ error: 'Failed to send WhatsApp message' }, { status: 500 })
      }
    } else {
      // If keys are missing, we just log it to the console (development mode)
      console.log('--- NEW CONTACT SUBMISSION ---')
      console.log(message)
      console.log('------------------------------')
      console.warn('NOTE: Twilio keys are missing in .env.local, so the WhatsApp message was not actually sent.')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Route Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
