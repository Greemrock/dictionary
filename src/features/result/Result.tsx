import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  IconButton,
  LinearProgress,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { defenitionAsync, selectDescription } from '../home/homeSlice';

export const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { searchWord } = useParams();

  const dispatch = useAppDispatch();
  const { definitions, isLoading, error } = useAppSelector(selectDescription);
  const [urlSound, setUrlSound] = useState('');

  const play = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  const handleClickBack = () => {
    navigate('/');
  };

  const handlePlayAudio = (url: string) => {
    setUrlSound(urlSound);
    play(url);
  };

  useEffect(() => {
    if (!definitions[0] && searchWord) {
      dispatch(defenitionAsync(searchWord));
    }
  }, [searchWord]);

  useEffect(() => {
    if (error) {
      navigate('/404');
    }
  }, [error]);

  return (
    <Fade triggerOnce={true} delay={200} direction="down">
      <Container sx={{ padding: '60px 0' }}>
        {isLoading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
        {definitions.map(({ meanings, origin, phonetics, word }, i) => {
          return (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{word}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {origin && (
                  <Typography>
                    <b>origin:</b> {origin}
                  </Typography>
                )}
                {phonetics.length !== 0 && (
                  <>
                    {phonetics[0].audio && (
                      <>
                        <Typography component="span">
                          <b>pronunciation: </b>
                        </Typography>
                        <IconButton
                          onClick={() => handlePlayAudio(phonetics[0].audio)}
                          color="primary"
                        >
                          <PlayCircleFilledWhiteOutlinedIcon />
                        </IconButton>
                      </>
                    )}
                    {phonetics[0].text && (
                      <Typography>
                        <b>transcription:</b> [{phonetics[0].text}]
                      </Typography>
                    )}
                  </>
                )}
                {meanings.map((meaning, i) => {
                  return (
                    <div key={i}>
                      <Typography>
                        <b>menings: </b> {meaning.partOfSpeech}
                      </Typography>
                      {meaning.definitions.map((defenition, i) => {
                        return (
                          <Container key={i}>
                            <Typography>{defenition.definition}</Typography>
                            <Typography>{defenition.example}</Typography>
                            <Typography>{defenition.synonyms}</Typography>
                          </Container>
                        );
                      })}
                    </div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
        <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <LoadingButton
            onClick={handleClickBack}
            loading={isLoading}
            loadingIndicator="Loading..."
            variant="contained"
          >
            Return to back
          </LoadingButton>
        </Container>
      </Container>
    </Fade>
  );
};
