// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (name) => { return name;};
const createNotEnumerableProperty = (name) => { return Symbol(`${name}`);};
const createProtoMagicObject = () => { 
    function Magic (someMagic){
        this.someMagic = someMagic;
}
Magic.prototype = Magic.__proto__;
return Magic;
};


var currentSum = 0;
const incrementor = () => {
 
  currentSum++;
  
  function f () {
    currentSum++;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
};


const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;