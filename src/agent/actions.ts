import infoAgent from './info'

import {AnchorUser} from '../interfaces'

const agent = {
    async newUser(user: AnchorUser) {
        const actions = [{
            account: 'vendettaciti',
            name: 'newuser',
            authorization: [
                {
                    actor: user.accountName,
                    permission: "active",
                },
            ],
            data: {
                user_name: user.accountName,
            },
        }]
        return await user.signTransaction(
            {actions},
            {
                blocksBehind: 3,
                expireSeconds: 30,
            }
        )
    },
    async depositAsset(user: AnchorUser, asset_id: string) {
        const actions = [{
            account: 'atomicassets',
            name: 'transfer',
            authorization: [
                {
                    actor: user.accountName,
                    permission: "active",
                },
            ],
            data: {
                from: user.accountName,
                to: "vendettaciti",
                asset_ids: [asset_id],
                memo: "deposit",
            },
        }]
        return await user.signTransaction(
            {actions},
            {
                blocksBehind: 3,
                expireSeconds: 30,
            }
        )
    },
    async getTheGang(user: AnchorUser, gangName: string) {
        const actions = [{
            account: 'vendettaciti',
            name: 'getthegang',
            authorization: [
                {
                    actor: user.accountName,
                    permission: "active",
                },
            ],
            data: {
                owner: user.accountName,
                gang_name: gangName
            },
        }]
        return await user.signTransaction(
            {actions},
            {
                blocksBehind: 3,
                expireSeconds: 30,
            }
        )
    },
    async getOutGang(user: AnchorUser) {
        const actions = [{
            account: 'vendettaciti',
            name: 'getoutgang',
            authorization: [
                {
                    actor: user.accountName,
                    permission: "active",
                },
            ],
            data: {
                owner: user.accountName,
            },
        }]
        return await user.signTransaction(
            {actions},
            {
                blocksBehind: 3,
                expireSeconds: 30,
            }
        )
    }
}

export default agent