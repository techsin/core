var a=Object.defineProperty;var m=t=>a(t,"__esModule",{value:!0});var o=(t,e)=>{m(t);for(var p in e)a(t,p,{get:e[p],enumerable:!0})};o(exports,{default:()=>r,type:()=>y});var c=[{match:/\b(TODO|FIXME|DEBUG|OPTIMIZE|WARNING|XXX|BUG)\b/g,type:"err"},{match:/\bIDEA\b/g,type:"class"},{match:/\b(CHANGED|FIX|CHANGE)\b/g,type:"insert"},{match:/\bQUESTION\b/g,type:"oper"}];var r=[{match:/@\w+/g,type:"kwd"},{match:/{[\w\s|<>,.@\[\]]+}/g,type:"class"},{match:/\[[\w\s="']+\]/g,type:"var"},...c],y="cmnt";0&&(module.exports={type});