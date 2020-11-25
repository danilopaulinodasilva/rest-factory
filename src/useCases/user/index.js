import userReadFactory from './read/userReadFactory.js';

function user() {

    function create() {
        
    }

    async function read() {
        const factory = userReadFactory();
        return await factory.read();
        
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
