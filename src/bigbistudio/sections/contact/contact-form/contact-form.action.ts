"use server"

// Internal
import { contactFormSchema } from "./contact-form.schema"
import { sendContactEmail } from "./contact-form.service"
import { verifyTurnstile } from "./captcha"

import { siteData } from "@/bigbistudio/data/site"

// Types
import type {
    ContactFormResult,
    ContactFormValues
} from "./contact-form.types"

const CAPTCHA_ENABLED = Boolean(
    process.env.TURNSTILE_SECRET_KEY,
)

/**
 * Submit contact form.
 */
export async function submitContactForm(
    values: ContactFormValues,
): Promise<ContactFormResult> {
    // Validate input.
    const result = contactFormSchema.safeParse(values)

    if (!result.success) {
        return {
            success: false,
            // Default: "Please check your input and try again."
            message: siteData.message.checkInput,
        }
    }

    try {
        if (CAPTCHA_ENABLED) {
            /*
            * Client-side check.
            *
            * Turnstile validates NEXT_PUBLIC_TURNSTILE_SITE_KEY and generates
            * a token. Since client-side code can be bypassed or modified,
            * the token must still be verified on the server.
            */
            if (!result.data.captchaToken) {
                return {
                    success: false,
                    // Default: "Please complete the captcha."
                    message: siteData.message.completeCaptcha,
                }
            }

            /*
            * Server-side check.
            *
            * Verify the Turnstile token with Cloudflare using TURNSTILE_SECRET_KEY.
            * This prevents forged, expired, or reused tokens.
            */
            const captchaResult = await verifyTurnstile(
                result.data.captchaToken,
            )

            if (!captchaResult.success) {
                console.error(
                    "[Turnstile Error]:",
                    captchaResult["error-codes"],
                )

                return {
                    success: false,
                    // Default: "Captcha verification failed."
                    message: siteData.message.captchaFailed
                }
            }
        }

        // Send email
        await sendContactEmail(result.data)

        return {
            success: true,
            // Default: "Your message has been sent successfully."
            message: siteData.message.sentSuccessfully,
        }
    } catch (error) {
        console.log(error)

        return {
            success: false,
            // Default: "Unable to send your message. Please try again later."
            message: siteData.message.unableSend,
        }
    }
}