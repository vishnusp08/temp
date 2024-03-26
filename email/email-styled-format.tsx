import { Head, Preview, Body, Heading, Hr, Container, Section, Text, Html } from "@react-email/components";
import { Tailwind } from "@react-email/components";
export function Email_styled(prop: { message: string; senderEmail: string }) {
    return (
        <Html>
            <Head />
            <Preview>New e-mail from your portfolio contact </Preview>
            <Tailwind>
                <Body className="bg-gray-200 text-black">
                    <Container>
                        <Section className="bg-white border-black my-10 px-10 py-4 rounded-sm">
                            <Heading className="leading-tight">You received this message from your portfolio website</Heading>
                            <Text>{prop.message}</Text>
                            <Hr />
                            <Text>{prop.senderEmail} sent you this mail</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
