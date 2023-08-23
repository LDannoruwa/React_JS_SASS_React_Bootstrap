import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            Home page

            {/*set links*/}
            <Link to="/user"> To user page </Link>
        </div>
    );
}

export default Home;