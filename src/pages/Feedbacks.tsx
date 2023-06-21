import { useContext } from 'react'
import Title from '../components/Title'
import FeedbackCard from '../components/FeedbackCard'
import Filters from '../components/Filters'
import { FeedbackContext } from '../contexts/FeedbackContext'

export default function Feedbacks() {
  const { feedbacks, filteredFeedbacks } = useContext(FeedbackContext)

  return (
    <>
      <Title text="Feedbacks" />
      <Filters />

      <div className="flex flex-col gap-4">
        {feedbacks.length === 0 ? (
          <p className="text-center text-2xl text-slate-500">
            Nenhum feedback cadastrado
          </p>
        ) : (
          filteredFeedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))
        )}
      </div>
    </>
  )
}
