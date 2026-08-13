export type Plan = {
    title: string
    popular: boolean
    currencySign?: string
    monthlyPrice?: string
    yearlyPrice?: string
    priceLabel?: string
    priceNote: string
    benefits: string[]
    cta: {
        label: string
        href: string
    }
}

export type Pricing = {
    plans: Plan[]
}