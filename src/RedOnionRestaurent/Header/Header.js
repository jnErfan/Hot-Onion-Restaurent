import React from 'react';
import NavBar from '../NavBar/NavBar';
import "./Header.css";
import Typewriter from 'typewriter-effect';


const Header = () => {
    return (
        <div>
            <NavBar/>
            <section className="bg-Style headerItem" id="home">
           
          <div className="">
          <div>
               <h1 className="text-start headerTitle">

                Welcome To Red Onion 

               <span className="text-danger">
                    <Typewriter
                    options={{
                        strings: ['Restaurant', 'Foods Zone', 'Bakery'],
                        autoStart: true,
                        loop: true,
                    }}/>
               </span>

              </h1>

           </div>

           <div className="d-flex justify-content-center mt-5 headerInput">
           <input type="text" className="form-control w-75 border-0 rounded-pill" placeholder="Search Food" disabled />
           <button className="btn btn-danger searchbutton py-1 px-3 rounded-pill" disabled>Search</button>
           </div>
          </div>

            </section>
        </div>
    );
};

export default Header;