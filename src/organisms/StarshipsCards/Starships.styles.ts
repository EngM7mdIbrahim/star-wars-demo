import {
  createStyles,
} from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  container: {
    width: '80%',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      marginTop: '0px',
    }
  },
  a:{
    textTransform: 'none',
    textDecoration: 'none'
  }
}));