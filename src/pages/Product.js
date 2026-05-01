import React from 'react';
import { useState } from 'react';
import Page from '../componets/Page';
import Section from '../componets/Section';
import Bloglist from '../componets/Bloglist';

const Product = () => {

    const [cart, setCart] = useState([]);

    // Products based on Brevia's core pillars
    const products = [
        { id: 1, name: "Brevia Designer Cologne", price: 120, description: "Precision chemistry luxury blend" },
        { id: 2, name: "Pure Essential Oil", price: 25, description: "100% natural aromatic extract" },
        { id: 3, name: "Artisanal Scent Mist", price: 45, description: "Emotional resonance series" }
    ];

    const addToCart = (product) => {
        setCart((prev) => {
          // Check if the item already exists in the cart
          const existing = prev.find((item) => item.id === product.id);
      
          if (existing) {
            // If it exists, copy the item and just update the quantity
            return prev.map((item) =>
              item.id === product.id 
                ? { ...item, qty: item.qty + 1 } 
                : item
            );
          }
      
          // If it's new, "copy" the whole product object AND add the qty property
          return [...prev, { ...product, qty: 1 }];
        });
      };
      
      
    
      const updateQty = (id, delta) => {
        setCart(prev => prev.map(item => 
          item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
      };
    
      const removeItem = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
      };
      
      const sendWhatsAppOrder = () => {
        const phoneNumber = "256756150066"; // Replace with Brevia's WhatsApp number
        
        // Format the item list
        const itemList = cart.map(item => 
          `• ${item.name} (x${item.qty}) - $${(item.price * item.qty).toFixed(2)}`
        ).join('%0A'); // %0A is a "new line" in a URL
      
        const message = `Hello Brevia! I'd like to place an order:%0A%0A${itemList}%0A%0A*Total: $${total.toFixed(2)}*`;
      
        // Open the WhatsApp link
        window.open(`https://wa.me${phoneNumber}?text=${message}`, '_blank');
      };
      

      const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

      const toggleModal = () => {
        const modal = document.querySelector(".modal-overlay");
      
        if (modal) {
          modal.style.display =
            modal.style.display === "flex" ? "none" : "flex";
        }
      };

    return (
        <>
            <Page title={'Our Products'} info={'Check out th best fragrances and Best male fashion'} >
                <div className="btn-group">
                    <button className="btn-outline">Perfumes</button>
                    <button className="btn-outline">Men Clothings</button>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <Section title={'Perfumes'} info={'All perfumes in stock'} >
                                <Bloglist products={products}  myFunc={addToCart}/>
                        </Section>
                    </div>
                    <div className="col-lg-4">
                        
                    </div>
                </div>
            </Page>
            <div className="modal-overlay">
              <div className="modal">
                <div className="btn-group-rt">
                  <button className='btn-outline' onClick={toggleModal}><i className="fa fa-close"></i></button>
                </div>
                <div className="modal-content text-center">
                        <Section info={'Items on your Cart'} >
                          {cart.length === 0 ? (
                              <p>Your cart is currently empty.</p>
                              ) : (
                              <>
                                  {cart.map((item) => (
                                  <div key={item.id}>
                                      <p><b>{item.name}</b> - ${item.price} x <span className="text-primary">{item.qty}</span></p>
                                      <div className="btn group-lt">
                                          <button onClick={() => updateQty(item.id, 1)} className="btn-outline"><i className="fa fa-plus"></i></button>
                                          <button onClick={() => removeItem(item.id)} className="btn-outline"><i className="fa fa-trash"></i> remove</button>
                                          <button onClick={() => updateQty(item.id, -1)} className="btn-outline"><i className="fa fa-minus"></i></button>
                                      </div>
                                  </div>
                                  ))}
                                  <div>
                                      <p><b>Total: ${total.toFixed(2)}</b></p>
                                      <div className="btn-group">
                                          <button onClick={sendWhatsAppOrder} className='btn-outline'>Checkout</button>
                                      </div>
                                  </div>
                              </>
                          )}
  
                        </Section>
                </div>
              </div>
            </div>
        </>
    );
}

export default Product;
