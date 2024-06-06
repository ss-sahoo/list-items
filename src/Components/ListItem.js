import React from 'react';
import { ListItem, ListItemText, Paper } from '@mui/material';

const ListItemComponent = ({ item }) => {
  return (
    <Paper elevation={3} style={{ margin: '10px 0', borderRadius: '5px' }}>
      <ListItem>
        <ListItemText
          primary={item.title}
          secondary={item.body}
        />
      </ListItem>
    </Paper>
  );
};

export default ListItemComponent;
