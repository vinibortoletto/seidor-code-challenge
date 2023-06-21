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
  const [selectedDate, setSelectedDate] = useState<string>('')

  const {
    feedbacks,
    filteredFeedbacks,
    setFilteredFeedbacks,
    setSelectedEmployeeName,
    setSelectedDepartment
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

  const filterByDepartment = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target

    setSelectedDepartment(value)

    const newFilteredFeedbacks = feedbacks.filter(
      (feedback) => feedback.department === value
    )

    setFilteredFeedbacks(newFilteredFeedbacks)
  }

  const filterByDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setSelectedDate(value)

    const newFilteredFeedbacks = feedbacks.filter(
      (feedback) => feedback.date === value
    )

    setFilteredFeedbacks(newFilteredFeedbacks)
  }

  const getUniqueDepartments = useCallback((): void => {
    const departments = feedbacks.map((feedback) => feedback.department)

    const uniqueDepartments = departments.filter(
      (department, index) => departments.indexOf(department) === index
    )

    setDepartments(uniqueDepartments)
  }, [feedbacks])

  const resetFilters = () => {
    setSelectedEmployeeName('')
    setSelectedDepartment('')
    setSelectedDate('')
    setFilteredFeedbacks(feedbacks)
  }

  useEffect(() => {
    getUniqueEmployees()
    getUniqueDepartments()
  }, [filteredFeedbacks])

  return (
    <div className="mb-6 grid grid-cols-3 gap-2 sm:grid-cols-4">
      <SelectField
        filterType={employees}
        defaultValue="Funcionário"
        onChange={filterByEmployeeName}
      />

      <SelectField
        filterType={departments}
        defaultValue="Departamento"
        onChange={filterByDepartment}
      />

      <TextField
        label="Data"
        type="date"
        id="date"
        value={selectedDate}
        onChange={filterByDate}
      />

      <button
        type="button"
        onClick={resetFilters}
        className="col-span-3 rounded  bg-sky-600 p-2 font-bold  disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-400 sm:col-auto"
      >
        Limpar filtros
      </button>
    </div>
  )
}
