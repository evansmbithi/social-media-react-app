import "./../Body.css";
import ProfilePic from "./../../../img/User-Profile-PNG-Image.png"

function PostInput(){
    return(
        <div className="post-input">
            <img src={ProfilePic} alt="profile pic" />
            <input type="text" placeholder="What's happening?" />
        </div>
    )
}

export default PostInput;