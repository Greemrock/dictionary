import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../common/Layout';
import { setIsError } from '../home/homeSlice';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(setIsError(false));
  });

  return (
    <Layout>
      <Typography variant="h5">No Definitions Found</Typography>
      <br />
      <Typography variant="subtitle1">
        Sorry pal, we couldnt find definitions for the word you were looking for.
      </Typography>
      <br />
      <Typography variant="subtitle1">
        You can try the search again at later time or head to the web instead.
      </Typography>
      <br />
      <Button variant="contained" onClick={handleClick} sx={{ marginTop: '60px' }}>
        Return to back
      </Button>
    </Layout>
  );
};
