import React from 'react';


const AlypaaIntro = (props) => {

  const showIntro = (e) => {
    e.preventDefault();
    props.handleIntro();
  }

  return (
    <div className="box xs-p-30">
      <h1 className="xs-mb-20">Älypää</h1>
      <p>Tervetuloa pelaamaan Maailman ympäri Älypää-peliä! Pelissa on 5 tasoa, joista jokaisessa on 5 kysymystä. Onnea peliin!</p>
      <button onClick={showIntro} className="btn btn--orange xs-p-10 xs-mt-30">Aloita peli</button>
    </div>
  );
}

export default AlypaaIntro;
