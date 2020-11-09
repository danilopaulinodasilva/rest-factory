modue.exports = dependencies => async userModel => {

    const { persistUser } = dependencies

    //rule 1: in this sample, if the name is invalid, an error will be thrown
    if(!userModel.name || userModel.name.trim().length < 2) {
        throw new Error('Invalid username')
    }

    //rule 2: we need to check if this repository was called with the right argument
    await persistUser(userModel)

    //rule 3: we will check if the resultant model is the same, for exemple
    return userModel

}
