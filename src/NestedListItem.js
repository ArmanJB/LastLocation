import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import PeopleIcon from '@material-ui/icons/People';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { keys } from '@material-ui/core/styles/createBreakpoints';

export default function NestedListItem(props) {
    const [open, setOpen] = React.useState(false);

    function handleClick() {
      setOpen(!open);
    }

    return (
        <React.Fragment>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary={props.team.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.team.employees.map((employee) => (
                        <ListItem key={employee.id} button className={props.classes.nested} onClick={() => (console.log('hola'))}>
                            <ListItemAvatar>
                                <Avatar alt={employee.fullName} src={employee.avatarUrl} />
                            </ListItemAvatar>
                            <ListItemText primary={employee.fullName}/>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
    );
}