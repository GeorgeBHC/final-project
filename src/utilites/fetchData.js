 export const exerciseOptions = {
 
     method: 'GET',
     headers: {
       'x-rapidapi-key': '703b69711dmshbbfed8b19c4290ap197d17jsnd3ede6fd641a',
       'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
     }
   };

 export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
 }