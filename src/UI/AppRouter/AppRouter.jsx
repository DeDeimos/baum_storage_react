import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import { Auth, Login, Main, NotFound, Profile } from '../../pages';

const AppRouter = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    console.log(isAuth);

    return (
        isAuth
            ?
            <Routes >
                <Route
                    element={<Profile />}
                    path="/profile"
                />
                <Route
                    element={<Main />}
                    path="/"
                />
                <Route
                    element={<NotFound />}
                    path='*'
                />

            </Routes>
            :
            <Routes >
                <Route
                    element={<Login />}
                    path="/"
                />
                <Route
                    element={<Auth />}
                    path="/auth"
                />
                <Route
                    element={<NotFound />}
                    path='*'
                />
            </Routes>

    );
}

export { AppRouter };