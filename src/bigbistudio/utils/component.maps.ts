// Why:
// - Allows icon names from JSON/CMS to be mapped to React components.

// Internal
import { UIAudit, UIBuilder, UIIntegration, UIPerformance } from "@/bigbistudio/components/graphics"
import { LinkedInIcon, XIcon, InstagramIcon, FacebookIcon, YoutubeIcon, DiscordIcon } from "@/bigbistudio/components/icons"

// Types
import type { SocialId } from "@/bigbistudio/types/company.types"
import type { UIGraphicId } from "@/bigbistudio/types/common.types"

export const uiGraphicMap: Record<UIGraphicId, React.ComponentType<{ className?: string }>> = {
  "ui-audit": UIAudit,
  "ui-builder": UIBuilder,
  "ui-integration": UIIntegration,
  "ui-performance": UIPerformance
}

export const socialIconMap: Record<SocialId, React.ComponentType<{ className?: string }>> = {
  "linkedin": LinkedInIcon,
  "x": XIcon,
  "instagram": InstagramIcon,
  "facebook": FacebookIcon,
  "youtube": YoutubeIcon,
  "discord": DiscordIcon,
}