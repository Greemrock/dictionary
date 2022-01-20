import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../common/Layout';
import { setError } from '../home/homeSlice';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(setError(false));
  });

  return (
    <Layout>
      <Typography>No Definitions Found</Typography>
      <br />
      <Typography>
        Sorry pal, we couldnt find definitions for the word you were looking for.
      </Typography>
      <br />
      <Typography>
        You can try the search again at later time or head to the web instead.
      </Typography>
      <br />
      <button onClick={handleClick}>Return to back</button>
    </Layout>
  );
};
