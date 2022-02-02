import React from 'react';
import {Checkmark} from 'react-checkmark';
function Header() {
  return <div className='header-wrapper'>
      <h1>
        Live Spaces
      </h1>
      <br />
      <Checkmark size='20px' className='checkmark'/>
      <h3> All NFTs on cyber either belong to or were minted by their space creator.</h3>
  </div>;
}

export default Header;
