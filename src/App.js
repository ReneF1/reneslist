import React, {Component} from 'react'
import SimpleStorageContract from '../build/contracts/SimpleMessageStorage.json'
import getWeb3 from './utils/getWeb3'
import InfoHeader from './components/InfoHeader'
import PrimaryList from './components/PrimaryList'
import Grid from 'material-ui/Grid'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            storageValue: "no Data",
            SimpleMessageStorageInstance: "test",
            web3: null
        }
    }

    componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.

        getWeb3
            .then(results => {
                this.setState({
                    web3: results.web3
                })

                // Instantiate contract once web3 provided.
                this.instantiateContract()
            })
            .catch(() => {
                console.log('Error finding web3.')
            })
    }

    instantiateContract() {
        /*
         * SMART CONTRACT EXAMPLE
         *
         * Normally these functions would be called in the context of a
         * state management library, but for convenience I've placed them here.
         */

        const contract = require('truffle-contract')
        const SimpleMessageStorage = contract(SimpleStorageContract)
        SimpleMessageStorage.setProvider(this.state.web3.currentProvider)

        // Declaring this for later so we can chain functions on SimpleStorage.
        var SimpleMessageStorageInstance

        // Get accounts.
        this.state.web3.eth.getAccounts((error, accounts) => {
            SimpleMessageStorage.deployed().then((instance) => {
                SimpleMessageStorageInstance = instance
                this.setState({
                    SimpleMessageStorageInstance: SimpleMessageStorageInstance,
                    accounts: accounts
                })
            }).then((result) => {
                // Get the value from the contract to prove it worked.
                return SimpleMessageStorageInstance.readMessage.call(1, accounts[0])
            }).then((result) => {
                // Update state with the result.
                return this.setState({storageValue: result})
            })
        })
    }

    render() {
        return (
            <Grid container justify={'center'} direction={'row'} alignItems={'center'}>
                <Grid item xs={12}>
                    <InfoHeader accounts={this.state.accounts}
                                simpleMessageStorageInstance={this.state.SimpleMessageStorageInstance}/>
                    <PrimaryList storageValue={this.state.storageValue}/>
                </Grid>
            </Grid>
        )
    }
}

export default App
