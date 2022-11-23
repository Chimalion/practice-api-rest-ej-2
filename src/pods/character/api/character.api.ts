import Axios from 'axios';
import { CharacterEntity } from './character.api-model';

const apiUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharacterFromApi = async (
  id: string
): Promise<CharacterEntity> => {
  const { data } = await Axios.get(`${apiUrl}/${id}`);
  return data;
};
