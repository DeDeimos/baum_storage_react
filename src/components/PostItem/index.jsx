import { DeleteButton } from "../../UI";

function PostItem({ post, number, remove }) {
    return (
        <div className="post">
            <div className="post__top">
                <div className="post__content">
                    <strong>{number}. {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <DeleteButton onClick={() => remove(post)} />
                </div>
            </div>
            <div className="post__bottom">
                <div>
                    {post.publication_date}
                </div>
                <div>
                    {post.creator}
                </div>
            </div>
        </div>

    );
}

export { PostItem };
