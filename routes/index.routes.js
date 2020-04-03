const {Router} = require("express");
const connection = require("../database");
const router = Router();

router.get('/', (req,res) =>{
    res.send("Welcome my API");
});

//All costumers
router.get('/costumers', (req, res) =>{
    const sql = "SELECT * FROM costumer";
    connection.query(sql, (err, results) => {
        if (err) throw err;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('Not results');
        }
    });
});

//costumer by Id
router.get('/costumers/:id', (req, res) =>{
    const {id} = req.params;
    const sql = `SELECT * FROM costumer WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        if(result.length > 0){
            res.json(result);
        }else{
            res.send('Not result');
        }
    });
});

//New costumer
router.post('/add_costumer', (req, res) =>{
    const sql = "INSERT INTO costumer SET ?"
    costumerObject ={
        name: req.body.name,
        city: req.body.city
    }
    connection.query(sql, costumerObject, err => {
        if(err) throw err;
        res.send('Costumer Created');
    });
});

//Update costumer
router.put('/edit_costumer/:id', (req, res) =>{
    const {id} = req.params;
    const {name, city} = req.body;
    const sql = `UPDATE costumer SET name = '${name}', city = '${city}' WHERE id = ${id}`;
    connection.query(sql, err => {
        if(err) throw err;
        res.send('Costumer updated');
    });
});

//Delete costumer
router.delete('/delete_costumer/:id', (req, res) =>{
    const {id} = req.params;
    const sql = `DELETE FROM costumer WHERE id = ${id}`;
    connection.query(sql, err => {
        if(err) throw err;
        res.send('Costumer deleted');
    });
});

module.exports = router;