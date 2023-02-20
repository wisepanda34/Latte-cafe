import React from "react";
import bg from '../../Assets/img/home-img.jpg';


const Home = () =>{
    
   return(
    <section className="home">
        <div className="container">
            <img src={bg} alt="bg"/>
        </div>
    </section>
   )
}
export default Home;