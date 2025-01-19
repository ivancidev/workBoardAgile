import Logo from '../../assets/images/logo.png';
import { GridIcon } from './icons/grid-icon';
export default function Navbar() {
  return (
    <nav className="flex items-center p-4 border-b-2 h-24 sticky top-0 bg-white z-10">
      <div>
        <img src={Logo} alt="logo" className="w-24 rounded-full" />
      </div>
      <div className="flex items-center space-x-3 ml-6 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-300 ease-in-out">
        <GridIcon />
        <p className="font-semibold">Tableros</p>
      </div>
    </nav>
  );
}
