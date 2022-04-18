import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you Palatte" />
      <h1 className="headtext__cormorant">Our Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Antipasti</p>
        <div className="app__specialMenu_menu_items">
          {data.appetizers.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Pizza</p>
        <div className="app__specialMenu_menu_items">
          {data.pizzas.map((pizza, index) => (
            <MenuItem key={pizza.title + index} title={pizza.title} price={pizza.price} tags={pizza.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* <div style={{marginTop: "15px" }}>
            <button type="button" className="custom__button">View More</button>
    </div> */}
  </div>
);

export default SpecialMenu;
