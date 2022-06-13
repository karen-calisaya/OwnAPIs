const {check} = require('express-validator');
module.exports = [
    check('title')
        .notEmpty()
        .withMessage('el titulo es requerido').bail()
        .isString().withMessage('titulo no valido'),
    check('rating')
        .notEmpty()
        .withMessage('rating requerido').bail()
        .isDecimal().withMessage('debes usar solo numeros'),
    check('awards')
        .notEmpty()
        .withMessage('campo requerido').bail()
        .isNumeric().withMessage('solo numeros'),
    check('release_date')
        .notEmpty().withMessage('release_date requerido'),
    check('length').isNumeric().withMessage('solo numeros'),
    check('genre_id').isNumeric().withMessage('solo numeros')

]