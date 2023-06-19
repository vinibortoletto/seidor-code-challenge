// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/seidor-logo.png'

export default function Header() {
  return (
    <header className="fixed left-0 top-0 flex h-20 w-full items-center justify-between bg-slate-600 p-4 shadow sm:px-8 md:px-16 lg:px-32">
      <div className="p-2">
        <img className="w-24" src={logo} alt="logo da empresa saidor" />
      </div>

      <ul>
        <li>
          <Link to="/feedbacks" className="hover:underline">
            Feedbacks
          </Link>
        </li>
      </ul>
    </header>
  )
}
