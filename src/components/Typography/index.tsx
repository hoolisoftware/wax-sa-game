import css from './index.module.css'

interface TextProps
{
    children: string
    className?: string
    muted?: boolean
}

interface HeadingProps extends TextProps
{

}

interface ParagraphProps extends TextProps
{

}

const Text = (props: TextProps) => {
    return (
        <div className={ [css.text, props.className, (props.muted ? css.muted : '')].join(' ') }>
            { props.children }
        </div>
    ) 
}

const Heading = (props: HeadingProps) => {
    return (
        <div className={ [css.heading, props.className, (props.muted ? css.muted : '')].join(' ') }>
            { props.children }
        </div>
    ) 
}

const Paragraph = (props: ParagraphProps) => {
    return (
        <p className={ [css.paragraph, props.className, (props.muted ? css.muted : '')].join(' ') }>
            { props.children }
        </p>
    ) 
}


export default Text
export {
    Heading,
    Paragraph,
    Text,
}