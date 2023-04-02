import {
  createStyles,
} from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  container: {
    width: '100vw',
    position: 'fixed',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    zIndex: -100,
    top: 0,
    left: 0
  },
  overlay: {
    height: '100%',
    width: '100%',
    top: 0,
    bottom: 0,
    padding: '10px',
    position: 'absolute'
  },

}));