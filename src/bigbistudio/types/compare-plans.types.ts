export type Plan = {
    id: string
    name: string
    description?: string
    popular?: boolean
    highlightedIcon?: boolean
    button?: {
        label: string
        href: string
    }
}

export type ComparePlanValue = {
    status: string
    text: string
}

export type Feature = {
    id: string
    label: string
    planValues: Record<string, ComparePlanValue>
}

export type Category = {
    id: string
    title: string
    features: Feature[]
}

export type ComparePlansLabels = {
    header: string
    footer: string
}

export type ComparePlans = {
    plans: Plan[]
    categories: Category[]
    labels?: ComparePlansLabels
}