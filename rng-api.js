'use strict';
console.log('Loading function');

exports.handler =  (event, context, callback) => {
	    let min = 0;
	    let max = 10;
	    
	    var response = {
		            "statusCode": 200,
		            "headers": {
				                "my_header": "my_value"
				            },
		            "body": JSON.stringify(Math.floor(Math.random() * max) + min),
		            "isBase64Encoded": false
		        };
	    
	    
	    callback(null, response);
};

