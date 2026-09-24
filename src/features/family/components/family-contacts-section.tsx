import { SectionHeader } from '@/components/common/section-header'
import { ContactCard } from '@/features/family/components/contact-card'
import { mockFamilyContacts } from '@/data/mock-family'

export function FamilyContactsSection() {
  return (
    <section aria-labelledby="family-contacts-heading">
      <SectionHeader
        id="family-contacts-heading"
        title="Important Contacts"
        description="Quick numbers for school, health, and family — tap to call on your phone."
      />
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {mockFamilyContacts.map((contact) => (
          <li key={contact.id}>
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>
    </section>
  )
}
