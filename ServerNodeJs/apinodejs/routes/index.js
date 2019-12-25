var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'product',
  password: 'sonnpt',
  port: 5432,
})

/* GET home page. */
router.get('/', function (req, res, next) {

});
//api get data from postgre
router.get('/getData', function (req, res, next) {
  // // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  pool.query('SELECT * FROM public.product_info', (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log(response.rows);
      res.send(response.rows);
    }

    // pool.end()
  });

});

router.get('/add', function (req, res, next) {
    res.render('add',{});
});

router.post('/add', function (req, res, next) {
  var product_name =  req.body.product_name;
  var product_price =  req.body.product_price;
  res.send('Nhan dc du lieu roi'+product_name + product_price);
  pool.query("Insert into product_info (product_name, product_price) values ($1, $2)",[product_name, product_price], (error, response)=> {
    if (error) {
      console.log(error);
    } else {
      console.log(response.rows);
      res.send(response.rows);
    }

    // pool.end()
  });
  // pool.end()
});


module.exports = router;
