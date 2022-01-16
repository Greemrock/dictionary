import React from 'react';
import { Paper, IconButton, InputBase, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const HomePage: React.FC = () => {
  return (
    <Container
      sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Paper
        component="form"
        variant="outlined"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} inputProps={{ 'aria-label': 'search word' }} />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};
