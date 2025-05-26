const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
// email = ..@..com
// pass =
// country = "IN", "US"
const schema2 = zod.object({
    username : zod.string().min(3),
    email: zod.string().email(),
    age: zod.number().gte(18).optional(),
});

app.use(express.json());

app.post("/health-check", function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.send({
            msg : "invalid input"
        })
    }else{
        res.send({
            response
        })    
    }
    
});

app.post("/input-check", function(req, res){
    const object = req.body;
    const response = schema2.safeParse(object);
    if(!response.success){
        res.send({
            msg: "Invalid Input"
        })
    }else{
        res.send({
            response
        })
    }
});

app.listen(3000);