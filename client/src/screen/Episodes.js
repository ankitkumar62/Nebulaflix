import React from 'react';
import { useParams } from 'react-router-dom';
import KDRAMA from '../api/KDrama';

const Episodes = () => {
    const { movieId } = useParams();
    const foundMovie = KDRAMA.find((movie) => movie.id === movieId);
    const n = parseInt(foundMovie.ep);

    // Create an array of numbers from 1 to n
    const episodeNumbers = Array.from({ length: n }, (_, index) => index + 1);

    const episodeLinks = Array.from({ length: n }, (_, index) => foundMovie[`link${index + 1}`]);

    const handleDownload = (episodeNumber) => {
        const link = episodeLinks[episodeNumber - 1];

        if (link) {
            const videoUrl = link;
            const newTab = window.open(videoUrl, '_blank');
            if (newTab) {
                newTab.focus();
            } else {
                // Handle the case where the new tab was blocked by a popup blocker
                console.error(`Popup blocker may have prevented opening the link in a new tab for Episode ${episodeNumber}`);
            }
        } else {
            // Handle the case where no link is available for the given episode
            console.error(`No download link available for Episode ${episodeNumber}`);
        }
    };

    return (
        <>
        <div className='mainBut'>
            <h1 className='eptitle'>{foundMovie.title}</h1>
            {episodeNumbers.map((episodeNumber) => (
                <button className='button1' key={episodeNumber} onClick={() => handleDownload(episodeNumber)}>
                    Download Episode {episodeNumber}
                </button>
            ))}
        </div>
        <style
        dangerouslySetInnerHTML={{
          __html: "\n  body{\n    display:flex;\n   justify-content: center;\n  align-items: center;\n  }\n  "
        }}
      />
      </>
    );
};

export default Episodes;
