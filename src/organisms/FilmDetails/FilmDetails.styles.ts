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
      display: 'none'
    },
  },
  filmSubDetailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleText: {
    fontSize: '48pt',
    fontWeight: 1000,
    [theme.fn.smallerThan('sm')]: {
      fontSize: '28pt',
    },
  },
  descText: {
    fontSize: theme.fontSizes.xl,
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.lg,
    },
  },
    detailsText: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.lg,
    },
  },
}));
