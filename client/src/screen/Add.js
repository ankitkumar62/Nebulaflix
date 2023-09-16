import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'; 

const Add = () => {

    const [id, setId] = useState('');
    const [inputCount, setInputCount] = useState(0);
    const [linkData, setLinkData] = useState({});
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');
    const [time, setTime] = useState('');
    const [quality, setQuality] = useState('');
    const [category, setCategory] = useState('');
    const [types, setTypes] = useState('');
    const [episodes, setEpisodes] = useState('');
    const [disc, setDisc] = useState('');
    const [image, setImage] = useState('');
    const [cover, setCover] = useState('');
    const [trailer, setTrailer] = useState('');
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');
    const [link4, setLink4] = useState('');
    const [link5, setLink5] = useState('');
    const [link6, setLink6] = useState('');
    const [link7, setLink7] = useState('');
    const [link8, setLink8] = useState('');
    const [link9, setLink9] = useState('');
    const [link10, setLink10] = useState('');
    const [link11, setLink11] = useState('');






    const handleIdChange = (e) => {
        setEpisodes(e.target.value);
        const count = parseInt(e.target.value, 10) || 0;
        setInputCount(count);
        const newLinkData = {};
        for (let i = 1; i <= count; i++) {
            newLinkData[`link${i}`] = '';
        }
        setLinkData(newLinkData);

    };

    const handleLinkChange = (e, linkName) => {
        // Update the linkData object based on the linkName

        setLinkData((prevLinkData) => ({
            ...prevLinkData,
            [linkName]: e.target.value,
        }));


    };


    const renderInputFields = () => {
        const inputFields = [];
        for (let i = 1; i <= inputCount; i++) {
            const linkName = `link${i}`;
            inputFields.push(
                <div>
                   <i className="fa fa-link" style={{fontSize: '30px',color:'#fff'}}></i>
                <input
                    key={i}
                    type="text"
                    className='inpu'
                    placeholder='Enter url'
                    value={linkData[linkName]}
                    onChange={(e) => {
                        handleLinkChange(e, linkName);

                    }}
                />
                </div>
            );
        }
        return inputFields;
    };
    useEffect(() => {
        setLink1(linkData.link1);
        setLink2(linkData.link2);
        setLink3(linkData.link3);
        setLink4(linkData.link4);
        setLink5(linkData.link5);
        setLink6(linkData.link6);

        setLink7(linkData.link7);
        setLink8(linkData.link8);
        setLink9(linkData.link9);
        setLink10(linkData.link10);
        setLink11(linkData.link11);

        // setLink2(linkData.link2);
        // setLink2(linkData.link2);
        // setLink2(linkData.link2);

        // setLink2(linkData.link2);
        // setLink2(linkData.link2);
        // setLink2(linkData.link2);

        // setLink2(linkData.link2);
        // setLink2(linkData.link2);
        // setLink2(linkData.link2);

        // setLink2(linkData.link2);
        // setLink2(linkData.link2);

        // setLink2(linkData.link2);
        // setLink2(linkData.link2);
        // setLink2(linkData.link2);

        // setLink2(linkData.link2);
    }, [linkData.link1, linkData.link2, linkData.link3, linkData.link4, linkData.link5, linkData.link6, linkData.link7, linkData.link8, linkData.link9, linkData.link10, linkData.link11]);

    const getData = async () => {
        try {
            let result = await fetch('http://localhost:2000/Add', {
                method: 'post',
                body: JSON.stringify({
                    id,
                    time,
                    title,
                    trailer,
                    types,
                    category,
                    cover,
                    disc,
                    image,
                    rating,
                    quality,
                    year,
                    episodes,
                    link1,
                    link2,
                    link3,
                    link4,
                    link5,
                    link6,
                    link7,
                    link8,
                    link9,
                    link10,
                    link11,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            let response = await result.json();
            console.log(response);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
        <div className='main'>
        
            <div className='mainContainer1'>
                
                <div className='container1'>
                <h1 className='AddH'>ADD</h1>
                    <label for='id'>
                    <i className="fa fa-id-card" style={{fontSize: '25px',color:'#fff'}}></i> 
                        <input className='inpu'  type='text' value={id} onChange={(e) => setId(e.target.value)} />
                    </label>
                    <label for='title'>
                    <i className="fa fa-user-circle-o" style={{fontSize: '25px',color:'#fff'}}></i>
                        <input className='inpu'  type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-imdb" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu' type='text' value={rating} onChange={(e) => setRating(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-calendar" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={year} onChange={(e) => setYear(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-clock-o" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={time} onChange={(e) => setTime(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-star" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={quality} onChange={(e) => setQuality(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-flag" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={disc} onChange={(e) => setDisc(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-list-alt" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={category} onChange={(e) => setCategory(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-filter" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={types} onChange={(e) => setTypes(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-image" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={image} onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-image" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={cover} onChange={(e) => setCover(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-youtube-play" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input className='inpu'  type='text' value={trailer} onChange={(e) => setTrailer(e.target.value)} />
                    </label>
                    <label>
                    <i className="fa fa-play" style={{fontSize: '25px',color:'#fff'}}></i>
                    <input
                    className='inpu' 
                        type="text"
                        placeholder="Episodes"
                        value={episodes}
                        onChange={handleIdChange}
                    />
                    </label>
                    {renderInputFields()}

                    <button type="button" onClick={getData} className="button2">Sign Up</button>
                </div>
            </div>
           
            </div>
        </>
    )
}

export default Add