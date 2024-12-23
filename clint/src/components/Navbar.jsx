import React, { useState } from 'react'
import {IconButton} from "@mui/material"
import { Search,Menu,Person} from "@mui/icons-material"
import variables from "../styles/variables.scss"
import { useSelector ,useDispatch } from 'react-redux'
import "../styles/Navbar.scss"
import { Link } from 'react-router-dom'
import { setLogout } from '../redux/state'

const Navbar = () => {
    const [dropdownMenu,setDropdownMenu] = useState(false)
    const user = useSelector((state)=> state.user)

    const dispatch = useDispatch()
  return (
    <div className='navbar'>
        <a href='/'>
        <img src="/assets/logo2.jpg" alt='logo' />

        </a>

        <div className='navbar_search'>
            <input type='text' placeholder='Search...'/>
            <IconButton>
                <Search sx={{ color: variables.pinkred}}/>
            </IconButton>

        </div>

        <div className='navbar_right'>
            {user ? (
                <a href='/create-listing' className='host'>Became A Host</a>
            ) : (
                <a href='/login' className='host'>Become A Host</a>

            )}        

            <button className='navbar_right_account' onClick={() =>{
                setDropdownMenu(true)
            }}>

                <Menu sx={{color: variables.pinkred}}/>
                {!user ? (
                <Person sx={{color: variables.pinkred}}/>
                ) : (
                    <img
              src={`http://localhost:3000/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile photo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
            </button>

            {dropdownMenu && !user &&(
                <div className='navbar_right_accountmenu'>
                    <Link to="/login">Log In</Link>
                    <Link to="/register">Sign Up</Link>

                </div>
            )}
            {dropdownMenu && user && (
                <div className='navbar_right_accountmenu'>
                    <Link to="">Your List</Link>
                    <Link to="">Favorite List</Link>
                    <Link to="">Property List</Link>
                    <Link to="">Res List</Link>
                    <Link to="">Became A Host</Link>

                    <Link to="/login" onClick={() =>{
                        dispatch(setLogout())
                    }}>
                        Log Out
                    </Link>

                </div>
            )}
        </div>

    </div>
  )
}

export default Navbar;

