import type { z } from "zod"

import type { contactFormSchema } from "./contact-form.schema"

/**
 * Contact form values.
 */
export type ContactFormValues = z.infer<
    typeof contactFormSchema
>

/**
 * Contact form submission result.
*/
export type ContactFormResult = {
    success: boolean
    message: string

    // Optional Cloudflare Turnstile token.
    captchaToken?: string
}