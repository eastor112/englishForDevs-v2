export interface IWord {
  word: string;
  pronuntiation: string;
  definitions: IDefinition[];
  translations: ITranslation[];
}

export interface IDefinition {
  order: number;
  english: string;
  spanish: string;
}

export interface ITranslation {
  order: number;
  spanish: string;
  synonyms: string;
}

export interface IWordResponse {
  wordId: string;
  date: string;
  response: 'know' | 'dontKnow';
}
