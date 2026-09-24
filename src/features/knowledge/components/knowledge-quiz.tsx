import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { KnowledgeQuizQuestion } from '@/features/knowledge/types'

type KnowledgeQuizProps = {
  questions: KnowledgeQuizQuestion[]
}

export function KnowledgeQuiz({ questions }: KnowledgeQuizProps) {
  return (
    <div className="space-y-8">
      {questions.map((question, index) => (
        <QuizQuestionBlock key={question.id} question={question} number={index + 1} />
      ))}
    </div>
  )
}

type QuizQuestionBlockProps = {
  question: KnowledgeQuizQuestion
  number: number
}

function QuizQuestionBlock({ question, number }: QuizQuestionBlockProps) {
  const [selected, setSelected] = useState<string>('')
  const [checked, setChecked] = useState(false)

  const correct = selected === question.correctOptionId

  return (
    <fieldset className="space-y-4 rounded-xl border border-border/80 bg-card p-4">
      <legend className="px-1 font-serif text-lg font-semibold">
        Question {number}: {question.prompt}
      </legend>
      <RadioGroup value={selected} onValueChange={setSelected} className="gap-3">
        {question.options.map((option) => (
          <div key={option.id} className="flex items-center gap-3">
            <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} />
            <Label
              htmlFor={`${question.id}-${option.id}`}
              className="text-base font-normal"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <Button
        type="button"
        variant="secondary"
        size="lg"
        disabled={!selected}
        onClick={() => setChecked(true)}
      >
        Check answer
      </Button>
      {checked ? (
        <p
          className={
            correct
              ? 'text-sm font-medium text-primary'
              : 'text-sm font-medium text-destructive'
          }
          role="status"
        >
          {correct ? 'Correct — well done.' : 'Not quite.'} {question.explanation}
        </p>
      ) : null}
    </fieldset>
  )
}
