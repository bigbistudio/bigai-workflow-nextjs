import type { UIGraphicId } from "@/bigbistudio/types/common.types"

export type Phase = {
    id: string,
    phase: string
    ui?: UIGraphicId,
    title: string
    description: string
}

export type Process = {
    phases: Phase[]
}