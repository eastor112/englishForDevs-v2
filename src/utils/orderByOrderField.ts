import {
  IDefinition,
  ITranslation,
} from '../redux/slices/words/wordsSlice.types';
export const arrayObjectsOrder = (array: IDefinition[] | ITranslation[]) => {
  return array.sort((a, b) => {
    return a.order - b.order;
  });
};
