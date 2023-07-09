import { Profile, Main, Login, Auth } from "../pages";

export const privateRoutes = [
    {path: '/profile', component: Profile, exact: true},
    {path: '/', component: Main, exact: true},
    
]

export const publicRoutes = [
    {path: '/', component: Main, exact: true},
    {path: '/login', component: Login, exact: true},
    {path: '/auth', component: Auth, exact: true},
]