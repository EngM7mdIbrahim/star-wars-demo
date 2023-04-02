import {
  createStyles,
} from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  page: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'stretch',
    gap: '12px',
    padding: '20px',
    minWidth: '98vw',
    margin: 'auto',
    minHeight: '98vh',
    overflowX: 'hidden'
  }
}));