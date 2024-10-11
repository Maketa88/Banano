
import { Navbar } from '../../../Components/Navbar/Navbar'
import { Logo } from '../../../Components/Logo/Logo'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      
      <Logo />
      <Navbar />
      <Logo />
      
    </header>
  )
}