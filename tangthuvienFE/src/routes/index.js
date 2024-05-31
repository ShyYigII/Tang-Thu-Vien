import Home from "~/pages/Home"
import BookDetail from "~/pages/BookDetail"
import Category from "~/pages/Category"
import { HomeLayout } from "~/components/Layout"



const publicRoutes = [
    {path: '/' , component: Home , layout:HomeLayout},
    {path: '/theloai' , component: Category },
    {path: '/doc-truyen' , component: BookDetail },

]

const privateRoutes = []

export {publicRoutes, privateRoutes}