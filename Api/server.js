var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Usuario = require('./app/models/usuario');
var mongoose = require('mongoose');
mongoose.connect('mongodb://root:123456@ds040017.mlab.com:40017/node-api', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8000;
var router = express.Router();

//var listRoute = router.route('/ListaUsers');
var CreatUsue = router.route('/CreateUsers');


router.use(function(req, res, next) {
    console.log('\t Requisição em andamento');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API Funcionando' });
});

CreatUsue.post(function(req, res) {
    var usuario = new Usuario();
    usuario.nome = req.body.nome;
    usuario.login = req.body.login;
    usuario.senha = req.body.senha;
    usuario.email = req.body.email;

    usuario.save(function(error) {
        if (error)
            res.send(error);

        res.json({ message: 'Usuário criado!' });
    });
})

router.route('/User')

.get(function(req, res) {

    Usuario.find(function(err, usuarios) {
        if (err)
            res.send(err);

        res.json(usuarios);
    });
});

// GET by Id, PUT, & DELETE

router.route('/User/:usuario_id')

.get(function(req, res) {

    Usuario.findById(req.params.usuario_id, function(error, usuario) {
        if (error)
            res.send(error);

        res.json(usuario);
    });
})

.put(function(req, res) {

    Usuario.findById(req.params.usuario_id, function(error, usuario) {
        if (error)
            res.send(error);

        usuario.nome = req.body.nome;
        usuario.login = req.body.login;
        usuario.senha = req.body.senha;
        usuario.email = req.body.email;
        usuario.save(function(error) {
            if (error)
                res.send(error);

            res.json({ message: 'Usuário Atualizado!' });
        });
    });
})

.delete(function(req, res) {

    Usuario.remove({
        _id: req.params.usuario_id
    }, function(error) {
        if (error)
            res.send(error);

        res.json({ message: 'Usuário excluído' });
    });
});


app.use('/api', router);

app.listen(port);
console.log('\t Rodando em http://localhost:' + port);