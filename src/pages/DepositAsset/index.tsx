import "swiper/css";
import "swiper/css/navigation";
import css from './index.module.css'
import bg from '../../assets/img/page-deposit-asset-bg.jpg'

import {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {AnchorUser, Asset} from '../../interfaces'

import Background from '../../components/Background'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Heading, Paragraph} from '../../components/Typography' 

import infoAgent from '../../agent/info'
import actionsAgent from '../../agent/actions'

interface DepositAssetProps {
    user: AnchorUser
    callback: Function
}

const DepositAsset = (props: DepositAssetProps) => {
    document.title = 'Deposit Asset'
    const [userNfts, setUserNfts] = useState([])
    const [assets, setAssets] = useState <Array <Asset>> ([])
    const [selectedAssetIndex, setSelectedAssetIndex] = useState(0)

    useEffect(() => {
        if (props.user.accountName && !userNfts.length) {
            infoAgent.getUserNFTs(props.user.accountName).then(data => {setAssets(data)})
            infoAgent.hasUser(props.user.accountName).then(
                data => {
                    if (!data) {
                        actionsAgent.newUser(props.user)
                    }
                } 
            )
        }
    }, [])

    const depositAsset = () => {
        actionsAgent.depositAsset(props.user, assets[selectedAssetIndex].asset_id)
            .then( () => props.callback() )
    }

    return <div className={css.page}>
        <Background src={ bg }/>
        <Heading className={ css.heading }>Deposit your character</Heading>
        <Heading className={ css.sub_heading }>NFTs in wallet</Heading>
        <Card className={ css.dialog }>
            { 
                assets.length ? (
                    <Swiper 
                        className={css.swiper} 
                        navigation={true} 
                        modules={[Navigation]} 
                        onSlideChange={ swiper => setSelectedAssetIndex(swiper.activeIndex) }
                    >
                        { assets.map( item => (
                            <SwiperSlide key={item.asset_id}>
                                <img className={css.swiper__image} src={ infoAgent.getUserNFTImage(item.data.img) }/>
                            </SwiperSlide>
                        )) }
                    </Swiper>
                ) : <Paragraph>Not found nft's.</Paragraph>
            }
        </Card>
        {
            assets.length
            ? 
            <Button 
                className={ css.button } 
                onClick={ depositAsset } 
            >
                Confirm
            </Button>
            :
            <Paragraph>Get NFT of our game collection...</Paragraph>
        }
    </div>
}

export default DepositAsset