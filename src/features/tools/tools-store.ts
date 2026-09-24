import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TodoItem = {
  id: string
  text: string
  done: boolean
}

type ToolsStoreState = {
  notesBody: string
  setNotesBody: (body: string) => void
  todos: TodoItem[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
}

function newTodoId(): string {
  return `todo-${crypto.randomUUID()}`
}

export const useToolsStore = create<ToolsStoreState>()(
  persist(
    (set) => ({
      notesBody: '',
      setNotesBody: (body) => set({ notesBody: body }),
      todos: [],
      addTodo: (text) => {
        const trimmed = text.trim()
        if (!trimmed) return
        set((state) => ({
          todos: [{ id: newTodoId(), text: trimmed, done: false }, ...state.todos],
        }))
      },
      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item,
          ),
        }))
      },
      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((item) => item.id !== id),
        }))
      },
    }),
    {
      name: 'her-growth-tools',
      partialize: (state) => ({
        notesBody: state.notesBody,
        todos: state.todos,
      }),
    },
  ),
)
