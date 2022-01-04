import React from "react";
import classes from './car-list.module.css'; 

export const CarListComponent: React.FunctionComponent = (props) => {
  return (
    <ul className={classes.root}>
      <li>Audi Q8</li>
      <li>BMW X7</li>
    </ul>
  )
}