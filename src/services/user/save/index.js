const factory = require('./user-service.save.factory');
const repository = require('../../../repositories/user');

const persistUser = async userModel => {
    return myUsersRepository.save(userModel)
}

const service = factory({ persistUser })

module.exports = service
