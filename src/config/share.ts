/** Who receives stage-complete cheers (family / coach). */
export const shareWithKuttimon = {
  recipientNickname: 'Kuttimon',
  /** India (+91) — opens Kuttimon’s WhatsApp chat from stage-complete share. */
  whatsAppPhoneE164: sanitizeWhatsAppPhone(
    import.meta.env.VITE_WHATSAPP_KUTTIMON_E164 ?? '919567455218',
  ),
} as const

function sanitizeWhatsAppPhone(raw: string | undefined): string {
  if (!raw) {
    return ''
  }
  return raw.replace(/\D/g, '')
}
