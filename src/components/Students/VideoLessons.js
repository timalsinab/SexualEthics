import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const VideoLessons = () => {
  const [score, setScore] = useState(0);
  const [watchedVideos, setWatchedVideos] = useState(new Set()); // Track watched videos
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const videos = [
    { id: 1, title: "Respecting Personal Boundaries", url: "https://www.youtube.com/embed/aSFvJbSQdA4" },
    { id: 2, title: "Understanding Consent", url: "https://www.youtube.com/embed/h3nhM9UlJjc" },
    { id: 3, title: "How to Be a Good Friend", url: "https://www.youtube.com/embed/ReMq3KX8F94" },
  ];

  const handleMarkAsWatched = (id) => {
    setScore(score + 10);
    setWatchedVideos((prev) => new Set([...prev, id]));
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false); // Remove confetti after 2 seconds

      // Redirect to Thank You page if all videos are watched
      if (watchedVideos.size + 1 === videos.length) {
        navigate('/students/thank-you'); // Redirect to Thank You page
      }
    }, 2000);
  };

  const progressPercentage = Math.round((watchedVideos.size / videos.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      {/* Confetti */}
      {showConfetti && <Confetti />}

      <div className="mt-16 px-6">
        {/* Score and Progress */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Video Lessons</h2>
          <div className="flex items-center space-x-4">
            <div className="text-lg font-semibold text-gray-800">Score: {score}</div>
            <div className="w-36 bg-gray-200 h-4 rounded-full overflow-hidden relative">
              <div
                className="bg-green-500 h-4 rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <p className="mb-4 text-gray-700">
          We're excited to have you here! Explore our videos to learn about respect, consent, and body autonomy.
        </p>
        <p className="mb-6 text-gray-700">
          Watch the videos below and mark them as watched to progress to the next lesson.
        </p>
      </div>

      {/* Video Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white shadow-md rounded-md p-4">
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="mt-4 text-xl font-semibold">{video.title}</h3>
            <button
              onClick={() => handleMarkAsWatched(video.id)}
              disabled={watchedVideos.has(video.id)} // Disable if already watched
              className={`mt-2 px-4 py-2 ${
                watchedVideos.has(video.id) ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
              } text-white rounded`}
            >
              {watchedVideos.has(video.id) ? 'Watched' : 'Mark as Watched'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLessons;
