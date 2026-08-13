// Central registry of Lucide icons used across the project.
//
// Why:
// - Allows icon names from JSON/CMS to be mapped to React components.
// - Keeps imports tree-shakeable by importing only the icons we use.
// - Provides a type-safe list of available icon names.

// External
import {
  Activity,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  ChevronDown,
  Fingerprint,
  GitMerge,
  RectangleGoggles,
  ShieldCheck,
  SlidersHorizontal,
  Unplug,
  Waypoints,
  Wind,
  CloudFog,
  Bot,
  Plane,
  Signpost,
  Wallet,
  Mail,
  Phone,
  Map,
  MapPin,
  type LucideIcon,
} from "lucide-react"

export const lucideIcons = {
  Activity,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  ChevronDown,
  Fingerprint,
  GitMerge,
  RectangleGoggles,
  ShieldCheck,
  SlidersHorizontal,
  Unplug,
  Waypoints,
  Wind,
  CloudFog,
  Bot,
  Plane,
  Signpost,
  Wallet,
  Mail,
  Phone,
  Map,
  MapPin,
} satisfies Record<string, LucideIcon>

// Valid icon names for content and component props.
export type LucideIconName = keyof typeof lucideIcons
