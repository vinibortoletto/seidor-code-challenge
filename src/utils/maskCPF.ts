const maskCPF = (value: string) => {
  const inputCPF = value

  const formattedCPF = inputCPF
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')

  return formattedCPF
}

export default maskCPF
