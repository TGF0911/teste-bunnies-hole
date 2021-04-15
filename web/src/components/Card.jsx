import React from 'react';
import { BsMic, BsCameraVideo } from 'react-icons/bs'
import { FiCamera } from 'react-icons/fi'

import videoImg from '../assets/videoThumb.png'
import audioImg from '../assets/audioThumb.png'
import photoImg from '../assets/imageThumb.png'

//Icons diferentes para cada tipo de Card
//Imagens diferentes para cada tipo de card  
//{type, name, value, rating, thumbnail }

const Card = (type, name, value, rating, thumbnail) => {

  function thumbnailImg() {

    //fazer de um jeito melhor

    if (!thumbnail) {
      if (type == 'audio') {
        return audioImg;
      } else if (type == 'video') {
        return videoImg;
      } else {
        return  photoImg;
      }
    }
  }

  return (
    <div className="card-container">
      {
        thumbnail ? ( <img src={thumbnail} /> ) : (<img src={thumbnailImg()} />)
      }

      <div className="icon">
        <BsCameraVideo size={24} color="rgba(202, 18, 64, 0.8)" />
      </div>


      <div class="footer">
        <div class="text-card">
          <h3>Como tocar cuica</h3>
          <p>Nota: 9.5</p>
        </div>
        <h3>R$ 120.99</h3>
      </div>
    </div>
  )
}

export default Card;