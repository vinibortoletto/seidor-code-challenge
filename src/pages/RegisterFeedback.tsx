import Form from '../components/Form'
import Title from '../components/Title'

export default function RegisterFeedback() {
  return (
    <>
      <Title text="Cadastrar feedback" />
      <div className="mx-auto max-w-2xl">
        <Form />
      </div>
    </>
  )
}
