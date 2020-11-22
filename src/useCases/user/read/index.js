import userReadFactory from './userReadFactory';
import userReadModel from './userReadModel';

function readUser(body) {

    function read() {

        const factory = userReadFactory();

        if(factory.empty(body))
            throw new Error("fudeu");
    
        if(!factory.regex(body))
            throw new Error("fudeu")
    
        userReadModel.read(body)

            .then((data) => {
                return {"response":"ok"};

            })

            .catch((err) => {
                return err;

            })

    }

    return {
        read
    }

}

export default readUser;
