import { useState } from "react"
import PostContexts from "../contexts/PostContext"
import { useContext } from "react"

const Post = ({data}) => {

    const [favourite, setFavourite] = useState(false)
    const { deletePost, openEditForm } = useContext(PostContexts)

    const handleFavourite = () => {
        setFavourite(!favourite)
    }
    return (

        <>
        <div className="postCard">
            <div className="upper">
                <img src={data.image} alt={data.title} />
                <i onClick={handleFavourite} className={favourite?"fa fa-heart":"fa fa-heart-o"}/>
            </div>
            <div className="lower">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
                <div>
                    <i className="fa fa-trash-o" onClick={() => deletePost(data.id)}></i>
                    <i className="fa fa-edit" onClick={() => openEditForm(data.id)}></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default Post