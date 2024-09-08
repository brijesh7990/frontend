import { Outlet } from 'react-router-dom'
import NavbarComponent from '../shared/Navbar'
import FooterComponent from '../shared/Footer'

const Layout = () => {
    return (
        <>
            <NavbarComponent />
            <div className='min-h-[100vh]'>
                <Outlet />
            </div>
            <FooterComponent />

        </>
    )
}

export default Layout