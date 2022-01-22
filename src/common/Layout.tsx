import { Container } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Fade triggerOnce={true} delay={200} direction="down">
        {children}
      </Fade>
    </Container>
  );
};
