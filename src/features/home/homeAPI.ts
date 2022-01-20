import axios from 'axios';

export const fetchDefinition = (word: string) => {
  const response = axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  return response;
};
