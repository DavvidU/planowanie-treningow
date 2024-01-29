import React, { useState } from 'react';
import obraz from "./../motivation.png";

const MotywacyjnyPrzycisk = () => {
    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
        setShowImage(!showImage);
    };

    return (
        <div>
            <button onClick={handleClick}>Pokaż motywacyjne zdjęcie</button>
            {showImage && (
                <img 
                    src={obraz}
                    alt="Motywacyja" 
                />
            )}
        </div>
    );
};

export default MotywacyjnyPrzycisk;