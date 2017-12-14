import React, {Component} from 'react'
import Button from 'material-ui/Button'
import Input, {InputLabel} from 'material-ui/Input'
import {FormControl} from 'material-ui/Form'

class InfoHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {name: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = event => {
        this.setState({name: event.target.value})
    }

    handleSubmit = event => {
        this.props.simpleMessageStorageInstance.postMessage(this.state.name, {from: this.props.accounts[0]})
        event.preventDefault()
    }

    onClick = event => {
        console.log("Button press")
    }

    onSubmit = event => {
        console.log("Submitted")
    }

    render() {
        return (
            <div>
                <h1>René's List</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormControl>
                        <InputLabel htmlFor="name-error">Enter message</InputLabel>
                        <Input id="name-error" value={this.state.name} onChange={this.handleChange}
                               onSubmit={this.onSubmit}/>
                        <Button raised color="primary" type="submit">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </div>
        )
    }
}

export default InfoHeader
