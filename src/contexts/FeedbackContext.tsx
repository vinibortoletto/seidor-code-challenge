import { createContext, useEffect, useMemo, useState } from 'react'
import IFeedback from '../interfaces/IFeedback'

interface IProps {
  children: React.ReactNode
}

interface IContext {
  feedbacks: IFeedback[]
}

const defaultContext = {
  feedbacks: []
}

export const FeedbackContext = createContext<IContext>(defaultContext)

export function FeedbackProvider({ children }: IProps) {
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([])

  const getLocalFeedbacks = (): void => {
    const localFeedbacks = JSON.parse(
      localStorage.getItem('feedbacks') as string
    )

    if (localFeedbacks) {
      setFeedbacks(localFeedbacks)
    }
  }

  const value: IContext = useMemo(
    () => ({
      feedbacks
    }),
    [feedbacks]
  )

  useEffect(() => {
    getLocalFeedbacks()
  }, [])

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  )
}
