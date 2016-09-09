require("file?name=[name].[ext]!../statics/index.html");
require("file?name=[name].[ext]!../statics/app.css");
import "babel-polyfill";
import model from './model';

console.log(model.a + ":" + model.c);

let fn = () => { console.log("running fn"); }

fn();


function bar() {
    console.log("bar");
}

async function foo() {
    await bar();
    console.log("foo");
}

foo();



function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Martin {
  @readonly
  toString() { return 'Martin'; }
}

let me = new Martin();
me.toString = () => 'changed';
console.log(me.toString());
