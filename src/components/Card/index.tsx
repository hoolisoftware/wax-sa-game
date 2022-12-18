import css from './index.module.css'

interface CardProps {
    children: any
    className?: string
}

const Card = (props: CardProps) => {
    return <div className={ [css.card, props.className].join(' ') }>
        { props.children }
    </div>
}

export default Card