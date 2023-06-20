import Header from 'components/Header'
import 'global.css'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <>
      <Header />

      <main className="mt-20">
        <AppRoutes />
      </main>
    </>
  )
}
