/**
 * example:
 * formatDate(meta.publishedAt, "en-US");
 * formatDate(meta.publishedAt, "de-DE");
 * 
 * @param date 
 * @param locale 
 * @returns DateTimeFormat
 */

export function formatDate(
    date: string | Date,
    locale?: string
) {
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(new Date(date))
}