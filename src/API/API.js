
export default class API { 
    
    constructor( url ) {
        if (this.instance) {
            return this.instance;
        }
        this.instance = this;
        this._url = "http://demo.loc" + url;
    }
    
    get (search) {
        throw new Error("non-initialization method")
    }

    post (search, data) {
        throw new Error("non-initialization method")
    }

    put (search, data) {
        throw new Error("non-initialization method")
    }

    delete (search, data) {
        throw new Error("non-initialization method")
    }

    getToken() {
        return localStorage.getItem("auth-token");
    }
}