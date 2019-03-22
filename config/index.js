const NODE_ENV = process.env.NODE_ENV || "dev"

const ENVS = {
    dev: {
        SECRET_KEY: "JEWFHBFH732473GFDFV64F",
        db: {
            url: "mongodb+srv://omorales:Basket-94@test-8i6z7.mongodb.net/test?retryWrites=true"
        }
    }
};

module.exports = ENVS[NODE_ENV]