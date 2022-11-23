import * as ApiModel from './character-collection.api-model';
import Axios from 'axios';

const apiUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharacterCollection = async (): Promise<
  ApiModel.CharacterEntity[]
> => {
  const { data } = await Axios.get(apiUrl);
  return data.results;
};
