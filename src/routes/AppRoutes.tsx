import { Route, Routes } from 'react-router-dom'
import RegisterFeedback from '../pages/RegisterFeedback'
import Feedbacks from '../pages/Feedbacks'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RegisterFeedback />} />
      <Route path="/feedbacks" element={<Feedbacks />} />
    </Routes>
  )
}
