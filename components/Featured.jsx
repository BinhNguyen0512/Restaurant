import React, { useState } from 'react'
import styles from "../styles/Featured.module.css"
import Image from "next/image"

const images = [
    "/img/featured.png",
    "/img/featured1.png",
    "/img/featured2.png",
];

const Featured = () => {
  const [index, setIndex] = useState(0)

  const handleArrow = (direction) => {
    if(direction === 'l'){
        setIndex(index === 0 ? 2 : index - 1);
        return;
    }
    setIndex(index === 2 ? 0 : index + 1);
  }
  console.log(index)
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left: 0, zIndex: 2}} onClick={() => handleArrow('l')}>
            <Image src="/img/arrowl.png" alt="arrowl" fill style={{objectFit: 'contain'}}/>
        </div>
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
           
            {images.map((image, index) => {
                return (
                    <div className={styles.imgContainer} key={index} >
                        <Image src={image}  alt="" fill style={{objectFit: 'contain'}}/>
                    </div>
                )
            })}
    
        </div>
        <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow('r')}>
            <Image src="/img/arrowr.png" alt="arrowr" fill style={{objectFit: 'contain'}}/>
        </div>

    </div>
  )
}

export default Featured