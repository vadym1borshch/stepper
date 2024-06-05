import { v4 as uuidv4 } from 'uuid'

type EmptyObjectType<T> = { [K in keyof T]: T[K] }
type ArrayType<T> = T[]

export const createEmptyObjectsArray = <T>(
  length: number,
  emptyObject: EmptyObjectType<T>,
  arr: ArrayType<T>,
): T[] => {
  const emptyObjectsArray = Array(length - arr.length).fill(emptyObject)
  return [...arr, ...emptyObjectsArray]
}

export const stepsData = [
  {
    id: uuidv4(),
    num: 1,
    step: 'Step 1',
    description: 'Learn React',
  },
  {
    id: uuidv4(),
    num: 2,
    step: 'Step 2',
    description: 'Apply for jobs',
  },
  {
    id: uuidv4(),
    num: 3,
    step: 'Step 3',
    description: 'Invest your new income',
  },
  {
    id: uuidv4(),
    num: 4,
    step: 'Step 4',
    description: 'Invest your new income',
  },
  {
    id: uuidv4(),
    num: 5,
    step: 'Step 5',
    description: 'Invest your new income',
  },
  {
    id: uuidv4(),
    num: 6,
    step: 'Step 6',
    description: 'Invest your new income',
  },
  {
    id: uuidv4(),
    num: 7,
    step: 'Step 7',
    description: 'Invest your new income',
  },
  {
    id: uuidv4(),
    num: 8,
    step: 'Step 8',
    description: 'Invest your new income',
  },
  {
    id: uuidv4(),
    num: 9,
    step: 'Step 9',
    description: 'Invest your new income',
  },
  {
    id: uuidv4(),
    num: 10,
    step: 'Step 10',
    description: 'Invest your new income',
    icon: './bag-luggage.svg',
  },
  {
    id: uuidv4(),
    num: 11,
    step: 'Step 11',
    description: 'Invest your new income',
  },
]
