import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    border: 'none'
  },
  content: {
    maxWidth: 900,
    width: '100%',
    '&:focus-visible': {
      outline: 'none'
    }
  }
}))

export default useStyles
