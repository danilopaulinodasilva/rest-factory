/*

Aqui é a validação da entidade, ou seja, do objeto em si, apenas uma reprodução mais fiel de como deve ser no banco de dados.

Aqui deve apenas "validar" os dados.

*/

function User(nome,email,telefone,cpf) {

    function isValid() {
        // ????
    }

    function isEmpty() {
        if(value === "")
        return false
        return true
    }

    function regex() {
        if(!value.regex())
        return false
        return true
    }

    return {
        isValid,
        isEmpty,
        regex
    }

}

export default User;
