import css from './index.module.css'

interface ButtonProps {
    children: any
    disabled?: boolean
    className?: string
    onClick: Function
}

const Button = (props: ButtonProps) => {
    return <button 
        className={ [css.button, props.className, (props.disabled ? css.buttonDisabled : '' )].join(' ') } 
        onClick={ () => {!props.disabled ? props.onClick() : null} }>
        {props.children}
    </button>
}

export type {ButtonProps}
export default Button