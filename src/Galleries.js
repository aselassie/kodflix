import React from 'react';
import Stack from './Stack';
import getGalleries from './galleries-get';


export default function Galleries() {
    return (
      <div>
        <div className="container">
          {
            getGalleries().map(stack=>(
              <Stack 
                key={stack.id}
                id={stack.id} 
                name={stack.name} 
                logo={stack.logo}/>
            ))
          }
        </div>
      </div>
    );
  }
