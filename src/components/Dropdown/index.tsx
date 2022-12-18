import {useState} from 'react'

import css from './index.module.css'
import {ButtonProps} from '../Button'
import Button from '../Button'


interface DropdownProps extends Omit<ButtonProps, 'children'|'onClick'>{
    options: Array<string>
    defaultOptionIndex: number
    callback: Function
    className?: string
}

const Dropdown = (props: DropdownProps) => {
    const [isActive, setIsActive] = useState(false)
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(props.defaultOptionIndex)
    return (
        <div className={ [css.dropdown, (isActive ? css.dropdownActive : ''), props.className].join(' ') }>
            <Button 
                className={ css.dropdown__button } 
                onClick={ ()=>{setIsActive(!isActive)} }
            >
                <i className="fa-solid fa-angle-down dropdown__angle"></i>&nbsp;&nbsp;
                { props.options[selectedOptionIndex] }
            </Button>
            <div className={css.dropdown__select}>
                { props.options?.map((option: string, index: number) => {
                    return <div 
                        key={index}
                        className={ [css.dropdown__option, (index === selectedOptionIndex ? css.dropdown__optionActive : '')].join(' ') }
                        onClick={ (e) => {e.preventDefault() ;props.callback(index); setSelectedOptionIndex(index)} }
                    >
                        { option }
                    </div> 
                }) }
            </div>
        </div>
    )
}

export default Dropdown