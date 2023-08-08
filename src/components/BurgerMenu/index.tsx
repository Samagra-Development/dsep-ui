import React from "react";
import { Menu } from "../../scripts/burgerMenu";
import Filters from "../Filters";

const Burger: React.FC<{ applyFilter: any; mode: any }> = ({
  applyFilter,
  mode,
}) => {
  return (
    <div className={"burgerCont"}>
      <div className={`burgerWrapper bg-transparent`}>
        <div className={`menu`} data-toggle="open" onClick={Menu}>
          <div className={`menuBarCont`}>
            <span className={`menu_bar1`} />
            <span className={`menu_bar2`} />
            <span className={`menu_bar3`} />
          </div>
        </div>
        <div className={`sidebar`}>
          <div className="burgerFilterWrapper">
            <Filters applyFilter={applyFilter} mode={mode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
