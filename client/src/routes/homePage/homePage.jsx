import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title"> Your Dream Home Awaits - Contact Me Today!</h1>
          <i>
          <p>
          Happy Homes stands as a distinguished real estate consulting firm, catering to the diverse needs of real estate investors, end-user residential seekers, retail and commercial buyers, and those in search of corporate office lease support across multiple locations. Since our inception in 2006, our unwavering commitment to excellence has been guided by the principle of a tradition of trust.

          </p>
          </i>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>19+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>100</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg-new.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
