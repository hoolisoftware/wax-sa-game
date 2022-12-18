import css from './index.module.css'
import gang1 from '../../assets/img/gang-1.jpg'
import gang2 from '../../assets/img/gang-2.jpg'
import gang3 from '../../assets/img/gang-3.jpg'
import gang4 from '../../assets/img/gang-4.jpg'

import {useState} from 'react'

import { AnchorUser } from '../../interfaces'
import Button from '../../components/Button'
import Card from '../../components/Card'
import {Heading, Paragraph} from '../../components/Typography'

import actionsAgent from '../../agent/actions'

interface GangCardProps {
    active: boolean
    onClick: Function
    imgSrc: string
}

interface SelectGangProps {
    user: AnchorUser
    callback: Function
}

const GangCard = (props: GangCardProps) => {
    return <div onClick={ () => props.onClick() } className={ css.gangCard + ' ' + ( props.active ? css.gangCardActive : '' ) }>
        <img src={ props.imgSrc }/>
        { props.active ? 'SELECTED' : '' }
    </div>
}

const SelectGang = (props: SelectGangProps) => {
    document.title = 'Select your gang'
    const [selectedGangName, setSelectedGangName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const confirm = () => {
        actionsAgent.getTheGang(props.user, selectedGangName)
            .then(() => props.callback())
            .catch(e => setErrorMessage(e.message))
    }
    return <div className={css.page}>
        <Heading className={css.heading}>Select your gang</Heading>
        <Heading className={css.sub_heading} muted={true}>(you wont be able to change it)</Heading>        
        <Card className={css.dialog}>
            <GangCard active={ selectedGangName === 'triada' } imgSrc={gang1} onClick={ () => setSelectedGangName('triada') }/>
            <GangCard active={ selectedGangName === 'russians' } imgSrc={gang2} onClick={ () => setSelectedGangName('russians') }/>
        </Card>
        { errorMessage ? <Paragraph className={css.errorMessage}>{errorMessage}</Paragraph> : '' }
        <Button className={ css.button } disabled={ selectedGangName ? false : true } onClick={ () => confirm() }>
            Confirm
        </Button>
    </div>
}

export default SelectGang