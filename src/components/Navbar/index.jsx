import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context';
import classes from "./Navbar.module.css"
import { ExitButton } from '../../UI/ExitButton';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigate("/");
    }

    return (
        <div className={classes.navbar}>
            <div >
                <Link style={{margin: "3px"}} to="/">Посты</Link>
                <Link style={{margin: "3px"}} to="/profile">Профиль</Link>
            </div>
            <div>
                <ExitButton onClick={logout}>
                    Выйти
                </ExitButton>
            </div>

        </div>
    );
}

export { Navbar };