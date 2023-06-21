import { useContext } from 'react'
import Title from '../components/Title'
import FeedbackCard from '../components/FeedbackCard'
import Filters from '../components/Filters'
import { FeedbackContext } from '../contexts/FeedbackContext'

export default function Feedbacks() {
  const { filteredFeedbacks } = useContext(FeedbackContext)

  return (
    <>
      <Title text="Feedbacks" />

      <Filters />

      <div className="flex flex-col gap-4">
        {filteredFeedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </>
  )
}
