const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    var response = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeaders: results.config.headers
    }

    console.log("RESPONSE HEADERS:", response.headers)
    console.log("REQUEST HEADERS: ", response.requestHeaders)

    return JSON.stringify(response);
}

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
