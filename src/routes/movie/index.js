const express = require('express'),
      routes  = express.Router();

import MovieService from '../../services/movie/index'

function MovieRoute() {

    function post() {
        routes.post('/', MovieService.save)
    }

    return {
        post
    }

}

export default MovieRoute;
