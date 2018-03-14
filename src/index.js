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

var asyncSum = 1;
const asyncIncrementor = () => {
  return new Promise(resolve => { resolve(asyncSum++) });
}

const createIncrementer = function* () {
    for (let i = 1; i < 11; i++) {
      yield i;
    }
  }

const returnBackInSecond = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  })
};

const getDeepPropertiesCount = (obj) => {
  return JSON.stringify(obj).match(/"\d{1,3}"/g).length + 1
};

const createSerializedObject = () => {return Object(1)};

const toBuffer = () => {};

const sortByProto = (arr) => { return arr.sort()};

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