var c=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var o=Object.prototype.hasOwnProperty;var s=(e,t)=>{for(var m in t)c(e,m,{get:t[m],enumerable:!0})},r=(e,t,m,p)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of h(t))!o.call(e,a)&&a!==m&&c(e,a,{get:()=>t[a],enumerable:!(p=g(t,a))||p.enumerable});return e};var y=e=>r(c({},"__esModule",{value:!0}),e);var f={};s(f,{default:()=>d});module.exports=y(f);var d=[{match:/(^[ \f\t\v]*)[#;].*/gm,sub:"todo"},{type:"str",match:/.*/g},{type:"var",match:/.*(?==)/g},{type:"section",match:/^\s*\[.+\]\s*$/gm},{type:"oper",match:/=/g}];0&&(module.exports={});
