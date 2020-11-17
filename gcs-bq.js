function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.geo_id = values[0];
obj.nonfamily_households = values[1];
obj.family_households = values[2];
var jsonString = JSON.stringify(obj);

return jsonString;
}
