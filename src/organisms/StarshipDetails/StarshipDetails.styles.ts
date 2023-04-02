import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    flex: 1,
    [theme.fn.smallerThan('sm')]: {
      gap: '10px',
      padding: '0px',
    },
  },
  dummyContainer: {
    display: 'block',
    flex: 1,
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  shipSubDetailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '48pt',
    fontWeight: 1000,
    [theme.fn.smallerThan('sm')]: {
      fontSize: '28pt',
    },
  },
  detailsText: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  starshipText: {
    fontSize: '35pt',
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '28pt',
    },
  },
  specsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: '10px',
    alignSelf: 'stretch',
  },
  singleSpecContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  specLabelText: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    textAlign: 'left',
    textTransform: 'capitalize',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
    },
    flex: 1
  },
  specText: {
    fontSize: theme.fontSizes.md,
    textAlign: 'left',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
    },
    flex: 1
  }
}));
