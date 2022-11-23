import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntity
): viewModel.CharacterEntity => ({
  id: character.id,
  name: character.name,
  gender: character.gender,
  image: character.image,
  status: character.status,
});
