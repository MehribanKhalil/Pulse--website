import { createContext, useState } from "react";
import UseLocal from "../hooks/UseLocal";
import toast from "react-hot-toast";


export const BasketContext = createContext()


export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = UseLocal("basket")

    const AddBasket = (menu) => {
        const index = basket.findIndex((item) => item._id === menu._id)
        if (index === -1) {
            setBasket([...basket, { ...menu, count: 1 }])
            toast.success('Added to Basket !')

        } else {
            basket[index].count++
            setBasket([...basket])
            toast.success('Increase Count !')

        }

    }


    const incCount = (menu) => {
        const index = basket.findIndex((item) => item._id === menu._id)
        if (index !== -1) {
            basket[index].count++
            setBasket([...basket])
            toast.success('Increase Count !')

            return
        }

    }

    const decCount = (menu) => {
        const index = basket.findIndex((item) => item._id === menu._id)
        if (index !== -1) {
            if (basket[index].count === 1) {
                removeBasket(menu._id)
                return
            } else {
                basket[index].count--
                setBasket([...basket])
                toast.success('Decrease Count !')

            }
        }

    }


    const removeBasket = (id) => {
        setBasket(basket.filter(item => item._id !== id))
    }




    return (
        <BasketContext.Provider value={{ basket, AddBasket, removeBasket ,incCount ,decCount}}>
            {children}
        </BasketContext.Provider>
    )
}