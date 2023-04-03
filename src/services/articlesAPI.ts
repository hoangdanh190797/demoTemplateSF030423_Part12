import axiosAPI from './API';

const articlesAPI = {
    getArticles: () => {
        return axiosAPI.get('articles?limit=20&offset=0')
    }
}

export default articlesAPI;
