class ExpressError extends Error {
    constructor(message, status){
        super();
        this.message = message;
        this.status;
        console.error(this.stack);
    }
}

module.exports = ExpressError