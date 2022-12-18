import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'

import {setUser} from '../features/appSlice'
import {UAL} from '../interfaces'

import infoAgent from '../agent/info'

import Preloader from './Preloader'
import LoginPage from '../pages/Login'
import DepositAssetPage from '../pages/DepositAsset'
import SelectGangPage from '../pages/SelectGang' 
import GamePage from '../pages/Game'


interface AppProps {
  ual: UAL
}

interface AppData {
  userIsGang:boolean
  userIsPrisoner: boolean
}

function App(props: AppProps) {
  const dispatch = useDispatch()
  const [showPreloader, setShowPreloader] = useState(false)
  const [isUserGang, setIsUserGang] = useState<any>(undefined)
  const [isUserPrisoner, setIsUserPrisoner] = useState<any>(undefined)

  useEffect(()=>{
    dispatch(setUser(props.ual.activeUser ? props.ual.activeUser : {}))
    if (props.ual.activeUser) {
      if ((isUserGang === undefined) && (isUserPrisoner === undefined)){
        loadData()
      }
    }
  })

  useEffect( () => {
    setShowPreloader(true)
    setTimeout(() => {setShowPreloader(false)}, 3000)
  }, [])

  const loadData = async () => {
    let gang
    let prisoner
    setShowPreloader(true)
    
    setIsUserGang(gang = await infoAgent.isUserGang(props.ual.activeUser.accountName))

    if (!gang) {
      setIsUserPrisoner(prisoner = await infoAgent.isUserPrisoner(props.ual.activeUser.accountName))
    }

    setShowPreloader(false)
  }

  return (
    <div>
      <Preloader active={showPreloader}/>
      {
        props.ual.activeUser ? 
          (!isUserGang && !isUserPrisoner) ? <DepositAssetPage user={props.ual.activeUser} callback={loadData}/> :
          isUserPrisoner ? <SelectGangPage user={props.ual.activeUser} callback={loadData}/> : 
          <GamePage ual={props.ual} reload={loadData}/> 
        : <LoginPage showModal={props.ual.showModal}/>
      } 
    </div>
  )
}

export default App
