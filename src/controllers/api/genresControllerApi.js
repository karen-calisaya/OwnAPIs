const db = require('../../database/models');
const sequelize = db.sequelize;

const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
        .then((genres) => {
            let response = {
                meta: {
                    status: 200, /* data enviada con exito */
                    url: '/api/genres', /* url, uri, endpoint */
                    total: genres.length /* para que me traiga todos los genres */
                },
                data: genres /* los genres en si */
            }
            res.json(response) /* res.json recibe un objeto, pero lo planteamos antes como variable */
        })
        .catch((error) => {
            let response = {
                meta: {
                    status: 400, /* informacion no encontrada */
                    url: '/api/genres',
                },
                error: error
            }
            res.json(response)
        })
    },
    detail: (req, res) => {

    }
    
}

module.exports = genresController;