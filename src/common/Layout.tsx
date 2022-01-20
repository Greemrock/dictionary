import { Container } from '@mui/material';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container
      sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div style={{ textAlign: 'center' }}>{children}</div>
    </Container>
  );
};
