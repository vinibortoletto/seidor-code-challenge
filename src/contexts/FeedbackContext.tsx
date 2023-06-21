import { createContext, useEffect, useMemo, useState } from 'react'
import IFeedback from '../interfaces/IFeedback'

interface IProps {
  children: React.ReactNode
}

interface IContext {
  feedbacks: IFeedback[]
  filteredFeedbacks: IFeedback[]
  setFilteredFeedbacks: (value: IFeedback[]) => void
  selectedEmployeeName: string
  setSelectedEmployeeName: (value: string) => void
  selectedDepartment: string
  setSelectedDepartment: (value: string) => void
}

const defaultContext = {
  feedbacks: [],
  filteredFeedbacks: [],
  setFilteredFeedbacks: () => {},
  selectedEmployeeName: '',
  setSelectedEmployeeName: () => {},
  selectedDepartment: '',
  setSelectedDepartment: () => {}
}

export const FeedbackContext = createContext<IContext>(defaultContext)

export function FeedbackProvider({ children }: IProps) {
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([])
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<IFeedback[]>([])
  const [selectedEmployeeName, setSelectedEmployeeName] =
    useState<string>('Funcionário')
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>('Departamento')

  const getLocalFeedbacks = (): void => {
    const localFeedbacks = JSON.parse(
      localStorage.getItem('feedbacks') as string
    )

    if (localFeedbacks) {
      setFeedbacks(localFeedbacks)
      setFilteredFeedbacks(localFeedbacks)
    }
  }

  const value: IContext = useMemo(
    () => ({
      feedbacks,
      filteredFeedbacks,
      setFilteredFeedbacks,
      selectedEmployeeName,
      setSelectedEmployeeName,
      selectedDepartment,
      setSelectedDepartment
    }),
    [
      feedbacks,
      filteredFeedbacks,
      setFilteredFeedbacks,
      selectedEmployeeName,
      setSelectedEmployeeName,
      selectedDepartment,
      setSelectedDepartment
    ]
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
