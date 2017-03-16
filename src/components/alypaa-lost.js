import React from 'react';


const AlypaaLost = (props) => {

  const showIntro = (e) => {
    e.preventDefault();
    props.handleIntro();
  }

  return (
    <div className="box xs-p-30">
      <h1 className="xs-mb-20">Älypää</h1>
      <p>Oh nooo...</p>
      <button onClick={showIntro} className="btn btn--orange xs-p-10 xs-mt-30">Pelaa uudestaan</button>
    </div>
  );
}

export default AlypaaLost;
