async function fetchData(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
  }
  function formatTime(seconds) {
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const remainingMinutes = Math.floor((seconds % 3600) / 60);
      return `${hours} ${hours === 1 ? "hour" : "hours"} ${remainingMinutes} ${
        remainingMinutes === 1 ? "minute" : "minutes"
      } ago`;
    }
  }
  
  function sortViews(data, options) {
    const sortedData = data.sort((a, b) => {
      const aViews = parseInt(a.others.views);
      const bViews = parseInt(b.others.views);
      if (options) {
        console.log(options);
        return bViews - aViews;
      } else {
        console.log(options);
        return aViews - bViews;
      }
    });
    return sortedData;
  }