import { Text } from '@mantine/core';
import { useStyles } from './Toolbar.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
export function Toolbar() {
  const { classes, theme } = useStyles();
  return (
    <div className={classes.toolbar}>
      <Text className={classes.titleText}>STAR WARS Demo</Text>
      <ColorSchemeToggle />
    </div>
  );
}
