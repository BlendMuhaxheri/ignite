import axios from 'axios';
import { getGameDetailsURL, gameScreenshotURL } from '../api'

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL"
    })
    const detailData = await axios.get(getGameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotURL(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data,

        },


    });
};

