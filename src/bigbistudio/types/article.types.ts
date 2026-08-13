export type PortableBlock =
    | {
        _type: "eyebrow"
        text: string
        marginTop?: string
    }
    | {
        _type: "heading"
        level: 1 | 2 | 3
        text: string
        marginTop?: string
    }
    | {
        _type: "paragraph"
        text: string
        marginTop?: number
    }
    | {
        _type: "image"
        src: string
        alt?: string
        width?: number
        height?: number
        rounded?: number
    }
    | {
        _type: "list"
        style: "bullet" | "number"
        items: string[]
        marginTop?: number
    }
    | {
        _type: "card"
        numberOfCols?: number
        items: {
            style?: "default" | "medium"
            aboveText: string
            belowText: string
        }[],
        marginTop?: number
    }
    | {
        _type: "spacer"
        size?: number
    };