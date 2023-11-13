import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location= useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"
    const handleLogout = () => {
        logOut().then(() => {
            alert("Logout successful!")
            navigate(from, {replace: true})
        
        }).catch((error) => {
        });
}
return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className="bg-orange3 hover:bg-red-700 text-white rounded-md px-6 py-2" onClick={handleLogout}>Logout</button>    
    </div>
  )

}
export default Logout