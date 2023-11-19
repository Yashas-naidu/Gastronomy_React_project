import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);
  const [apiKey, setApiKey] = useState('AIzaSyAiofwz3TzzJnwV9VfbnX5Ax-WV9m4txZ4');
  const [searchQuery, setSearchQuery] = useState('cooking-tutorial');
  const [numVideos, setNumVideos] = useState(5);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState(searchQuery); // Initialize searchTerm

  const handleSearch = () => {
    setSearchQuery(searchTerm); // Update searchQuery when the user submits the search
  };

  useEffect(() => {
    // Reset the error state when making a new request
    setError(null);

    // Fetch videos from YouTube based on the search query and selected number of videos
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=${numVideos}&q=${searchQuery}`
      )
      .then((response) => {
        if (response.data.items.length > 0) {
          const videosData = response.data.items.map((item) => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
          }));
          setVideos(videosData);
        } else {
          setError('No videos found. Quota may be exceeded.');
        }
      })
      .catch((error) => {
        setError('Error fetching videos. Quota may be exceeded.');
      });
  }, [apiKey, searchQuery, numVideos]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNumVideosChange = (event) => {
    setNumVideos(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Perform the search when the Enter key is pressed
    }
  };

  const opts = {
    height: '190',
    width: '320',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search for videos..."
          value={searchTerm}
          onChange={handleSearchChange}
          
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <label className="ml-2">Videos to Display:</label>
        <select
          value={numVideos}
          onChange={handleNumVideosChange}
          className="ml-2 p-2 border rounded-lg"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">Search</button>
      </div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div key={video.videoId} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <YouTube videoId={video.videoId} opts={opts} />
              <div className="p-4">
                <p className="text-xl font-semibold mb-2">{video.title}</p>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
