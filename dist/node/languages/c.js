var c=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var d=(e,t)=>{for(var s in t)c(e,s,{get:t[s],enumerable:!0})},g=(e,t,s,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of u(t))!m.call(e,a)&&a!==s&&c(e,a,{get:()=>t[a],enumerable:!(n=o(t,a))||n.enumerable});return e};var h=e=>g(c({},"__esModule",{value:!0}),e);var r={};d(r,{default:()=>i});module.exports=h(r);var i=[{match:/\/\/.*\n?|\/\*((?!\*\/)[^])*(\*\/)?/g,sub:"todo"},{expand:"str"},{expand:"num"},{type:"kwd",match:/#\s*include (<.*>|".*")/g,sub:[{type:"str",match:/(<|").*/g}]},{match:/asm\s*{[^}]*}/g,sub:[{type:"kwd",match:/^asm/g},{match:/[^{}]*(?=}$)/g,sub:"asm"}]},{type:"kwd",match:/\*|&|#[a-z]+\b|\b(asm|auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while)\b/g},{type:"oper",match:/[/*+:?&|%^~=!,<>.^-]+/g},{type:"func",match:/[a-zA-Z_][\w_]*(?=\s*\()/g},{type:"class",match:/\b[A-Z][\w_]*\b/g}];0&&(module.exports={});