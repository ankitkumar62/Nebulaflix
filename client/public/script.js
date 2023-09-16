
const Movies = [
    {
        id: '1',
        title: "Avengers",
        image: 'https://www.scrolldroll.com/wp-content/uploads/2023/01/antman-and-the-wasp-quantumania-hollywood-movies-in-february-2023-1.jpg',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
    {
        id: '2',
        title: "Avengers End Game",
        image: 'https://m.media-amazon.com/images/M/MV5BODk4MzkxODgtODEwZi00YTAwLWJjYzUtNjRkYjEzY2ZmNzYxXkEyXkFqcGdeQXVyMDEyNTM2Mg@@._V1_.jpg',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-the-nun-2-2023-hq-hdcamrip-hindi-dubbed-org-line-full-movie-480p-480p-720p-1080p/'
    },
    {
        id: '3',
        title: "Avengers",
        image: 'https://flxt.tmsimg.com/assets/p163191_p_v8_al.jpg',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
    {
        id: '4',
        title: "Avengers",
        image: 'https://i.ytimg.com/vi/IE8HIsIrq4o/maxresdefault.jpg',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
    {
        id: '5',
        title: "Avengers",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskV7LGM4JLuVOYh-mCmtTcMSgfbSjP7J0vQ&usqp=CAU',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
    {
        id: '6',
        title: "Avengers",
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00347867-rruvehxwpe-portrait.jpg',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
    {
        id: '7',
        title: "Avengers",
        image: 'https://www.projectorreviews.com/wp-content/uploads/2023/08/Heart-of-Stone-Poster.jpg',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 8,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
    {
        id: '9',
        title: "Avengers",
        image: 'https://static.wikia.nocookie.net/netflix/images/3/3e/Narvik_ES_poster.jpg/revision/latest?cb=20230129084307',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
    {
        id: '10',
        title: "Avengers",
        image: 'https://www.scrolldroll.com/wp-content/uploads/2023/03/shazam-hollywood-movies-releasing-in-march-2023.jpg',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
    {
        id: '11',
        title: "Avengers",
        image: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        decription:
            "Download Avengers(2012)Hindi[Voice Over]Full Movie WEB-DL Watch Online",
        rating: 5,
        quality: '1080p',
        link: 'https://vegamovies.im/download-netflix-a-time-called-you-2023-season-1-complete-hindi-english-korean-720p-1080p-web-dl/'
    },
]
const caraousel = document.querySelector('.carousel');
let slider=[];
let sliderIndex=0;
const createSlide = () =>{
    if(sliderIndex>=length){
        sliderIndex=0;
    }
    let slider=document.createElement('div');
    let imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(Movies[sliderIndex].title));
    p.appendChild(document.createTextNode(Movies[sliderIndex].decription))
    content.appendChild(h1);
    content.appendChild(p);
    slider.appendChild(imgElement);
    caraousel.appendChild(slide)
    imgElement.src=Movies[sliderIndex].image;
    sliderIndex++
    slider.className='slider'
    content.className='slider-content'
    h1.className='Movie-title'
    p.className='Movie-des'
    slider.push(slider);
    if(slider.length){
        slider[0].style.marginLeft = `calc(-${100*(slider.length-2)}% - ${
            30* (slider.length - 2)
        }px )`
    }

}

for(let i=0;i<3; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
},2000)