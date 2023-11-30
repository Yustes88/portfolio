import {Html, Body, Head, Heading, Preview, Container, Section, Text, Hr} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string
    senderEmail: string;
}

export default function ContactFormEmail({
    message,
    senderEmail
}: ContactFormEmailProps) {
  return <Html>
    <Head/>
    <Preview>New message from your portfolio website</Preview>
    <Tailwind>
        <Body className='bg-gray-100 text-black'>
            <Container>
                <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
                    <Heading className='leading-tight'>You recieved the following message from your portfolio website</Heading>
                    <Text>
                        {message}
                    </Text>
                    <Hr/>
                    <Text>The sender email is: {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>
}
