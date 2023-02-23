var uuid = require('node-uuid');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var uuid = require('node-uuid');
var async = require('async');

var config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', // update me
            password: 'zyf0706@.' // update me
        }
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
        database: 'SampleDB'
    }
}

var connection = new Connection(config);
connection.connect();

function exec(sql) {
    var timerName = "QueryTime";

    var request = new Request(sql, function(err) {
        if (err) {
            console.log(err);
        }
    });
    request.on('doneProc', function(rowCount, more, rows) {
        if(!more){
            console.timeEnd(timerName);
        }
    });
    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("Sum: " +  column.value);
        });
    });
        console.time(timerName);
    connection.execSql(request);
}
// Open connection and execute query
connection.on('connect', function(err) {
    async.waterfall([
        function(){
            exec('SELECT SUM(Price) FROM Table_with_5M_rows');
        },
    ]);
});

connection.on('end', function(err) {
        console.log('Connection ended');
    }
);
