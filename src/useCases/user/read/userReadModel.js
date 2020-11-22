// import sql, database?

function model() {

    function read() {

        return new Promise ((resolve,reject ) => {

            resolve({
                id: 123,
                name: "Danilo Silva",
                email: "danilosilva@gmail.com",
                timestamp: "2020-11-08 16:55:01"
            })

        })

    }

    return {
        read
    }

}

export default model;
