import React, { Component } from 'react';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class PrimaryList extends Component {
    render() {
        return (
            <div>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <p>1</p>
                        </ListItemIcon>
                        <ListItemText primary="Pferde" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <p>2</p>
                        </ListItemIcon>
                        <ListItemText primary="Coin" />
                    </ListItem>
                </List>
            </div>

        );
    }
}

export default PrimaryList;
