import css from './index.module.css'
import bg from '../../assets/img/page-login-bg.jpg'

import Button from '../../components/Button'
import Background from '../../components/Background'
import Card from '../../components/Card'
import Dropdown from '../../components/Dropdown'
import {Heading} from '../../components/Typography'

interface LoginProps {
    showModal: Function
}

const Login = (props: LoginProps) => {
    document.title = 'Login'
    return <div className={ css.page }>
        <Background src={bg}/>
        <Card className={ css.dialog }>
            <Heading className={ css.dialog__heading }>Select chain</Heading>
            <Dropdown 
                className={ ['w-100', css.dialog__button].join(' ') } 
                defaultOptionIndex={ 0 } 
                options={ ['WAX (Testnet)'] }
                callback={ (x: number) => console.log(x) }
            />
            <Button className={ css.dialog__button } onClick={ () => {props.showModal()} }>Login</Button>
        </Card>
    </div>
}

export default Login