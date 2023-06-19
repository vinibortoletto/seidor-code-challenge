import { ChangeEvent, useState } from 'react'
import TextField from './TextField'
import TextareaField from './TextareaField'

export default function Form() {
  const [formValues, setFormValues] = useState({
    employeeName: '',
    department: '',
    description: ''
  })

  const isTextareaDisabled = (): boolean => {
    const { employeeName, department } = formValues

    if (!employeeName || !department) {
      return true
    }

    return false
  }

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target
    setFormValues({ ...formValues, [id]: value })
  }

  return (
    <form className="flex flex-col gap-4">
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
        placeholder="01/01/2023"
        type="date"
        id="department"
        value={formValues.department}
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
    </form>
  )
}
