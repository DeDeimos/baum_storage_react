import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context';
import { Link, useNavigate } from 'react-router-dom';
import classes from "./Login.module.css"

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const [user, setUser] = useState({
        login: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const login = event => {
        event.preventDefault();
        console.log(user);

        if (!user.login || !user.password) {
            setError('Заполните все поля');
        } else {
            fetch('http://localhost:3010/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(response => {
                    console.log(response);
                    if (response.ok) {
                        return response.json();
                    }
                    return response.text().then(error => {
                        throw new Error(error);
                    });
                })
                .then(data => {
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('id', data.id);
                    localStorage.setItem('login', data.login);
                    localStorage.setItem('nickname', data.nickname);
                    setIsAuth(true);
                    localStorage.setItem('auth', 'true');
                    navigate('/');
                })
                .catch(error => {
                    setError(error.message);
                });
        }
    };

    return (
        <div className={classes.login}>
            <h1 style={{textAlign: "center"}}>Вход</h1>
            <form onSubmit={login} className={classes.form}>
                <input
                    type="text"
                    placeholder="Введите логин"
                    value={user.login}
                    onChange={event => setUser({ ...user, login: event.target.value })}
                />
                <input
                    type="password"
                    placeholder="Введите пароль"
                    value={user.password}
                    onChange={event => setUser({ ...user, password: event.target.value })}
                />
                <button>Войти</button>
            </form>
            <div>Нет аккаунта?</div>
            <Link to="/auth">Регистрация</Link>
        </div>
    );
};

export { Login };