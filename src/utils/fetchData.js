export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '2d708afedamsh1fc9cedf9ce99f9p17fb00jsnbb13d6bc8787',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
     'x-rapidapi-key': '2d708afedamsh1fc9cedf9ce99f9p17fb00jsnbb13d6bc8787',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};