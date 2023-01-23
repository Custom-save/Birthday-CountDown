import React from 'react';

const Wish = ({ name, year }) => {
  return (
    <div className='wish-message'>
      HAPPY BIRTHDAY <span className='highlight'>{name.toUpperCase()}</span> !!!
      <div style={{ marginTop: '15px' }}>
        <span style={{fontSize: '0.7em'}}>WISH YOU ALL THE BEST  !!! </span>
        <div class="flip-animation">
          <span>{new Date().getFullYear() - year}</span>
          <span>Y</span>
          <span>E</span>
          <span>A</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>D</span>
        </div>
      </div>

    </div>
  );
};

export default Wish;
