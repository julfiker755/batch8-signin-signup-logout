import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Authinfo } from '../../../provider/Authcontext/Authcontext';

const Header = () => {
    const {user,logOut}=useContext(Authinfo)
    console.log(user)
    return (
        <ul className='bg-[#258984] text-white sticky top-0 left-0 z-50 flex justify-center items-center space-x-4 py-2'>
            <li><NavLink className={({isActive}) =>isActive ? 'red':'green' } to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) =>isActive ? 'red':'green' } to="/order">Order</NavLink></li>
             {user  ? <>
                <button onClick={()=>logOut()} className='btn btn-success btn-sm'>Log Out</button>
                <li className='bg-[#35b5e378] px-3'>{user?.email}</li>
             </>:<>
             <li><NavLink className={({isActive}) =>isActive ? 'red':'green' } to="/register">Register</NavLink></li>
             <li><NavLink className={({isActive}) =>isActive ? 'red':'green' } to="/login">Login</NavLink></li>
             </>}
        </ul>
    );
};

export default Header;