import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Layout } from '../../common/Layout';
import { Loader } from '../../common/Loader';
import { defenitionAsync, selectDescription } from './homeSlice';

export const HomePage: React.FC = () => {
  const { loading, error } = useAppSelector(selectDescription);
  const dispatch = useAppDispatch();

  const [word, setWord] = useState('');
  const [isSend, setIsSend] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(defenitionAsync(word));
    setIsSend(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  useEffect(() => {
    if (isSend && !loading) {
      navigate('/result');
    }

    if (error) {
      navigate('/404');
    }
  }, [isSend, loading, error]);

  return (
    <Layout>
      {loading && <Loader />}
      <Paper
        onSubmit={handleClick}
        component="form"
        variant="outlined"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          onChange={handleInputChange}
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ 'aria-label': 'search word' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Layout>
  );
};
