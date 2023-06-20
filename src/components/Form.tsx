import { ChangeEvent, FormEvent, useState } from 'react'
import TextField from './TextField'
import TextareaField from './TextareaField'

export default function Form() {
  const [formValues, setFormValues] = useState({
    employeeName: '',
    department: '',
    date: '',
    description: ''
  })

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
    localStorage.setItem('feedback', JSON.stringify(formValues))
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
        className="rounded bg-sky-600 p-2 font-bold disabled:cursor-not-allowed disabled:bg-slate-600  disabled:text-slate-400"
        disabled={isButtonDisabled()}
      >
        Enviar feedback
      </button>
    </form>
  )
}
