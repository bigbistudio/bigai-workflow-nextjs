"use client"

// External
import { useState, useTransition } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Turnstile } from "@marsidev/react-turnstile"

// Internal
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"

import { submitContactForm } from "./contact-form.action"
import { contactFormSchema } from "./contact-form.schema"

import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"
import { cn } from "@/bigbistudio/utils/shadcn-utils"

import { siteData } from "@/bigbistudio/data/site"

// Types
import type { ContactFormValues } from "./contact-form.types"

export type ContactFormProps = {
    className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [isPending, startTransition] = useTransition()
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const isCaptchaEnabled = !!siteKey

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      captchaToken: "",
    },
  })

  function onSubmit(values: ContactFormValues) {
    setSubmitError(null)
    setSubmitSuccess(null)

    startTransition(async () => {
      const result = await submitContactForm(values)

      if (result.success) {
        form.reset()
        setSubmitSuccess(result.message)
        return
      }

      setSubmitError(result.message)
    })
  }

  return (
    <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
      {/* Name */}
      <Controller
        control={form.control}
        name="name"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor="name"
              className={cn("text-small! font-normal text-ink-tertiary")}
            >
              {siteData.form.name.label}
            </FieldLabel>

            <FieldContent>
              <Input
                id="name"
                placeholder={siteData.form.name.placeholder}
                aria-invalid={fieldState.invalid}
                className={cn(bigbiStyles.input, "w-full")}
                {...field}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} className="mt-1" />
              )}
            </FieldContent>
          </Field>
        )}
      />

      {/* Email */}
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor="email"
              className={cn("text-small! font-normal text-ink-tertiary")}
            >
              {siteData.form.email.label}
            </FieldLabel>

            <FieldContent>
              <Input
                id="email"
                type="email"
                placeholder={siteData.form.email.placeholder}
                aria-invalid={fieldState.invalid}
                className={cn(bigbiStyles.input, "w-full")}
                {...field}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} className="mt-1" />
              )}
            </FieldContent>
          </Field>
        )}
      />

      {/* Message */}
      <Controller
        control={form.control}
        name="message"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor="message"
              className={cn("text-small! font-normal text-ink-tertiary")}
            >
              {siteData.form.message.label}
            </FieldLabel>

            <FieldContent>
              <Textarea
                id="message"
                rows={10}
                placeholder={siteData.form.message.placeholder}
                aria-invalid={fieldState.invalid}
                className={cn(bigbiStyles.textarea, "w-full")}
                {...field}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} className="mt-1" />
              )}
            </FieldContent>
          </Field>
        )}
      />

      {/* Cloudflare Turnstile */}
      {isCaptchaEnabled && (
        <Controller
          control={form.control}
          name="captchaToken"
          render={({ field }) => (
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={field.onChange}
              onExpire={() => field.onChange("")}
              onError={() => {
                setSubmitError(
                  // Default: "Captcha is currently unavailable. Please try again later."
                  siteData.message.captchaUnavailable,
                )

                field.onChange("")
              }}
              className="w-full scale-75 -translate-x-4.5! sm:scale-100 sm:translate-x-0!"
            />
          )}
        />
      )}

      {submitError && (
        <p className="text-small text-destructive">{submitError}</p>
      )}

      {submitSuccess && (
        <p className="text-small text-green-600">{submitSuccess}</p>
      )}

      <Button
        type="submit"
        variant="secondary"
        disabled={isPending}
        className={cn(bigbiStyles.button.secondary, "w-full")}
      >
        {isPending ? siteData.labels.sending : siteData.labels.sendMessage}
      </Button>
    </form>
  )
}
