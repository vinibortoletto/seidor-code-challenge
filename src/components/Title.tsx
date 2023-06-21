interface IProps {
  text: string
}

export default function Title(props: IProps) {
  const { text } = props
  return (
    <h1 className="mb-4 pt-6 text-center text-3xl font-bold sm:text-4xl">
      {text}
    </h1>
  )
}
