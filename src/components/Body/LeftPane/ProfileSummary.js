import "./../Body.css"
import ProfilePic from "./../../../img/User-Profile-PNG-Image.png"

function ProfileSummary(){
    return(
        <div className="profile-summary">
            <div className="cover-image">
                <img src={ProfilePic} alt="profile-photo" className="profile-photo"/>
            </div>
            <ul>
                <li><button>TWEETS</button></li>
                <li><button>FOLLOWING</button></li>
                <li><button>FOLLOWERS</button></li>
            </ul>
        </div>
    )
}

export default ProfileSummary;