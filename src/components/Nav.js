import {Link} from 'react-router-dom'

function Nav(){
    return(
        <>
        <div class="icon-bar">
                <Link to ="/now" className="">Now playing</Link>
                <Link to="/upcomming" className="">Up Comming</Link>
                <Link to="/rated" class="">Top Rated</Link>
                <Link to="/popular" class="">Popular</Link>

        </div>
        </>
    )
}

export default Nav;