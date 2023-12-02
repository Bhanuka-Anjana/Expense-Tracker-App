import React from "react";
import { Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const { isLoggedIn } = useSlector((state) => state.authenticationSlice);
  const dispatch = useDispatch();
  return <Nav className="navbar" style={{ backgroundColor: "#e4fff2" }}>
    <h1 style={{fontFamily:'Brush Script MT, cursive'}}>My Expenses</h1>
    {
        isLoggedIn? <Button variant="link" href="/signin" onClick={()=>{dispatch(logout())}}>Log out</Button>:
        <div style={{display:'flex'}}>
            <NavLink to='/signup'>Sign up</NavLink>
            <NavLink to='/signin' style={{marginLeft : '1rem'}}>Sign in</NavLink>
        </div>
    }
  </Nav>;
}
