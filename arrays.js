const _ = require('underscore');

var arr = ['Alice', 'Bob', 'Clara', 'Daniel'];

_.each(arr, (name, index) => {
    console.log(index + ' : ' + name);
});
