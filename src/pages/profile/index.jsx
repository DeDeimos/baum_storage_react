import { useState } from "react";
import classes from "./profile.module.css";

const Profile = () => {
    const login = localStorage.getItem("login");
    const nickname = localStorage.getItem("nickname");
    
    const [edit, setEdit] = useState(false);
    const [newLogin, setNewLogin] = useState("");


    return (
        <div className={classes.profilePage}>
            <h1>Profile</h1>
            <div className={classes.profileInfo}>
                <label for="username">Login:</label>
                <input type="text" id="username" value={login} disabled />
                <label for="nickname">Nickname:</label>
                <input type="text" id="nickname" value={nickname} disabled />
            </div>
            <div>
                <button id="edit-btn">Edit</button>
                <button id="save-btn" disabled>Save</button>
            </div>

        </div>
    );
}

export { Profile };