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
        <div className=''>
            <AliceCarousel mouseTracking items={items} />
        </div>
    )
}

export default Hero
