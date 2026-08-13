import type { TurnstileVerifyResponse } from "./turnstile.types"

/**
 * Verify Cloudflare Turnstile token.
 * For development: Cloudflare's testing token. 
 * You can set in .env.local
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
 * TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
 */
export async function verifyTurnstile(
    token: string,
): Promise<TurnstileVerifyResponse> {
    const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY!,
                response: token,
            }),
        },
    )

    const result =
        (await response.json()) satisfies TurnstileVerifyResponse

    /**
     * A successful response typically includes:
     * {
     *   "success": true,
     *   "challenge_ts": "...",
     *   "hostname": "localhost"
     *  }
     * 
     * An unsuccessful response looks like:
     * {
     *  "success": false,
     *   "error-codes": [
     *       "invalid-input-response"
     *   ]
     * }
     * 
     */
    //console.log(result)

    return result
}