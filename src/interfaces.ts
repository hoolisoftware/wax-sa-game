interface UAL {
    activeUser: AnchorUser
    authenticators: object
    showModal: Function
    logout: Function
}

interface Action
{
    account: string
    name: string
    authorization: object[]
    data: object
}

interface AnchorUser {
    accountName: string
    signTransaction: Function
}

interface Asset {
    asset_id: string
    data: any
}


export type {
    AnchorUser,
    Action,
    Asset,
    UAL
}