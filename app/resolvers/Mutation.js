const actions = require("../actions");
const { getUserId } = require("../utils");
const { storeUpload } = require("../utils");

const signup = async (_, args, context, info) => {
    const {createReadStream} = await args.data.profile_image;
    const stream = createReadStream();
    const {url} = await storeUpload(stream);
    args.data.profile_image = url;

    return actions
        .signup(args.data)
        .then(token => {
            return { message: "User created successfully, token:", token: token };
        })
        .catch(e => e);
};

module.exports = {
    signup,
}