import css from './index.module.css'

interface BackgroundProps {
    src: string
}

const Background = (props: BackgroundProps) => {
    return <img className={css.bg} src={props.src}/>
}

export default Background