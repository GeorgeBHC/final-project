 export const exerciseOptions = {
        method: 'GET',
        hostname: 'exercisedb.p.rapidapi.com',
        port: null,
        path: '/status',
        headers: {
            'x-rapidapi-key': 'd2b107b0ebmsh760a445de385e50p1a8b63jsn781b335cac5d',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };
 
 export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
 }