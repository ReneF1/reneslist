import React, { Component } from 'react';
import Button from 'material-ui/Button';

class InfoHeader extends Component {
    render() {
        return (
            <div>
                <h1>René's List</h1>
                <Button raised color="primary">
                    Join
                </Button>
            </div>

        );
    }
}

export default InfoHeader;
