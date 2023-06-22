import IFeedback from '../interfaces/IFeedback'

interface IProps {
  feedback: IFeedback
}

export default function FeedbackCard({ feedback }: IProps) {
  const { userName, cpf, employeeName, department, date, description } =
    feedback
  const formattedDate = date.replaceAll('-', '/')

  return (
    <div className="rounded bg-slate-800 p-4 text-lg">
      <p>
        <span className="font-bold text-slate-500">Funcionário: </span>
        {employeeName}
      </p>
      <p>
        <span className="font-bold text-slate-500">Departamento: </span>
        {department}
      </p>

      <p>
        <span className="font-bold text-slate-500">Feedback: </span>
        {description}
      </p>

      <div className="my-4 h-[1px] w-full bg-slate-600"></div>
      <p className="text-sm">
        {formattedDate} - {userName}
      </p>
    </div>
  )
}
