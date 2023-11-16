const router = require ('express').Router();

router.route('/').get((req,res)=>{
    msg =`Hola ${req.query.name || "mundo"} de get request!`;
    res.json({msg});
});
//todo lo que se resiva despues del hello estara en la variable 
router.route('/:lang').get((req,res)=>{
    switch(req.params.lang){
        case "es":
            msg ="Hola mundo!!";
            break;
        case "en":
            msg ="Hello world!!";
            break;
        case "fr":
            msg ="Bonjour Monde!!";
            break;
        default:
            msg = "holaa";
    }
    res.json({msg});

})

//creamos el metodo post y accederemos desde el body 
router.route('/').post((req,res)=>{
    let result = req.body.a + req.body.b;
    res.json({result});
})

module.exports = router;
