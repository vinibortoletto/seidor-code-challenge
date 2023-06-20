import loadingImage from '../assets/loading.png'

export default function Loading() {
  return (
    <div className="h-6 w-6 animate-spin">
      <img src={loadingImage} alt="animação de carregamento" />
    </div>
  )
}
