import { DeleteButton } from "../../UI";
import classes from "./PostItem.module.css"

function PostItem({ post, number, remove }) {

    const id = localStorage.getItem("id");
    const nickname = localStorage.getItem("nickname");

    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
        // return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
    };

    return (
        <div className={classes.post}>
            <div className={classes.post__top}>
                <div className={classes.post__content}>
                    <strong>{number}. {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className={classes.post__btns}>
                    {
                        post.creator == id || post.creator == nickname
                        ?<DeleteButton onClick={() => remove(post)} />
                        :<div/>
                    }
                    
                </div>
            </div>
            <div className={classes.post__bottom}>
                <div>
                    {formatDateTime(post.publication_date)}
                </div>
                <div>
                    {post.creator}
                </div>
            </div>
        </div>

    );
}

export { PostItem };
