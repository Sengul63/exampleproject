class UnsplashApi{
    constructor(){
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID VnNX62hp9aIocvaR_IH8PmNkjMsTKIvOmOaapz_7C10';
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
            Headers: {
                Authorization: this.clientID
            },
            params: {
                query: 'animal',
                count: 1
            }
        });
    }

    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
        console.log(resimResponse.data[0].urls.regular);
        //return sakaResponse.data.value;
        } catch (err) {
            console.log(err);
        }
    }
}