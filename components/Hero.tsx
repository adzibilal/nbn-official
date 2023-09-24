'use client'
import { NextPage } from 'next'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'

interface Props {}

const Hero: NextPage<Props> = ({}) => {
    const handleDragStart = (e: any) => e.preventDefault()
    const items = [
        <img
            src='/images/hero/1.jpeg'
            className='img-hero'
            onDragStart={handleDragStart}
            role='presentation'
        />,
        <img
            src='/images/hero/2.jpeg'
            className='img-hero'
            onDragStart={handleDragStart}
            role='presentation'
        />,
        <img
            src='/images/hero/3.jpeg'
            className='img-hero'
            onDragStart={handleDragStart}
            role='presentation'
        />
    ]

    return (
        <div className='hero-slider'>
            <AliceCarousel
                autoPlay
                autoPlayStrategy='none'
                autoPlayInterval={8000}
                animationDuration={1000}
                animationType='slide'
                infinite
                mouseTracking
                disableButtonsControls
                items={items}
            />
        </div>
    )
}

export default Hero
