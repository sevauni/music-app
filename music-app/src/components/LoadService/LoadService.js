
class LoaderService {
    constructor(urlServer) {
        this.urlServer = urlServer;
    }



    getTrackList = async (addUrl) => {
        let res = await fetch(this.urlServer + addUrl);
        if (!res.ok) {
            throw new Error(`Couldn't get the list of tracks from ${this.urlServer + addUrl}`);
        }
        return await res.json();
    }
}


export default LoaderService;