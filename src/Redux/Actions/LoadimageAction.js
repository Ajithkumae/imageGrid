import Request from "../../Request"

export const LOADCAROUSEL = "LOADCAROUSEL"
export const LOADGRID = "LOADGRID"


export const loadcarousel = (carouselimg) => ({
    type: LOADCAROUSEL,
    payload: carouselimg,
});

export const loadgrid = (gridimg) => ({
    type: LOADGRID,
    payload: gridimg,
});

export const carosuselData = () => async (dispatch) => {
    try {
        fetch("http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true", {
            method: 'GET',
        })
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    res
                        .json()
                        .then((data) => {
                            console.log('DealsDetail Data: ', data);
                            dispatch(loadcarousel(data))
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log(res.status);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
        return error
    }
};

export const gridData = () => async (dispatch) => {
    try {
        fetch("http://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true", {
            method: 'GET',
        })
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    res
                        .json()
                        .then((data) => {
                            console.log('DealsDetail Data: ', data);
                            dispatch(loadgrid(data))
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log(res.status);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
        return error
    }
};