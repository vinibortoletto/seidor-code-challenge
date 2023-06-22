import { Link } from 'react-router-dom'
import logo from '../assets/seidor-logo.png'
import { AiFillEdit, AiFillFileText } from 'react-icons/ai'

export default function Header() {
  return (
    <header className="fixed left-0 top-0 flex h-14 w-full items-center justify-between bg-slate-900   p-4 shadow sm:px-8 md:px-16 lg:px-32">
      <div className="p-2">
        <Link to="/">
          <img className="w-24" src={logo} alt="logo da empresa saidor" />
        </Link>
      </div>

      <ul className="flex gap-6">
        <li>
          <Link to="/" className="flex items-center gap-2 hover:underline">
            <span>
              <AiFillEdit />
            </span>
            <span>Cadastrar</span>
          </Link>
        </li>

        <li>
          <Link
            to="/feedbacks"
            className="flex items-center gap-2 hover:underline"
          >
            <span>
              <AiFillFileText />
            </span>
            <span>Feedbacks</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}
