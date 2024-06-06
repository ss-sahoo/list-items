import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, List, ListItem, ListItemText } from '@mui/material';
import ListItemComponent from './Components/ListItem';
import SearchBar from './Components/SearchBar';


function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container>
    <Typography variant="h4" gutterBottom>
      Post List
    </Typography>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <List>
      {filteredItems.map(item => (
        <ListItemComponent key={item.id} item={item} />
      ))}
    </List>
  </Container>
  );
}

export default App;
