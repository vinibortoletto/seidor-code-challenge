import Header from 'components/Header'
import 'global.css'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <>
      <Header />

      <main className="mx-auto my-24 max-w-3xl">
        <AppRoutes />
      </main>
    </>
  )
}
