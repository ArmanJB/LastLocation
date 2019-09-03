import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import PeopleIcon from '@material-ui/icons/People';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
            <Collapse in={open} timeout="auto" unmountOnExit style={{ background: '#6d6986', color: '#ffffff'}}>
                <List component="div" disablePadding>
                    {props.team.employees.map((employee) => (
                        <ListItem key={employee.id} button className={props.classes.nested} onClick={() => props.onChildClick(employee)}>
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