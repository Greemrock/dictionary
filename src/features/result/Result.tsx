import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { selectDescription } from '../home/homeSlice';

export const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { definitions } = useAppSelector(selectDescription);
  console.log(definitions);
  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container>
      {definitions.map((definition) => {
        <Container>
          <Typography>{definition.word}</Typography>
          <Typography>{definition.phonetics}</Typography>
          <Typography>{definition.meanings}</Typography>
        </Container>;
      })}
      <Button variant="contained" onClick={handleClick}>
        Return to back
      </Button>
    </Container>
  );
};
