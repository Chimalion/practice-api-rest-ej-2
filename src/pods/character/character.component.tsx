import React from 'react';
import { CharacterEntity } from './character.vm';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '30px',
  },
}));

interface Props {
  character: CharacterEntity;
}

export const CharacterComponent: React.FunctionComponent<Props> = ({
  character,
}) => {
  const classes = useStyles();

  return (
    <>
      <h2>{character.name}</h2>
      <img src={character.image} />
    </>
  );
};
