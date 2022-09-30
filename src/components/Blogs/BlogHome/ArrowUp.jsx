import React from 'react'
import './Home.css'
import './arrowUp.css'
import { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';


export default function ArrowUp() {

    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true)
        }
        else if (scrolled <= 100) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);


    const Arrowup = () => (
        <div style={{ display: visible ? 'inline' : 'none' }}>
            <div className='arrow-up'

            >
                <FaAngleUp onClick={scrollToTop} size={20}
                    color={'white'}
                    cursor={'pointer'}
                />
            </div>
        </div>
    )


    return (
        <Arrowup />
    )
}







