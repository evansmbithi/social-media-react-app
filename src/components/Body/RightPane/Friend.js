import "./../Body.css"
import ProfilePic from "./../../../img/User-Profile-PNG-Image.png"

function Friend(){
    return(
        <div className="single-friend">
            <img src={ProfilePic} alt="profile pic" className="profile-pic" />
            <span>Someone in Kenya</span><br/>
            <button>Add Friend</button>
        </div>
    )
}

export default Friend;