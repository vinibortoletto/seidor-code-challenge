import { ChangeEvent } from 'react'

interface IProps {
  filterType: string[]
  defaultValue: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectField(props: IProps) {
  const { filterType, defaultValue, onChange } = props

  return (
    <select
      name="employees"
      id="employees"
      className="rounded border border-slate-700 bg-slate-950 p-2"
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
  )
}
