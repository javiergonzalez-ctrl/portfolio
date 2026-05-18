import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('rounded-md', className)}
      style={{
        background: 'linear-gradient(90deg, hsl(0 0% 94%) 25%, hsl(0 0% 90%) 50%, hsl(0 0% 94%) 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
      }}
      {...props}
    />
  )
}

export { Skeleton }
