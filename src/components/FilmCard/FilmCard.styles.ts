import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    maxHeight: '500px',
    transition: 'all 200ms ease',
    [theme.fn.smallerThan('sm')]: {
      minWidth: '90%',
    },
    ':hover': {
      cursor: 'pointer',
      boxShadow: '2px 2px 10px black',
      transform: 'scale(1.05)'
    }
  },
  section: {
    borderBottom: `0.1rem solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
  },

  badgeText: {
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  titleText: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
  },
}));
