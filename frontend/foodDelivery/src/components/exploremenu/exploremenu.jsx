import React from "react";
import "./exploremenu.css";
import noodles from "../../assets/noodles.avif";
import rolls from "../../assets/springroll.jpg";
import salad from "../../assets/salad.webp";
import sandwitch from "../../assets/sanndwitch.png";
import dessert from "../../assets/dessert.webp";
import cake from "../../assets/cake.png";
import pasta from "../../assets/pasta.png";
import paneertikka from "../../assets/paneertikka.png";

const menuItem = [
  {
    src: noodles,
    name: "Noodles",
  },
  {
    src: rolls,
    name: "Rolls",
  },
  {
    src: salad,
    name: "Salad",
  },
  {
    src: sandwitch,
    name: "Sandwich",
  },
  {
    src: dessert,
    name: "Dessert",
  },
  {
    src: cake,
    name: "Cake",
  },
  {
    src: pasta,
    name: "Pasta",
  },
  {
    src: paneertikka,
    name: "Paneertikka",
  },
];

const Exploremenu = ({category ,setCategory}) => {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p>
          Fresh, locally-sourced ingredients in creative dishes. Enjoy
          farm-to-table salads, rolls, tikka, and decadent desserts in a cozy
          ambiance.All prepared with a passion for quality. Indulge in our decadent desserts and explore a diverse selection of wines and craft beers, all served in a cozy, inviting ambiance.
        </p>

        <div className="explore-menu-list">
          
          {menuItem.map((item, index) => {
            return(
            <div onClick={()=>{setCategory(prev=>prev==item.name?"All":item.name)}} className="menu-item" key={index}>
            <img className={`${category==item.name?'active':""}`} src={item.src} alt="" />
            <p>{item.name}</p>
          </div>
            )
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Exploremenu;
