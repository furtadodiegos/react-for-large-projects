import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
} from '@material-ui/core';

const ListWithActionComponent = ({ items }) => {
  return (
    <List id="list">
      {items.map(({ label, avatar, secondaryAction: { icon, action } }) => (
        <ListItem key={v4()} button>
          <ListItemAvatar>
            <Avatar alt="ava" src={avatar} />
          </ListItemAvatar>
          <ListItemText primary={label} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments" onClick={action}>
              {icon}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

ListWithActionComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      label: PropTypes.string.isRequired,
      secondaryAction: PropTypes.shape({
        icon: PropTypes.node.isRequired,
        action: PropTypes.func.isRequired,
      }),
    }),
  ).isRequired,
};

export default ListWithActionComponent;
