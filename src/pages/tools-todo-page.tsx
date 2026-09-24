import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/common/page-container'
import { PageHeader } from '@/components/common/page-header'
import { Button, buttonVariants } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToolsStore } from '@/features/tools/tools-store'

export function ToolsTodoPage() {
  const [draft, setDraft] = useState('')
  const todos = useToolsStore((s) => s.todos)
  const addTodo = useToolsStore((s) => s.addTodo)
  const toggleTodo = useToolsStore((s) => s.toggleTodo)
  const removeTodo = useToolsStore((s) => s.removeTodo)

  return (
    <PageContainer width="narrow">
      <PageHeader
        title="To-do list"
        description="Add small tasks and tick them when you are ready — it is fine to leave some for tomorrow."
        action={
          <Link
            to="/tools"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-xl',
            })}
          >
            All tools
          </Link>
        }
      />

      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault()
          addTodo(draft)
          setDraft('')
        }}
      >
        <Input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Example: Call the school office"
          className="min-h-11 flex-1 text-base"
          aria-label="New task"
        />
        <Button type="submit" size="lg" className="rounded-xl">
          Add
        </Button>
      </form>

      <ul className="mt-6 space-y-3">
        {todos.length === 0 ? (
          <li className="text-sm text-muted-foreground">
            No tasks yet — add one when you think of it.
          </li>
        ) : (
          todos.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 rounded-xl border border-border/80 bg-card px-4 py-3"
            >
              <Checkbox
                id={item.id}
                checked={item.done}
                onCheckedChange={() => toggleTodo(item.id)}
                className="mt-1"
              />
              <Label
                htmlFor={item.id}
                className={`flex-1 text-base font-normal ${item.done ? 'text-muted-foreground line-through' : ''}`}
              >
                {item.text}
              </Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeTodo(item.id)}
                className="shrink-0 text-muted-foreground"
              >
                Remove
              </Button>
            </li>
          ))
        )}
      </ul>
    </PageContainer>
  )
}
