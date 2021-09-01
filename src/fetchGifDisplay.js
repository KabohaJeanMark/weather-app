const getGif = async (weather) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=7FddFo9ujYHVGiLO4CG3l5wlUF5NUM29&s=${weather} weather`, { mode: 'cors' });

  if (response.status !== 200) {
    throw new Error('Cannot fetch the data');
  }
  const gifData = await response.json();
  return gifData;
};

export default getGif;