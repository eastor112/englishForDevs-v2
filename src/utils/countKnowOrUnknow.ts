import {IWordResponse} from '../redux/slices/words/wordsSlice.types';
import {IPhraseResponse} from '../redux/slices/phrases/phrasesSlice.types';

export const countKnowOrDontknow = (wordsResponses: IWordResponse[]) => {
  const know = wordsResponses.filter(
    wordResponse => wordResponse.response === 'know',
  );
  const dontKnow = wordsResponses.filter(
    wordResponse => wordResponse.response === 'dontKnow',
  );
  const knowPercent = (know.length / wordsResponses.length) * 100;
  const dontKnowPercent = (dontKnow.length / wordsResponses.length) * 100;
  return {
    know: know.length,
    dontKnow: dontKnow.length,
    knowPercent,
    dontKnowPercent,
  };
};

export const countKnowOrDontknowPhrases = (
  phrasesResponses: IPhraseResponse[],
) => {
  const know = phrasesResponses.filter(
    phraseResponse => phraseResponse.response === 'know',
  );
  const dontKnow = phrasesResponses.filter(
    phraseResponse => phraseResponse.response === 'dontKnow',
  );
  const knowPercent = (know.length / phrasesResponses.length) * 100;
  const dontKnowPercent = (dontKnow.length / phrasesResponses.length) * 100;
  return {
    know: know.length,
    dontKnow: dontKnow.length,
    knowPercent,
    dontKnowPercent,
  };
};
