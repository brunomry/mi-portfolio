import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';

const MainLayout = ({children}) => {
  return (
    <>
      <Sidebar/>
      {children}
      <Footer></Footer>
    </>
  )
}

export default MainLayout;