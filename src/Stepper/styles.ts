import { SxProps, Theme } from '@mui/material'

export const stepperStyle: SxProps<Theme> = {
  marginTop: '1rem',
  width: '50%',
  '& .mainBox': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '10px',
  },
  '& .stepsBox': {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  '& .buttonsContainer': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '1rem',
    width: '100%',
  },
}

export const mainStepContainer: SxProps<Theme> = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  marginTop: '1rem',
  marginBottom: '1rem',
  '& .stepContainer': {
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    '& .step': {
      zIndex: 2,
      position: 'relative',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      minWidth: '',
      color: '#fff',
      '&:disabled': {
        color: 'white',
      },
      '&.current': {
        backgroundColor: '#33FF50',
      },
    },
  },
}
