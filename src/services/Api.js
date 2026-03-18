import axios from "axios"


export const electronics = async() =>  {

    let URL = "https://dummyjson.com/products/category/smartphones"
    let data = await axios.get(URL)
    let products = data.data.products
    console.log(products)
}

electronics();