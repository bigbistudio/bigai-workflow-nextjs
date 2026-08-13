// External
import { z } from "zod"

// Internal
import { siteData } from "@/bigbistudio/data/site"

/**
 * Contact form validation schema.
 */
export const contactFormSchema = z.object({
    name: z
    .string()
    .trim()
    .min(1, siteData.message.nameIsRequired)
    .max(100, siteData.message.nameMustLessThan),

    email: z
    .email(siteData.message.enterValidEmail)
    .max(255, siteData.message.emailMustLessThan),

    message: z
    .string()
    .trim()
    .min(10, siteData.message.messageMustAtLeast)
    .max(2000, siteData.message.messageMustLessThan),

    captchaToken: z.string().optional(),
})