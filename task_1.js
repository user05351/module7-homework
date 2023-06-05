
const gum = {
    color: "white",
    weight: 13
};

function keyValueOutput(obj){
    obj = Object.create(gum);
    obj.ownName = "Wrigley's Spearmint";
    obj.ownFeature = 'sugar-free';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        };  
    };
};

console.log(keyValueOutput);
