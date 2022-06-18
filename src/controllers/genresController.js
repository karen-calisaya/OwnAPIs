const db = require('../database/models');
const sequelize = db.sequelize;
const fetch = require('node-fetch')



const genresController = {
    'list': (req, res) => {
        fetch('http://localhost:3001/api/genres') /* pedicion get, si no lo aclaramos es get por defecto */
        .then(res => res.json())
        .then(result => {
            res.render('genresList.ejs', {genres: result.data})
        })
        /* esto lo hacemos para consumir apis de terceros, no aplicaciones nuestras */
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;