'use strict';
console.log('Loading function');

exports.handler =  (event, context, callback) => {
	    let min = parseInt(event.min);
	    let max = parseInt(event.max);
	    
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

