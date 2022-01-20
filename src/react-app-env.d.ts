/// <reference types="react-scripts" />

type MeaningDefenition = {
  partOfSpeech: string;
  definitions: [
    {
      definition: string;
      example: string;
      synonyms?: string[];
    }
  ];
};

type PhoneticDefenition = {
  text: string;
  audio: string;
};

type Definition = {
  meanings: MeaningDefenition[];
  origin: string;
  phonetics: PhoneticDefenition[];
  word: string;
};
