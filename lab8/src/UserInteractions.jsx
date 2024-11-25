import { useState } from 'react';

const UserInteractions = () => {
    const [style, setStyle] = useState({ color: 'black' });
    const [image, setImage] = useState(null);
    const [data, setData] = useState(null);

    const handleClick = () => {
        alert('Button clicked!');
    };

    const handleMouseOver = () => {
        setStyle({ color: 'blue' });
    };

    const showImage = () => {
        setImage('/react.svg');
    };

    const loadDataFromJson = async () => {
        const response = await fetch('../data/data.json');
        const jsonData = await response.json();
        setData(jsonData);
    };

    const uploadFile = (event) => {
        const file = event.target.files[0];
        console.log('Uploaded file:', file);
    };

    const changeStyle = () => {
        setStyle(prevStyle => ({
            ...prevStyle,
            backgroundColor: 'lightgray'
        }));
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <div onMouseOver={handleMouseOver} style={style}>
                Hover over me!
            </div>
            <button onClick={showImage}>Show Image</button>
            {image && <img src={image} alt="Placeholder" />}
            <button onClick={loadDataFromJson}>Load Data</button>
            <input type="file" onChange={uploadFile} />
            <button onClick={changeStyle}>Change Style</button>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default UserInteractions;
