import App from 'App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import { FeedbackProvider } from './contexts/FeedbackContext'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </BrowserRouter>
)
