// Web app sign-in URL used by every "Start Shipping" / "Get Started" CTA.
// NEXT_PUBLIC_* values are inlined at build time, so fall back to the
// production URL rather than "#" if the variable wasn't provided to the build.
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'https://app.traderlc.com/auth/signin'
