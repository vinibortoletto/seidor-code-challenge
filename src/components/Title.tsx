interface IProps {
  text: string
}

export default function Title(props: IProps) {
  const { text } = props
  return <h1 className="pt-6 text-3xl font-bold">{text}</h1>
}
