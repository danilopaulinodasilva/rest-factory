// we will import the factory, to construct the service
const factory = require('./user-service.save.factory');

// we will import our real implementation of the repository
// that will persist in a real database
const myUsersRepository = require('../../../repositories/user');

// build the service o/
const persistUser = async userModel => {
    return myUsersRepository.save(userModel)
}

const service = factory({ persistUser })

// export the service
module.exports = service
