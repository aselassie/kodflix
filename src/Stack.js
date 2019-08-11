import React from 'react';

export default function Stack(props) {
    return (
      <div className="item">
        <img src={props.logo} alt={`${props.name} poster`} />
        <div className="element">
          {props.name}
        </div>
      </div>
    );
}