import React from 'react';
import spider from '../../img/spiderman.jpg';
import iron from '../../img/ironman.jpg';
import hulk from '../../img/hulk.jpg';
import widow from '../../img/blackwidow.jpeg';
import captain from '../../img/captainamerica.jpg';
import thor from '../../img/thor.jpg';

const Heroes = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-2" id='heroes'>
            <div className='hero-card'>
                <img src={captain} alt="" />
                <div className="center">
                    <h2 className='text-2xl mb-2'>Captain America</h2>
                    <p className="mb-2">The First Avenger</p>
                </div>
            </div>
            <div className='hero-card'>
                <img src={iron} alt="" />
                <div className="center">
                    <h2 className='text-2xl mb-2'>Iron Man</h2>
                    <p className="mb-2">Genius. Billionaire. Philanthropist.</p>
                </div>
            </div>
            <div className='hero-card'>
                <img src={thor} alt="" />
                <div className="center">
                    <h2 className='text-2xl mb-2'>Thor</h2>
                    <p className="mb-2">The son of Odin</p>
                </div>
            </div>
            <div className='hero-card'>
                <img src={spider} alt="" />
                <div className="center">
                    <h2 className='text-2xl mb-2'>Spider Man</h2>
                    <p className="mb-2">Bitten by a radioactive spider</p>
                </div>
            </div>
            <div className='hero-card'>
                <img src={hulk} alt="" />
                <div className="center">
                    <h2 className='text-2xl mb-2'>Hulk</h2>
                    <p className="mb-2">The uncontrollable green monster </p>
                </div>
            </div>
            <div className='hero-card'>
                <img src={widow} alt="" />
                <div className="center">
                    <h2 className='text-2xl mb-2'>Black Widow</h2>
                    <p className="mb-2">Despite super spy</p>
                </div>
            </div>
        </div>
    );
};

export default Heroes;