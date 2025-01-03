// script.js

const API_KEY = 'AIzaSyDkMrW39VTGotWz2D7xHYhQSsOMOkmvkS0'; // Replace this with your YouTube API key

// Function to fetch and display YouTube videos based on search query
function fetchVideos(query, elementId) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}&maxResults=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const videoId = data.items[0].id.videoId;
                const iframe = document.createElement('iframe');
                iframe.width = '560';
                iframe.height = '315';
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.frameBorder = '0';
                iframe.allowFullscreen = true;
                document.getElementById(elementId).appendChild(iframe);
            } else {
                console.log('No videos found for query:', query);
            }
        })
        .catch(error => console.error('Error fetching videos:', error));
}

// Fetch videos for each section
document.addEventListener('DOMContentLoaded', () => {
    fetchVideos('2025 technology advancements', 'video-technology');
    fetchVideos('2025 environmental changes', 'video-environment');
    fetchVideos('2025 space exploration', 'video-space');
    fetchVideos('2025 world events', 'video-culture');
});