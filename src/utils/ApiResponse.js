class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusDode = statusCode;
        this.data = data;
        this.message = message;
        this.succeess = statusCode < 400
    }
}

export { ApiResponse }