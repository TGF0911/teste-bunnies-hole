import React from 'react';
import { BsMic, BsCameraVideo } from 'react-icons/bs'
import { FiCamera } from 'react-icons/fi'

import videoImg from '../assets/videoThumb.png'
import audioImg from '../assets/audioThumb.png'
import photoImg from '../assets/imageThumb.png'

import '../styles/Card.css';

//Imagens diferentes para cada tipo de card  
//{type, name, value, rating, thumbnail }

const Card = (props) => {

  function thumbnailImg() {
    if (props.thumbnail === "") {
      if (props.type == 'audio') return (<img src={audioImg} />);
      else if (props.type == 'video') return (<img src={videoImg} />);
      else return (<img src={photoImg} />);
    } else return  (<img src={props.thumbnail} />);
  }

  function icons() {
    if (props.type == 'audio') return (<BsMic size={24} color="rgba(202, 18, 64, 0.8)" />)
    else if (props.type == 'video') return (<BsCameraVideo size={24} color="rgba(202, 18, 64, 0.8)" />)
    else return (<FiCamera size={24} color="rgba(202, 18, 64, 0.8)" />)
  }

  return (
    <div className="card-container">
      {thumbnailImg()}

      <div className="icon">{icons()}</div>

      <div className="footer">
        <div className="text-card">
          <h3>{props.name}</h3>
          <p>Nota: {props.rating}</p>
        </div>
        <h3>R$ {props.value}</h3>
      </div>
    </div>
  )
}

export default Card;