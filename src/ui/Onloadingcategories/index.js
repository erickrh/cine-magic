import React from 'react';
import './Onloadingcategories.css';

function Onloadingcategories() {
  return (
    <div className='Onloadingcategories'>
      {new Array(19)
        .fill(1)
        .map((_, index) =>
          <div key={index} className='skeletonContainer'>
            <div className="boxCategory"></div>
            <div className='nameSkeleton'></div>  
          </div>
        )}
    </div>
  );
}

export { Onloadingcategories };