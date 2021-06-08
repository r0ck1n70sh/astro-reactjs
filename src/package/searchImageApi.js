import axios from 'axios'

const getDataUsingQueryString = async (queryString, page) => {
    let resultData = [];

    const url = `https://images-api.nasa.gov/search?q=${queryString}&page=${page}&media_type=image`;

    resultData = await axios.get(url)
    .then(res => {
        return res['data']['collection']['items'];
    })
    .then(res => {
        let images = res.map(element => {
            let image = [
                element.data[0].title,
                element.links[0].href,
                element.links[0].date_created
            ];
            return image;
        });
        return images;
    })
    .then(res => {
        return res;
    })
    .catch(error => {
        console.log(error);
    })

    return resultData;
}

export default getDataUsingQueryString;