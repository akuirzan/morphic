'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      {/* Globe */}
      <circle cx="128" cy="128" r="64" fill="#8BC34A" />
      <circle cx="128" cy="128" r="60" fill="none" stroke="#8BC34A" strokeWidth="4" />
      <path
        d="M128 64a64 64 0 01128 64 64 64 0 01-128 64 64 64 0 01-128-64 64 64 0 0128-64z"
        fill="none"
        stroke="#8BC34A"
        strokeWidth="4"
      />
      <path
        d="M128 64a64 64 0 01-128 64 64 64 0 0128 64 64 64 0 0128-64 64 64 0 01-128-64z"
        fill="none"
        stroke="#8BC34A"
        strokeWidth="4"
        transform="rotate(90 128 128)"
      />

      {/* Speech Bubble */}
      <path
        d="M128 64a64 64 0 01128 64 64 64 0 01-128 64 64 64 0 01-128-64 64 64 0 0128-64z"
        fill="#8BC34A"
        transform="translate(64 0) rotate(-45 128 128)"
      />
    </svg>
  )
}

export { IconLogo }
