DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id int not null auto_increment,
  product_name VARCHAR(100) NULL,
  department_name varchar(100) null, 
  price int default 0,
  stock_quantity int default 0,
  PRIMARY KEY (item_id)
);
