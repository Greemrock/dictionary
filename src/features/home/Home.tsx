import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton';
import { InputBase, Paper } from '@mui/material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Layout } from '../../common/Layout';
import { defenitionAsync, selectDescription } from './homeSlice';

export const HomePage: React.FC = () => {
  const { isLoading, error } = useAppSelector(selectDescription);
  const dispatch = useAppDispatch();

  const [word, setWord] = useState('');
  const [isSend, setIsSend] = useState(false);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (word.length === 0) {
      setIsEmptyInput(true);
      return;
    }

    dispatch(defenitionAsync(word));
    setIsSend(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleInputClick = () => {
    setIsEmptyInput(false);
  };

  useEffect(() => {
    if (isSend && !isLoading) {
      navigate({
        pathname: '/result',
        search: `?word=${word}`,
      });
    }

    if (error) {
      navigate('/404');
    }
  }, [isSend, isLoading, error]);

  return (
    <Layout>
      <Paper
        onSubmit={handleSubmit}
        component="form"
        variant="outlined"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          onChange={handleInputChange}
          onClick={handleInputClick}
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ 'aria-label': 'search word' }}
        />
        <LoadingButton
          type="submit"
          loading={isLoading}
          color="primary"
          aria-label="search"
          sx={{ p: '10px' }}
        >
          <SearchIcon />
        </LoadingButton>
      </Paper>
      <Collapse sx={{ position: 'absolute', width: '400px' }} in={isEmptyInput}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsEmptyInput(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Enter a word to search!
        </Alert>
      </Collapse>
    </Layout>
  );
};
