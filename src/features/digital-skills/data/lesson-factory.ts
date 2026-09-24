import type {
  DigitalSkillsDifficulty,
  DigitalSkillsLesson,
  DigitalSkillsLessonStep,
} from '@/types/digital-skills'

type StepInput = {
  instruction: string
  detail: string
  tip?: string
  visualLabel?: string
}

type LessonInput = {
  id: string
  stageId: string
  order: number
  title: string
  summary: string
  whyItMatters: string
  difficulty: DigitalSkillsDifficulty
  estimatedMinutes: number
  learningObjective: string
  steps: StepInput[]
  practicalTask: string
  completionAction: string
}

function buildSteps(lessonId: string, steps: StepInput[]): DigitalSkillsLessonStep[] {
  return steps.map((step, index) => ({
    id: `${lessonId}-step-${index + 1}`,
    instruction: step.instruction,
    detail: step.detail,
    tip: step.tip,
    visualLabel: step.visualLabel ?? `Step ${index + 1} guide image`,
  }))
}

export function createDigitalSkillsLesson(input: LessonInput): DigitalSkillsLesson {
  return {
    id: input.id,
    stageId: input.stageId,
    order: input.order,
    title: input.title,
    summary: input.summary,
    whyItMatters: input.whyItMatters,
    difficulty: input.difficulty,
    estimatedMinutes: input.estimatedMinutes,
    learningObjective: input.learningObjective,
    steps: buildSteps(input.id, input.steps),
    practicalTask: input.practicalTask,
    completionAction: input.completionAction,
  }
}
