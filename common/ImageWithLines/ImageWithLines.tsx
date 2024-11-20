import React from 'react'

function ImageWithLines({url}: {url: string}) {
  return (
    <div className="linesImage">

        <div className="linesEffect linesEffect--flipped">
        <div className="linesEffect__1"></div>
        <div className="linesEffect__2"></div>
        <div className="linesEffect__3"></div>
        </div>

        <img className="linesImage__img" src={url}></img>

        <div className="linesEffect">
        <div className="linesEffect__1"></div>
        <div className="linesEffect__2"></div>
        <div className="linesEffect__3"></div>
        </div>

    </div>
  )
}

export default ImageWithLines