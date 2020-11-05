module.exports = dependencies => async userModel => {

    const { persistUser } = dependencies

    if(!userModel.name || userModel.name.trim().length < 2) {
        throw new Error('Invalid user name')
    }

    await persistUser(userModel)

    return userModel

}
