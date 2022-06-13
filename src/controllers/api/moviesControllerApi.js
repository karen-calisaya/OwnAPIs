const db = require('../../database/models');
const {validationResult} = require('express-validator')
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
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Movie.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            })
            .then(movie => {
                let response = {
                    meta: {
                        status: 201, /* recurso creado exitosamente */
                        endpoint: '/api/movies/' + movie.id
                    },
                    data: movie,
                }
                res.status(201) /* si el recurso es 201 pongo un alert y asi... */
                .json(response)
            })
            .catch(error => {
                res.status(400).json({
                    error: error
                })
            })

        }else {
            let requestErrorsResponse = {
                meta: {
                    status: 400,
                    errorMessage: "Datos enviados inválidos"
                },
                errors: [errors.mapped()]
            }
            res.status(400).json(requestErrorsResponse)
        }
        

        /* db.Movie.create(req.body)
        .then((movie) => {
            let response = ´{
                meta: {
                    status: 200,
                },
                data: movie
            }
            res.json(response)
        })
        .catch((error) => {
            let response = {
                meta: {
                    status: 400,
                }
                error : erros
            }
            res.json(response)
        }) */
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

/* lo distinto aca es la gestion de los errores
hicimos una validacion si esta validacion falla, tiene que pasar por la validacion de 
sequelize, si no va por el catch */