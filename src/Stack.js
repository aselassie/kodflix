import React from 'react';
import { Link } from 'react-router-dom'

export default function Stack(props) {
    return (
      <Link to={`/${props.id}`} className="item">
        <img src={props.logo} alt={`${props.name} poster`} />
        <div className="element">
          {props.name}
        </div>
      </Link>
    );
}