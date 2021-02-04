import Vue from "vue"
import VueRputer from "vue-router"
const Home=()=>import("../views/home/Home")
const Category=()=>import("../views/category/Category")
const Pridile=()=>import("../views/pridile/Pridile")
const SgoppingCart=()=>import("../views/sgoppingCart/SgoppingCart")

Vue.use(VueRputer)

const routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
      path:"/home" ,
      component:Home
    },
    {
        path:"/category" ,
        component:Category
    },
    {
        path:"/pridile" ,
        component:Pridile
    },
    {
        path:"/sgoppingCart" ,
        component:SgoppingCart
    },

]
const router=new VueRputer({
    routes,
    mode:"history"
})
export  default  router