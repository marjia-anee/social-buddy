import React from 'react';

const ShowImage = (props) => {

    const {image} = props.image;
    console.log(props);
    
    return (
        <div>
           <img src={image} alt=""/>
        </div>
    );
};

export default ShowImage;