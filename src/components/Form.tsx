import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FeedbackContext } from '../contexts/FeedbackContext'
import maskCPF from '../utils/maskCPF'
import validateForm from '../utils/validateForm'
import Loading from './Loading'
import TextField from './TextField'
import TextareaField from './TextareaField'

export default function Form() {
  const [formValues, setFormValues] = useState({
    employeeName: '',
    cpf: '',
    department: '',
    date: '',
    description: ''
  })

  const [errorMessages, setErrorMessages] = useState({
    employeeName: '',
    cpf: '',
    department: '',
    date: '',
    description: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const { filteredFeedbacks, setFilteredFeedbacks } =
    useContext(FeedbackContext)

  const navigate = useNavigate()

  const isTextareaDisabled = (): boolean => {
    const { employeeName, department, cpf, date } = formValues

    if (!employeeName || !department || !cpf || !date) {
      return true
    }

    return false
  }

  const isButtonDisabled = (): boolean => {
    const { description } = formValues

    if (!description) {
      return true
    }

    return false
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target

    if (id !== 'date') {
      setErrorMessages({ ...errorMessages, [id]: validateForm[id](value) })
    }

    if (id === 'cpf') {
      const formattedCPF = maskCPF(value)
      setFormValues({ ...formValues, [id]: formattedCPF })
      return
    }

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
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Nome do funcionário"
          placeholder="Nome do funcionário"
          type="text"
          id="employeeName"
          value={formValues.employeeName}
          onChange={handleInputChange}
          errorMessage={errorMessages.employeeName}
        />

        <TextField
          label="cpf"
          placeholder="CPF"
          type="text"
          id="cpf"
          value={formValues.cpf}
          onChange={handleInputChange}
          errorMessage={errorMessages.cpf}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Departamento"
          placeholder="Departamento"
          type="text"
          id="department"
          value={formValues.department}
          onChange={handleInputChange}
          errorMessage={errorMessages.department}
        />

        <TextField
          label="Data"
          type="date"
          id="date"
          value={formValues.date}
          onChange={handleInputChange}
          errorMessage={errorMessages.date}
        />
      </div>

      <TextareaField
        disabled={isTextareaDisabled()}
        label="Descrição"
        placeholder="Descreva seu feedback"
        id="description"
        value={formValues.description}
        onChange={handleInputChange}
        errorMessage={errorMessages.description}
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
