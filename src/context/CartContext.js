import {createContext,useEffect,useState } from 'react'

export const CartContext = createContext()
export const CartProvider = (props) => {
    
    const [cart,setCart]=useState([]) 
    const [quantityCart,setQuantityCart]=useState(0)
    const [total,setTotal]=useState(0)

    const addToCart = (item,cantidad) => {
        let newCart=[...cart];
        if(newCart.some(e => e.id === item.id)){
            let foundIndex=newCart.findIndex(x => x.id == item.id);
            console.log(newCart)
            newCart[foundIndex].quantity += cantidad;
            setCart([...newCart])
        }else{
            setCart([...newCart,{"id":item.id, "nombre":item.nombre, "img":item.img, "moneda" : item.moneda, "precio": item.precio, "quantity": cantidad   }])
        }
    }
      
    const removeFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId)
        setCart(newCart)
    }
    
    useEffect(() =>{
        setQuantityCart(cart.reduce(( total, v ) =>total + v.quantity,0))
        setTotal(cart.reduce(( total, v ) =>total + v.precio*v.quantity,0))
    },[cart])

    const increase = (itemId) => {
        const newCart=cart
        newCart[newCart.findIndex(x => x.id === itemId)].quantity ++ //intentar con el ++ al final
        setCart([...newCart])
    }

    const decrease = (itemId) => {
        const newCart=cart
        if(newCart[newCart.findIndex(x => x.id === itemId)].quantity>1){
            --newCart[newCart.findIndex(x => x.id === itemId)].quantity
            setCart([...newCart])
        }else{
            removeFromCart(itemId)
        }
    } 

    
    return (
        <CartContext.Provider value={{addToCart:addToCart, cart:cart, removeFromCart:removeFromCart, quantityCart:quantityCart, total:total, decrease:decrease, increase:increase }}>
            {props.children}
        </CartContext.Provider>
    )
}

