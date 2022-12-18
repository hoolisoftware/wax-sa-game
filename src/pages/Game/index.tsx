import css from './index.module.css'

import {UAL} from '../../interfaces'

import {useCallback, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import infoAgent from '../../agent/info'
import actionAgent from '../../agent/actions'

import Button from '../../components/Button'

interface GameProps {
    ual: UAL,
    reload: Function
}

const Game = (props: GameProps) => {

    document.title = 'Game'
    const [gameUser, setGameUser] = useState<any>({})

    useEffect(() => {
        setTimeout( () => {
            infoAgent.getUser(props.ual.activeUser.accountName)
                .then(data => {setGameUser(data)})
        }, 1000)
    }, [])

    return <>
        <div className={css.container}>
            Username: {gameUser.username}
            <br/>
            Coordinates: {gameUser.coordinates}
            <br/>
            Next Point: {gameUser.next_point}
            <br/>
            <br />
            <div className={css.buttons}>
                <Button onClick={ () => props.ual.logout() }>Logout</Button>
                <Button onClick={ () => actionAgent.getOutGang(props.ual.activeUser).then( () => props.reload() ) }>Get out gang</Button>
            </div>
        </div>
    </>
}

export default Game