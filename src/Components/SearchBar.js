import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      margin="normal"
    />
  );
};

export default SearchBar;
