import { createStyles } from '@mantine/core';

export const useStyles =  createStyles((theme) => ({
  carousel: {
    height: '100%',
    position: 'absolute',
    right: 0,
    left: 0,
    border: 'solid 2px black'
  },
  controls: {
    display: 'none',
    visibility: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  }
}));
