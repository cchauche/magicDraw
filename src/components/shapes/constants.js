export const TOOL_TYPES = {
    RECT: 'rect',
    ELLI: 'ellipse',
    TEXT: 'text',
    SEL: 'select'
}

export const SHAPE_DEFAULTS = {
    RECT: {
        width: 0,
        height: 0,
        fill: '',
        stroke: '#000000',
        type: TOOL_TYPES.RECT
    },
    TEXT: {
        width: 0,
        height: 0,
        fill: 'green',
        stroke: '#000000',
        text: 'Text Here',
        type: TOOL_TYPES.TEXT,
    },
}
