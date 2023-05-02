import React from 'react';
import './OnLoadingTrending.css';

function OnLoadingTrending() {
  return (
    new Array(3)
      .fill(1)
      .map((item, index) => <div key={index} className='tredingSkeleton'></div>)
  );
}

export { OnLoadingTrending };