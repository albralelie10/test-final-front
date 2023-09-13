import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div >
           <nav className='navbar navbar-expand-sm bg-light mb-3 '>
                <div className='container'>
                        <div className='navbar-brand'>
                            <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Zodiac_Killer_symbol.svg/2490px-Zodiac_Killer_symbol.svg.png"
                        className='d-block '
                        style={{width:"70px",height:"70px",objectFit:"cover"}}
                            />
                        </div>
                        <div className='navbar-toggler'>
                            <span className='navbar-toggler-icon' data-bs-toggle="collapse" data-bs-target="#example"></span>
                        </div>
                        <div className='navbar-collapse collapse w-100' id="example">
                            <div className='navbar-nav w-100'>
                               <div className='d-sm-block d-md-flex gap-3 me-auto'>
                                <div ><a className='nav-link' href="/">Home</a></div>
                                <div ><a className='nav-link' href="/About">About</a></div>
                                <div ><a className='nav-link' href="/add-user">Add User</a></div>
                               </div>
                               <div className='d-sm-block d-md-flex gap-3'>
                                <div ><a className='nav-link' href="#">Register</a></div>
                                <div className='vr'></div>
                                <div ><a className='nav-link' href="#">Login</a></div>
                               </div>
                            </div>
                        </div>
                </div>
           </nav>
           <div>
            <Outlet/>
           </div>
    </div>
  )
}