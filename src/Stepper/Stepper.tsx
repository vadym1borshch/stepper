import { Box, Button, Card } from '@mui/material'
import { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NumOfSteps } from './NumOfSteps'
import { stepsData } from './common'
import { stepperStyle } from './styles'

export const Stepper = () => {
  const [state, setState] = useState([...stepsData])
  const [activeStep, setActiveStep] = useState(1)

  const step = useMemo(() => {
    return state
      .filter((step) => (step.num === activeStep ? step : null))
      .map(({ step, description, id }) => {
        return (
          <span key={uuidv4()}>
            {step}: {description}
          </span>
        )
      })
  }, [state, activeStep])

  const stepHandler = (num: number) => {
    setActiveStep(num)
  }

  const prevStepHandler = () => {
    activeStep <= 1 ? setActiveStep(1) : setActiveStep((prev) => prev - 1)
  }

  const nextStepHandler = () => {
    activeStep >= state.length
      ? setActiveStep(activeStep)
      : setActiveStep((prev) => prev + 1)
  }

  return (
    <Card sx={stepperStyle}>
      <Box className="mainBox">
        <NumOfSteps
          state={state}
          activeStep={activeStep}
          stepHandler={stepHandler}
        />
      </Box>
      <Box className="stepsBox">{step}</Box>
      <Box className="buttonsContainer">
        <Button onClick={prevStepHandler} disabled={activeStep <= 1}>
          prev
        </Button>
        <Button onClick={nextStepHandler} disabled={activeStep >= state.length}>
          next
        </Button>
      </Box>
    </Card>
  )
}
