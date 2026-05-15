import { SOCIAL_PROFILES } from '@/lib/business'
import { cn } from '@/lib/utils'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const platformIcons = {
  instagram: InstagramIcon,
} as const

type SocialLinksProps = {
  className?: string
  iconClassName?: string
  variant?: 'icons' | 'text'
}

export function SocialLinks({ className, iconClassName, variant = 'icons' }: SocialLinksProps) {
  if (SOCIAL_PROFILES.length === 0) return null

  return (
    <nav className={cn('flex items-center gap-3', className)} aria-label="Redes sociais">
      {SOCIAL_PROFILES.map((profile) => {
        const Icon = platformIcons[profile.platform]
        return (
          <a
            key={profile.platform}
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 transition-colors hover:opacity-80',
              variant === 'text' && 'text-sm font-medium',
            )}
            aria-label={`${profile.label}: ${profile.handle}`}
          >
            <Icon className={cn('size-5', iconClassName)} />
            {variant === 'text' ? <span>{profile.handle}</span> : null}
          </a>
        )
      })}
    </nav>
  )
}
