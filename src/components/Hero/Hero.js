import React from 'react'
import style from './Hero.scss'

const Hero = () => (
    <header className={style.component}>
        <h2 className={style.title}>Things to do</h2>
        <img src="images/space.png" className={style.image} alt='foto'/>
    </header>
);

export default Hero;