var b=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var o=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var d=l=>b(l,"__esModule",{value:!0});var c=(l,r)=>{for(var m in r)b(l,m,{get:r[m],enumerable:!0})},g=(l,r,m,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of o(r))!x.call(l,a)&&(m||a!=="default")&&b(l,a,{get:()=>r[a],enumerable:!(t=n(r,a))||t.enumerable});return l};var u=(l=>(r,m)=>l&&l.get(r)||(m=g(d({}),r,1),l&&l.set(r,m),m))(typeof WeakMap!="undefined"?new WeakMap:0);var p={};c(p,{default:()=>y});var e={black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",gray:"\x1B[90m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"};var y={deleted:e.red,var:e.red,err:e.red,kwd:e.magenta,num:e.yellow,class:e.yellow,cmnt:e.gray,insert:e.green,str:e.green,bool:e.cyan,type:e.blue,oper:e.blue,section:e.magenta,func:e.blue};module.exports=u(p);0&&(module.exports={});