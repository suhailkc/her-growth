export function buildWhatsAppShareUrl(message: string, phoneE164?: string): string {
  const params = new URLSearchParams({ text: message })
  const digits = phoneE164?.replace(/\D/g, '') ?? ''
  if (digits.length > 0) {
    return `https://wa.me/${digits}?${params.toString()}`
  }
  return `https://wa.me/?${params.toString()}`
}
