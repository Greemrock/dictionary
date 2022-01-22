import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { selectDescription } from '../home/homeSlice';

export const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { definitions } = useAppSelector(selectDescription);
  const [urlSound, setUrlSound] = useState('');

  const play = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  const handleClick = () => {
    navigate('/');
  };

  const handlePlayAudio = (url: string) => {
    setUrlSound(urlSound);
    play(url);
  };

  return (
    <Container sx={{ marginTop: '60px', marginBottom: '60px' }}>
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
              <Typography component="span">
                <b>pronunciation: </b>
              </Typography>
              {phonetics[0].audio && (
                <IconButton onClick={() => handlePlayAudio(phonetics[0].audio)} color="primary">
                  <PlayCircleFilledWhiteOutlinedIcon />
                </IconButton>
              )}
              <Typography>
                <b>transcription:</b> [{phonetics[0].text}]
              </Typography>
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
        <Button variant="contained" onClick={handleClick}>
          Return to back
        </Button>
      </Container>
    </Container>
  );
};
