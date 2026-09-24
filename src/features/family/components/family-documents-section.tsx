import { FileIcon, FileImageIcon, UploadIcon } from 'lucide-react'
import { useRef, useState, type ChangeEvent } from 'react'

import { SectionHeader } from '@/components/common/section-header'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { familyDocumentCategoryLabels } from '@/features/family/family-labels'
import { useFamilyStore } from '@/features/family/family-store'
import {
  FAMILY_DOCUMENT_CATEGORY_IDS,
  type FamilyDocument,
  type FamilyDocumentCategoryId,
} from '@/features/family/types'

function DocumentRow({ document }: { document: FamilyDocument }) {
  const Icon = document.kind === 'image' ? FileImageIcon : FileIcon

  return (
    <li className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/80 px-3 py-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-family text-family">
        <Icon className="size-5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium leading-snug">{document.name}</p>
        <p className="text-sm text-muted-foreground">{document.updatedLabel}</p>
      </div>
      {document.isPlaceholder ? (
        <Badge variant="family" className="shrink-0">
          Sample
        </Badge>
      ) : null}
    </li>
  )
}

export function FamilyDocumentsSection() {
  const documents = useFamilyStore((s) => s.documents)
  const addDocumentPlaceholder = useFamilyStore((s) => s.addDocumentPlaceholder)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadCategory, setUploadCategory] =
    useState<FamilyDocumentCategoryId>('child')
  const [uploadNotice, setUploadNotice] = useState<string | null>(null)

  const byCategory = FAMILY_DOCUMENT_CATEGORY_IDS.map((categoryId) => ({
    categoryId,
    items: documents.filter((doc) => doc.categoryId === categoryId),
  }))

  const handlePickFile = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) {
      return
    }
    addDocumentPlaceholder(file.name, uploadCategory)
    setUploadNotice(
      `"${file.name}" was added as a sample entry. Real file storage will come in a later update.`,
    )
  }

  return (
    <section aria-labelledby="family-documents-heading">
      <SectionHeader
        id="family-documents-heading"
        title="Family Documents"
        description="Group important papers by topic. Uploads here are placeholders for now."
      />

      <Card variant="family" className="mt-4">
        <CardContent className="flex flex-col gap-4 pt-6">
          <p className="text-sm text-muted-foreground">
            Choose a folder, then pick a file from your device. We will remember the name
            on this device only.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="doc-upload-category" className="text-sm font-medium">
                Category
              </label>
              <Select
                value={uploadCategory}
                onValueChange={(value) =>
                  setUploadCategory(value as FamilyDocumentCategoryId)
                }
              >
                <SelectTrigger id="doc-upload-category" size="comfortable" className="w-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {FAMILY_DOCUMENT_CATEGORY_IDS.map((id) => (
                    <SelectItem key={id} value={id}>
                      {familyDocumentCategoryLabels[id]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="button" variant="family" size="lg" onClick={handlePickFile}>
              <UploadIcon className="size-5" aria-hidden />
              Add a document
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              className="sr-only"
              accept=".pdf,.png,.jpg,.jpeg,.webp"
              onChange={handleFileChange}
            />
          </div>
        </CardContent>
      </Card>

      {uploadNotice ? (
        <Alert className="mt-4">
          <AlertTitle>Sample upload saved</AlertTitle>
          <AlertDescription>{uploadNotice}</AlertDescription>
        </Alert>
      ) : null}

      <div className="mt-6 space-y-6">
        {byCategory.map(({ categoryId, items }) => (
          <div key={categoryId}>
            <h3 className="font-serif text-lg font-semibold">
              {familyDocumentCategoryLabels[categoryId]}
            </h3>
            {items.length === 0 ? (
              <p className="mt-2 text-sm text-muted-foreground">
                No files here yet — use Add a document when you are ready.
              </p>
            ) : (
              <ul className="mt-3 flex flex-col gap-2">
                {items.map((document) => (
                  <DocumentRow key={document.id} document={document} />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
