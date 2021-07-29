var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce",
});
var insert = "";
connection.connect(function (err) {
  if (err) throw err;
  connection.query(
    "SELECT * FROM product WHERE id_product",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});
