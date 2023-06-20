import { useEffect, useState } from 'react'
import Title from '../components/Title'
import IFeedback from '../interfaces/IFeedback'
import FeedbackCard from '../components/FeedbackCard'

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([])

  const getLocalFeedbacks = () => {
    const localFeedbacks = JSON.parse(
      localStorage.getItem('feedbacks') as string
    )

    if (localFeedbacks) {
      setFeedbacks(localFeedbacks)
    }
  }

  useEffect(() => {
    getLocalFeedbacks()
  }, [])

  return (
    <>
      <Title text="Feedbacks" />

      <div className="flex flex-col gap-4">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </>
  )
}
