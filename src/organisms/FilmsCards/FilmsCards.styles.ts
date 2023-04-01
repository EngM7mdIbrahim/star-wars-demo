import {
  createStyles,
} from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  container: {
    width: '80%',
    alignSelf: 'center',
    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    }
  },
  a:{
    textTransform: 'none',
    textDecoration: 'none'
  }
}));