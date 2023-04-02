
import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, _params, getStylesRef) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: '200px',
    transition: 'all 200ms ease',
    [theme.fn.smallerThan('sm')]: {
      width: '90%',
      height: '300px',
    },
    ':hover': {
      cursor: 'pointer',
      boxShadow: '2px 2px 10px black',
      transform: 'scale(1.2)',
    },
    [`&:hover .${getStylesRef('overlay')}`]: {
      display: 'flex',
      visibility: 'visible'
    },
  },
  titleText: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
  },

  overlay: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
}));
