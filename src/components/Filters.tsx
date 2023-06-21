import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import SelectField from './SelectField'
import TextField from './TextField'
import { FeedbackContext } from '../contexts/FeedbackContext'

export default function Filters() {
  const [employees, setEmployees] = useState<string[]>([])
  const [departments, setDepartments] = useState<string[]>([])
  const [date, setDate] = useState<string>('')
  const {
    feedbacks,
    filteredFeedbacks,
    setFilteredFeedbacks,
    selectedEmployeeName,
    setSelectedEmployeeName
  } = useContext(FeedbackContext)

  const getUniqueEmployees = useCallback((): void => {
    const employees = feedbacks.map((feedback) => feedback.employeeName)

    const uniqueEmployees = employees.filter(
      (employee, index) => employees.indexOf(employee) === index
    )

    setEmployees(uniqueEmployees)
  }, [feedbacks])

  const filterByEmployeeName = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target

    setSelectedEmployeeName(value)

    const newFilteredFeedbacks = feedbacks.filter(
      (feedback) => feedback.employeeName === value
    )

    setFilteredFeedbacks(newFilteredFeedbacks)
  }

  const getUniqueDepartments = useCallback((): void => {
    const departments = filteredFeedbacks.map((feedback) => feedback.department)

    const uniqueDepartments = departments.filter(
      (department, index) => departments.indexOf(department) === index
    )

    setDepartments(uniqueDepartments)
  }, [filteredFeedbacks])

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target
    setDate(value)
  }

  const resetFilters = () => {
    setFilteredFeedbacks(feedbacks)
  }

  useEffect(() => {
    getUniqueEmployees()
    // getUniqueDepartments()
  }, [filteredFeedbacks])

  return (
    <div>
      <SelectField
        filterType={employees}
        defaultValue="Funcionário"
        onChange={filterByEmployeeName}
      />

      {/* <SelectField filterType={departments} defaultValue="Departamento" /> */}

      <TextField
        label="Data"
        type="date"
        id="date"
        value={date}
        onChange={handleInputChange}
      />

      <button
        type="button"
        onClick={resetFilters}
        className="flex justify-center rounded bg-sky-600 p-2 font-bold  disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-400"
      >
        Limpar filtros
      </button>
    </div>
  )
}
