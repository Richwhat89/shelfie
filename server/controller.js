module.exports = {
    create:(req,res)=>{
        const dbInstance=req.app.get('db');
        const{name, price, image_url}=req.body;

        dbInstance.create_product([name, price, image_url])
            .then(()=>res.sendStatus(200))
            .catch(err=>{res.status(500).send({errorMessage: 'Error'});
            console.log(err);
         });
    },

    getOne:(req,res)=>{
        const dbInstance=req.app.get('db');
        const{params}=req;

        dbInstance.read_product(params.id)
            .then(product=>res.status(200).send(product))
            .catch(err=>{res.status(500).send({errorMessage: 'Error'});
        });
    },

    getAll:(req,res)=>{
        const dbInstance=req.app.get('db');

        dbInstance.read_products()
            .then(products=>res.status(200).send(products))
            .catch(err=>{res.status(500).send({errorMessage: 'Error'});
        });
    },

    update:(req,res)=>{
        const dbInstance=req.app.get('db');
        const {params, query}=req;

        dbInstance.update_product([params.id, query.desc])
            .then(()=>res.sendStatus(200))
            .catch(err=>{res.status(500).send({errorMessage: 'Error'});        
        });
    },

    delete_product:(req,res)=>{
        const dbInstance=req.app.get('db');
        const {params}=req;

        dbInstance.delte_product(params.id)
        .then(()=>res.sendStatus(200))
        .catch(err=>{res.status(500).send({errorMessage: 'Error'});
        });
    }
};