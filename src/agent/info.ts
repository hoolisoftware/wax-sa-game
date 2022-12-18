import {JsonRpc} from 'eosjs'

const agent = {
    rpc: new JsonRpc('https://wax-testnet.eosphere.io', { fetch }),
    async hasUser(userName: string) {
        let user = await agent.getUser(userName)
        return Boolean(user)
    },
    async getUser(userName: string) {
        let data = await this.rpc.get_table_rows({
            json: true,
            code: "vendettaciti",
            scope: "vendettaciti",
            index_position: "primary",
            key_type: 'name',
            table: "users",
            upper_bound: userName,
            lower_bound: userName,
            reverse: false,
            show_payer: false,
        })

        return data.rows[0]
    },
    async isUserPrisoner(userName: string) {
        let data = await this.rpc.get_table_rows({
            json: true,
            code: "vendettaciti",
            scope: "vendettaciti",
            index_position: 'primary',
            key_type: 'name',
            table: 'prisoner',
            upper_bound: userName,
            lower_bound: userName,
            reverse: false,
            show_payer: false,
        })
        return Boolean(data.rows[0])
    },
    async isUserGang(userName: string) {
        let data = await this.rpc.get_table_rows({
            json: true,
            code: "vendettaciti",
            scope: "vendettaciti",
            index_position: 'primary',
            key_type: 'name',
            table: 'gangs',
            upper_bound: userName,
            lower_bound: userName,
            reverse: false,
            show_payer: false,
        })
        return Boolean(data.rows[0])
    },
    async getUserNFTs(userName: string) {
        let res = await fetch(`https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=vendettaciti&owner=${userName}`)
        let data = await res.json()
        return data.data
    },
    getUserNFTImage(value: string) {
        return `https://atomichub-ipfs.com/ipfs/${value}`
    }
}

export default agent