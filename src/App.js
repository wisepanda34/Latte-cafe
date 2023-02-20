import React, {useState} from 'react';
import Header from "./Layout/Header/Header";
import Main from "./Pages/Main";
import Footer from "./Layout/Footer/Footer";
import "./App.scss";
import HeaderMenu from "./Layout/HeaderMenu/HeaderMenu";

function App() {
    // const[menuActive, setMenuActive]=useState(false)
    // const items = [{value:"About",href: "#", id:"1"},
    //                 {value:"Menu",href: "#", id:"2"},
    //                 {value:"Info",href: "#", id:"3"},
    //                 {value:"Booking",href: "#", id:"4"}];
  return (
    <div className="App">
      <Header/>
      <Main/>
        {/*<HeaderMenu active={menuActive} setActive={setMenuActive} header={"LATTE CAFE"} items={items}/>*/}

      <Footer/>
    </div>
  );
}

export default App;
