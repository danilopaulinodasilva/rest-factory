/*

Aqui estão as importações e ações referentes ao banco de dados, muito similar ao Model.

Aqui deve apenas "persistir" os dados.

*/

function UserReadRepository() {

    function find() {

        return new Promise((resolve,reject) => {
            
            try {
                // sql
                // mongo
                resolve({"ok":true});

            } catch(err) {
                reject(err);

            }

        })

    }    

    return {
        find
    }

}


export default UserReadRepository;
