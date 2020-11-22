import UserCreate from './create/index';
import UserRead from './read/index';
import UserUpdate from './update/index';
import UserDestroy from './destroy/index';

const UserCreate = UserCreate();
const UserRead = UserRead();
const UserUpdate = UserUpdate();
const UserDestroy = UserDestroy();

function user() {

    function create() {
        return UserCreate.create();
        
    }

    function read() {

    }

    function update() {

    }

    function destroy() {

    }

    return {
        create,
        read,
        update,
        destroy
    }

}

export default user;
