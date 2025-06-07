
import Home from '../components/Home'
import NavbarPrincipal from '../components/NavbarPrincipal'


const MainPrincipal = () => {
  return (
     <div className="h-[100vh] flex flex-col lg:flex-row">
      <NavbarPrincipal></NavbarPrincipal>
      <Home></Home>
    </div>
  )
}

export default MainPrincipal