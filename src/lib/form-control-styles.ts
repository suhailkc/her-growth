import { cva } from 'class-variance-authority'

/** Shared sizing for text fields — default matches shadcn; comfortable meets 44px touch guidance. */
export const formControlSizeVariants = cva('', {
  variants: {
    fieldSize: {
      default: '',
      comfortable: 'min-h-11 px-3.5 py-2.5 text-base leading-normal md:text-base',
    },
  },
  defaultVariants: {
    fieldSize: 'default',
  },
})
