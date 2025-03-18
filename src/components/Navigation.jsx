import { NavLink } from "react-router"

export const Navigation = () => {
  return (
    <nav className="bg-[#2a2a2a] py-4 rounded-lg">
      <ul className="flex justify-center space-x-8 text-white">
        <li>
          <NavLink to="/" className="hover:text-blue-400 transition-colors">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/Estatus" className="hover:text-blue-400 transition-colors">Estatus</NavLink>
        </li>
        <li>
          <NavLink to="/Apartados" className="hover:text-blue-400 transition-colors">Apartados</NavLink>
        </li>
        <li>
          <NavLink to="/ia" className="hover:text-blue-400 transition-colors">IA</NavLink>
        </li>
      </ul>
    </nav>
  )
}
