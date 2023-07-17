import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyB-AFV3WId8M9AC9x4IbZaTFbpESSQgqdQ",
    cx: "8018edd035e4341d9",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
