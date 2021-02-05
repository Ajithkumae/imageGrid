async function loadGradImage() {
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
                            return res.json()
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


}

async function loadCarouselImage() {
    const url = "http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true";
    const response = await fetch(url, {
        method: 'GET',
        header: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export default {

    loadCarouselImage,
    loadGradImage
}