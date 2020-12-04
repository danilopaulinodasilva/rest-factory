/* 

Cria as instancias, ou seja, executa as funções apenas.

*/

import userReadRepository from '../repositories/userReadRepository.js';
import userReadService from '../services/userReadService.js';

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
