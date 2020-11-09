import showUserFactory from './user-service.show.factory';
import showUserModel from './user-service.show.model';

const showUser = showUserFactory();

async function showUser(guid) {

    await showUserModel.findByGuid(guid);

    return {
        showUser
    }

}

export default showUser;