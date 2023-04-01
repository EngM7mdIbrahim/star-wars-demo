import {
  createStyles,
} from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    padding: '10px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    margin: 'auto',
    height: '80vh',
  },
  overlay: {
    height: '100%',
    width: '100%',
    top: 0,
    bottom: 0,
    padding: '10px',
    position: 'absolute'
  },
  welcomeTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    width: '40%',
    
    [theme.fn.smallerThan('sm')]:{
      width: '300px'
    },
    position: 'absolute',
    bottom: 0,
    left: '50%',
    margin: 'auto',
    transform: 'translate(-50%)'
  },
  welcomeText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '25pt',
    fontWeight: 'bold',
  }

}));