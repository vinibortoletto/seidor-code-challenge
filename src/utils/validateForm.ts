interface IValidateForm {
  [key: string]: (value: string) => string
}

const validateEmployeeName = (value: string): string => {
  console.log(value)

  if (value.length < 3) {
    return 'Nome deve ter no mínimo 3 caracteres'
  }

  return ''
}

const validateCpf = (value: string): string => {
  if (value.length < 14) {
    return 'CPF deve ter no mínimo 11 caracteres'
  }

  return ''
}

const validateDepartment = (value: string): string => {
  if (value.length < 3) {
    return 'Departamento deve ter no mínimo 3 caracteres'
  }

  return ''
}

const validateDescription = (value: string): string => {
  if (value.length < 3) {
    return 'Descrição deve ter no mínimo 3 caracteres'
  }

  return ''
}

const validateForm: IValidateForm = {
  employeeName: (value: string) => validateEmployeeName(value),
  cpf: (value: string) => validateCpf(value),
  department: (value: string) => validateDepartment(value),
  description: (value: string) => validateDescription(value)
}

export default validateForm