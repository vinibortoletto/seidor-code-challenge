interface IProps {
  label: string
  placeholder?: string
  type: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
}

export default function TextField(props: IProps) {
  const { label, placeholder, type, id, value, onChange, errorMessage } = props

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="absolute -left-full mb-1 text-sm font-semibold"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        className="rounded border border-slate-700 bg-slate-950 p-2 placeholder:text-slate-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <p className="mt-1 text-right text-sm text-red-500">{errorMessage}</p>
    </div>
  )
}
