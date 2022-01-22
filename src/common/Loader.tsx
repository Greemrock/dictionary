import { Container } from '@mui/material';
import React from 'react';
import { ClipLoader } from 'react-spinners';

import { useAppSelector } from '../app/hooks';
import { selectDescription } from '../features/home/homeSlice';

export const Loader: React.FC = () => {
  const { isLoading } = useAppSelector(selectDescription);

  return (
    <Container
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000004d',
      }}
    >
      <ClipLoader loading={isLoading} size={150} />
    </Container>
  );
};
