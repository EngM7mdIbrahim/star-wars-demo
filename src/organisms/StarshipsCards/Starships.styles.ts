import {
  createStyles,
} from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  container: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '100px',
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