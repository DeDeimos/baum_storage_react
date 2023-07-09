import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context';
import { Link, useNavigate } from 'react-router-dom';
import classes from "./Auth.module.css"

const Auth = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [user, setUser] = useState({
        login: "",
        nickname: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const auth = event => {
        event.preventDefault();
        console.log(user);

        if (!user.login || !user.password || !user.nickname) {
            setError('Заполните все поля');
        } else {
            fetch('http://localhost:3010/api/signup', {
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
                    localStorage.setItem('nickname', data.nickname);
                    setIsAuth(true);
                    localStorage.setItem('auth', 'true');
                    navigate('/');
                })
                .catch(error => {
                    setError(error.message);
                });
        }
    }

    return (
        <div className={classes.auth}>
            <h1>Регистрация</h1>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={auth} className={classes.form}>
                <input
                    type="text"
                    placeholder="Введите логин"
                    onChange={event => setUser({ ...user, login: event.target.value })}
                />
                <input
                    type="text"
                    placeholder="Введите никнейм"
                    onChange={event => setUser({ ...user, nickname: event.target.value })}
                />
                <input
                    type="password"
                    placeholder="Введите пароль"
                    onChange={event => setUser({ ...user, password: event.target.value })}
                />
                <button>Зарегистрироваться</button>
            </form>
            <div>Есть аккаунт?</div>
            <Link to="/">Авторизация</Link>
        </div>
    );
};

export { Auth };