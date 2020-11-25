/* 

Cria as instancias, ou seja, executa as funções apenas.

*/

import userReadService from './userReadService.js';

function UserReadFactory() {

    const service = userReadService();

    async function read() {
        return await service.read()

    }

    return {
        read
    }

}

export default UserReadFactory;
