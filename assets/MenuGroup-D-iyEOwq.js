import{j as d}from"./jsx-runtime-QvZ8i92b.js";import{r as l}from"./index-uubelm5h.js";import{M as c}from"./Menu-D-1fI5dV.js";const p=({items:a=m,type:o="header"})=>{const[r,u]=l.useState(a),i=n=>{const e=r.map((t,s)=>s===n?{...t,underline:!0}:{...t,underline:!1});u(e)};return d.jsx("div",{className:o=="header"?"menu-group-header":"menu-group-button",children:r.map((n,e)=>l.createElement(c,{...n,onClick:()=>i(e),key:e}))})},m=[{label:"About",color:"white",underline:!0},{label:"Portofolio",color:"white",underline:!1},{label:"Service",color:"white",underline:!1},{label:"Contact",color:"white",underline:!1}];p.__docgenInfo={description:"",methods:[],displayName:"MenuGroup",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"MenuProps"}],raw:"MenuProps[]"},description:"",defaultValue:{value:`[
  {
    label: "About",
    color: "white",
    underline: true,
  }, {
    label: "Portofolio",
    color: "white",
    underline: false,
  }, {
    label: "Service",
    color: "white",
    underline: false,
  }, {
    label: "Contact",
    color: "white",
    underline: false,
  }
]`,computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"header" | "button"',elements:[{name:"literal",value:'"header"'},{name:"literal",value:'"button"'}]},description:"",defaultValue:{value:'"header"',computed:!1}}}};export{p as M};
