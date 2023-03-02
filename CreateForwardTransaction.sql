CREATE DATABASE yifan_test;
GO

USE yifan_test;
GO

CREATE SCHEMA ForwardTransaction;
GO

CREATE TABLE ForwardTransaction.Contract(id INT IDENTITY(1,1) NOT NULL PRIMARY KEY, buyName NVARCHAR(9), buyBirth NVARCHAR(10), buyAddress NVARCHAR(100), buyPhone NVARCHAR(11), buySubPhone NVARCHAR(11), sellerName NVARCHAR(9), sellerBirth NVARCHAR(10), sellerAddress NVARCHAR(100), sellerPhone NVARCHAR(11), sellerSubPhone NVARCHAR(11), item NVARCHAR(30), kind NVARCHAR(30), areaFlat INT, formalDay NVARCHAR(10), totalPrice INT, firstYn  BIT, firstPrice INT, firstEndCount INT, secondYn  BIT, secondPrice INT, secondEndCount INT, thirdYn BIT, thirdPrice INT, thirdEndCount INT, etc NVARCHAR(900), returnDate NVARCHAR(10));
GO

SELECT * FROM ForwardTransaction.Contract;
GO

-- Drop the database
DROP DATABASE yifan_test;
GO

-- show the databases
SELECT name FROM sys.databases;
GO