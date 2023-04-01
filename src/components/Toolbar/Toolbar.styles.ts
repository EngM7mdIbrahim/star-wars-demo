import { createStyles } from '@mantine/core';

export const useStyles =  createStyles((theme) => ({
  toolbar: {
    width: '100%',
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 10,
    top: 0,
    right: 0,
    color: theme.colorScheme === 'light' ? theme.black : theme.white,
  },
  titleText: {
    fontSize: '18pt',
    fontWeight: 1000,
    flex: 1,
  }
}));
