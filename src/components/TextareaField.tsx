interface IProps {
  disabled: boolean
  label: string
  placeholder: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextareaField(props: IProps) {
  const { disabled, label, placeholder, id, value, onChange } = props

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="absolute -left-full mb-1 text-sm font-semibold"
      >
        {label}
      </label>

      <textarea
        disabled={disabled}
        id={id}
        className="h-40 rounded  border border-slate-700 bg-slate-950 p-2  placeholder:text-slate-500 disabled:resize-none disabled:bg-slate-800/30 disabled:placeholder:text-slate-600"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
