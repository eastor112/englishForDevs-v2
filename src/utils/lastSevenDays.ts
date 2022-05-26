import {IWordResponse} from '../redux/slices/words/wordsSlice.types';
import {IPhraseResponse} from '../redux/slices/phrases/phrasesSlice.types';

export const wordsKnownLastSevenDays = (wordsResponses: IWordResponse[]) => {
  const last7Dates: string[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const dateString = date.toLocaleDateString();

    last7Dates.push(dateString);
  }

  last7Dates.reverse();

  const wordsKnown = wordsResponses.filter(wr => {
    const date = new Date(wr.date);
    return (
      wr.response === 'know' && last7Dates.includes(date.toLocaleDateString())
    );
  });

  const wordsCount = last7Dates.map(date => {
    const wordsResponsesForDate = wordsKnown.filter(wr => {
      const dateOfResponse = new Date(wr.date);

      return dateOfResponse.toLocaleDateString() === date;
    });

    return wordsResponsesForDate.length;
  });

  return {
    labels: last7Dates,
    dataset: wordsCount,
  };
};

export const phrasesKnownLastSevenDays = (
  phrasesResponses: IPhraseResponse[],
) => {
  const last7Dates: string[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const dateString = date.toLocaleDateString();

    last7Dates.push(dateString);
  }

  last7Dates.reverse();

  const phrasesKnown = phrasesResponses.filter(pr => {
    const date = new Date(pr.date);
    return (
      pr.response === 'know' && last7Dates.includes(date.toLocaleDateString())
    );
  });

  const phrasesCount = last7Dates.map(date => {
    const phrasesResponsesForDate = phrasesKnown.filter(pr => {
      const dateOfResponse = new Date(pr.date);

      return dateOfResponse.toLocaleDateString() === date;
    });

    return phrasesResponsesForDate.length;
  });

  return {
    labels: last7Dates,
    dataset: phrasesCount,
  };
};
