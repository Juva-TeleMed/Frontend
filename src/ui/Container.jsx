import {Outlet} from 'react-router-dom'

function Container() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
      <Outlet/>
    </div>
    
  )
}

export default Container