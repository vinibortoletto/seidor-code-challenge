import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from './TextField'
import TextareaField from './TextareaField'
import Loading from './Loading'
import { FeedbackContext } from '../contexts/FeedbackContext'

export default function Form() {
  const [formValues, setFormValues] = useState({
    employeeName: '',
    department: '',
    date: '',
    description: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const { filteredFeedbacks, setFilteredFeedbacks } =
    useContext(FeedbackContext)

  const navigate = useNavigate()

  const isTextareaDisabled = (): boolean => {
    const { employeeName, department } = formValues

    if (!employeeName || !department) {
      return true
    }

    return false
  }

  const isButtonDisabled = (): boolean => {
    const { employeeName, department, date, description } = formValues

    if (!employeeName || !department || !date || !description) {
      return true
    }

    return false
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormValues({ ...formValues, [id]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsLoading(true)

    const newId = filteredFeedbacks.length + 1

    const newFilteredFeedbacks = [
      ...filteredFeedbacks,
      { ...formValues, id: newId }
    ]

    setFilteredFeedbacks(newFilteredFeedbacks)
    localStorage.setItem('feedbacks', JSON.stringify(newFilteredFeedbacks))

    setTimeout(() => {
      setIsLoading(false)
      navigate('/feedbacks')
    }, 1000)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextField
        label="Nome do funcionário"
        placeholder="Nome do funcionário"
        type="text"
        id="employeeName"
        value={formValues.employeeName}
        onChange={handleInputChange}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Departamento"
          placeholder="Departamento"
          type="text"
          id="department"
          value={formValues.department}
          onChange={handleInputChange}
        />

        <TextField
          label="Data"
          type="date"
          id="date"
          value={formValues.date}
          onChange={handleInputChange}
        />
      </div>

      <TextareaField
        disabled={isTextareaDisabled()}
        label="Descrição"
        placeholder="Descreva seu feedback"
        id="description"
        value={formValues.description}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        className="flex justify-center rounded bg-sky-600 p-2 font-bold  disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-400"
        disabled={isButtonDisabled()}
      >
        {isLoading ? <Loading /> : 'Enviar'}
      </button>
    </form>
  )
}
