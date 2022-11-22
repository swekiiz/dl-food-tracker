import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

import { Result } from 'types/common'

interface IResultContext {
  result: Result | null
  setResult: Dispatch<SetStateAction<Result>>
}

type ResultProviderProps = {
  children: ReactNode
}

const ResultContext = createContext<IResultContext>({} as IResultContext)

export const ResultProvider = ({ children }: ResultProviderProps) => {
  //   const [result, setResult] = useState<Result | null>(null)
  const [result, setResult] = useState<Result | null>({ langsat: 0.5, longan: 0.3, longgong: 0.2 })

  const value: IResultContext = {
    result,
    setResult,
  }

  return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
}

export const useResultContext = () => useContext(ResultContext)
