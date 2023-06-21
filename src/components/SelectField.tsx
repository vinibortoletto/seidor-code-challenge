import { ChangeEvent } from 'react'

interface IProps {
  label: string
  id: string
  filterType: string[]
  defaultValue: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectField(props: IProps) {
  const { label, id, filterType, defaultValue, onChange } = props

  return (
    <div className="flex">
      <label
        htmlFor={id}
        className="absolute -left-full mb-1 text-sm font-semibold"
      >
        {label}
      </label>

      <select
        name={id}
        id={id}
        className="w-full rounded border border-slate-700 bg-slate-950 p-2"
        onChange={onChange}
        defaultValue={defaultValue}
      >
        <option value={defaultValue} disabled>
          {defaultValue}
        </option>

        {filterType.map((employee) => (
          <option key={employee} value={employee}>
            {employee}
          </option>
        ))}
      </select>
    </div>
  )
}
