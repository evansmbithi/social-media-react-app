import "./../Body.css"
import ProfilePic from "./../../../img/User-Profile-PNG-Image.png"

function Post(){
    return(
        <div className="single-post">
            <img src={ProfilePic} alt="profile pic" className="profile-pic" />
            <strong>Lorem Ipsum</strong>
            <p>Mollit minim minim commodo officia nostrud. Laborum commodo cupidatat laborum aliquip velit anim. Tempor cupidatat ut non ut ut sint Lorem deserunt minim. Id reprehenderit est ad mollit aute consectetur eu incididunt labore excepteur laborum qui. Mollit non qui reprehenderit cupidatat irure anim nostrud enim exercitation ullamco. Officia aute adipisicing exercitation incididunt cillum commodo ipsum qui deserunt Lorem.</p>
            <hr/>
        </div>
    )
}

export default Post;