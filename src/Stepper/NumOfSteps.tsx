import { Box, Button } from '@mui/material'
import React from 'react'
import { createEmptyObjectsArray } from './common'
import { v4 as uuidv4 } from 'uuid'
import { mainStepContainer } from './styles'

interface INumOfSteps {
  state: {
    id: string
    num: number
    step: string
    description: string
  }[]
  activeStep: number
  stepHandler: (step: number) => void
}

export const NumOfSteps = ({ state, activeStep, stepHandler }: INumOfSteps) => {
  const chunkedItems = []
  const chunkSize = 5
  for (let i = 0; i < state.length; i += chunkSize) {
    chunkedItems.push(state.slice(i, i + chunkSize))
  }
  return (
    <>
      {chunkedItems.map((chunk) => {
        const newArray = createEmptyObjectsArray(
          chunkSize,
          {
            id: uuidv4(),
            num: 0,
            step: '',
            description: '',
          },
          chunk,
        )

        return (
          <Box key={uuidv4()} sx={mainStepContainer}>
            {newArray.map((step, i) => {
              return (
                <Box
                  className="stepContainer"
                  sx={{ width: `${100 / chunkSize}%` }}
                  key={uuidv4()}
                >
                  <Button
                    className={`${step.num <= activeStep - 1 ? 'current' : 'prev'} step`}
                    key={step.id}
                    onClick={() => stepHandler(step.num)}
                    sx={{
                      display: `${step.num === 0 && 'none'}`,
                      backgroundColor: `${step.num === activeStep ? 'blue' : 'gray'} `,
                      '&:hover': {
                        backgroundColor: `${step.num === activeStep ? 'red' : '#d4e080'}`,
                      },
                    }}
                    disabled={step.num === activeStep}
                  >
                    {step.num}
                  </Button>
                </Box>
              )
            })}
          </Box>
        )
      })}
    </>
  )
}
