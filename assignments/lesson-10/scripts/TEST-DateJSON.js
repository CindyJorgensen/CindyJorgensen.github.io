var date = '{"dt_txt":"2019-03-16 18:00:00"}'

var obj = JSON.parse(date, function(key, value) {
    if (key == 'dt_txt') {
        return new Date(value); }
    else {
        return value;   } 
    } );

console.log(obj.dt_txt);