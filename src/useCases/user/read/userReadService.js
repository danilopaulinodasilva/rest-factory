/*

Aqui é onde será executado as funções do repositório, como um Controller. Não interessa e/ou não se sabe como o Repository irá tratar isso, aqui apenas há a execução dos metódos.

Aqui deve apenas "executar" os metódos.

*/

function UserReadService(repository) {

    async function read() {
        return await repository.find();

    }

    return {
        read
    }

}

export default UserReadService;
