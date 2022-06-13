const db = require('../../database/models');
module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
        .then((movies) => {
            let response = {
                meta: {
                    status: 200,
                    total: movies.length,
                    url: '/api/movies'
                },
                data: movies
            }
            res.json(response)
        })
        .catch((error) => {
            let response = {
                meta: {
                    status: 400,
                    url: '/api/movies'
                },
                error: error
            }
            res.json(response)
        })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
            let response = {
                meta: {
                    status: 200,
                    url: '/api/detail/' + req.params.id,
                },
                data: movie
            }
            res.json(response)
        }) 
        .catch((error) => {
            let response = {
                meta: {
                    status: 400,
                    url: '/api/detail/' + req.params.id
                },
                error: error
            }
            res.json(response)
        })
    },
    create: (req, res) => {

    },
    edit: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    },
    destroy: (req, res) => {

    }
}