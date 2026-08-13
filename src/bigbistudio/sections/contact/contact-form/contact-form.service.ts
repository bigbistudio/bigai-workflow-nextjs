// External
import { Resend } from "resend"

// Types
import type { ContactFormValues } from "./contact-form.types"

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send contact email.
 */
export async function sendContactEmail(
    values: ContactFormValues,
): Promise<void> {
    // console.log("Contact form submitted:", values);

    const { data, error } = await resend.emails.send({
        from: "BigA.i <onboarding@resend.dev>",
        to: ["onboarding@resend.dev"],
        subject: `New contact from ${values.name}`,
        text: `
            Name: ${values.name}

            Email: ${values.email}

            Message:
            
            ${values.message}
        `
    })

    if (error) {
        console.log("Resend API Error:", error)
        console.log("Response Data:", data)
        throw error
    }
}