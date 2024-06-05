import React from 'react'
import './AppStyle'
import { Stepper } from './Stepper/Stepper'
import { Box } from '@mui/material'
import { style } from './AppStyle'

function App() {
  return (
    <Box sx={style}>
      <Stepper />
    </Box>
  )
}

export default App
