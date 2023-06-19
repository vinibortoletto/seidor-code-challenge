import Header from 'components/Header'
import Form from './components/Form'
import Title from './components/Title'

export default function App() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Title text="Cadastro de feedbacks" />
        <Form />
      </main>
    </>
  )
}
