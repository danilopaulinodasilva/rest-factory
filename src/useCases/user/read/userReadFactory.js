/* 

Cria as instancias, ou seja, executa as funções apenas.

*/

import userReadRepository from './userReadRepository.js';
import userReadService from './userReadService.js';

function UserReadFactory() {

    const repository = userReadRepository();
    const service = userReadService(repository);

    async function read() {
        return await service.read()

    }

    return {
        read
    }

}

export default UserReadFactory;
