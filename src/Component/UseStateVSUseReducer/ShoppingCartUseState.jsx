import React,{useState} from 'react'

const ShoppingCartUseState = () => {
    
    const [cart,setCart] = useState([]);

    const [totalPrice,setTotalPrice] = useState(0);
    
    const [product,setProduct] = useState({
        name:'',
        price : 0,
        quantity : 0
    });

    const handleInputChange = (e) => 
        {
            
            const {name,value} = e.target;
            setProduct(p =>({
                ...p,[name]:value
            }))        
        }

    const addItem = () =>
        {
            if (!product.name || !product.price || !product.quantity) {
                alert('Please fill out all fields');
                return;
            }

            if(product.price <=0 || product.quantity<=0)
            {
                alert("enter proper price/quantity");
                return;
            }

            const newItem = 
            {
                id : cart.length + 1,
                name:product.name,
                price : product.price,
                quantity : product.quantity
            }

            const updatedCart = [...cart,newItem]
            
            setCart(updatedCart);


            setTotalPrice(updatedCart.reduce( (total,itemList) => 
                            total + itemList.price * itemList.quantity , 0))

            setProduct({name:'',price:0,quantity:0})
        }

  return (
    <>
    <div>
        <h2>Add a Product</h2>
        Product Name : <input type="text" value={product.name} name="name"
                        onChange={handleInputChange} placeholder='Enter product name'/>
        <br/>
        <br/>
        Product Price : <input type="text" value={product.price} name="price"
                        onChange={handleInputChange} placeholder='Enter product price'/>
        <br/>
        <br/>
        Product Quantity : <input type="text" value={product.quantity} name="quantity"
                        onChange={handleInputChange} placeholder='Enter product quantity'/>
        <br/>
        <br/>
        <button onClick={addItem}>Add to Cart</button>
    </div>
    <ul>
    {cart.length>0
         ? 
         cart.map(items => (
                        <>
                            <li key={items.id}>
                                {items.name} - {items.price} ${items.quantity}
                            </li>
                            <button></button>
                        </>
                    )) 
         : ""}
    </ul>

    </>
  )
}

export default ShoppingCartUseState