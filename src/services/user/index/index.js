import factory from './userIndexFactory';
import model from './userIndexModel';

function index() {

    const user = factory();
    return user;    

}

export default index;
