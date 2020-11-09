import UserIndex from './index/index';

const userIndex = UserIndex();

function user() {

    function index() {

        return userIndex;
    }

    function show() {

    }

    function store() {

    }

    function update() {

    }

    function destroy() {

    }

    function findOne() {

    }

    function findById() {

    }

    return {
        show,
        index,
        store,
        update,
        destroy,
        findOne,
        findById
    }

}

export default user;
