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
  lessonId: string;
  topicId: string;
  wordId: string;
  response: 'know' | 'dontKnow';
  date: string;
}
