import React from 'react';
import ContactCard from './ContactCard';

function App() {
  return (
  <div className="px-2 py-10">
    <div className="flex -mx-2">
      <ContactCard 
        name="User 001"
        imgUrl="https://images.unsplash.com/photo-1547038577-da80abbc4f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        phone="0401 0404 0404"
        email="user001@demo.com"
      />

      <ContactCard 
        name="User 002"
        imgUrl="https://images.unsplash.com/photo-1560402974-0748b8635ac7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        phone="0402 0404 0404"
        email="user002@demo.com"
      />

     <ContactCard 
        name="User 003"
        imgUrl="https://images.unsplash.com/photo-1512749491228-caef5a7831d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        phone="0403 0404 0404"
        email="user003@demo.com"
      />

    </div>
  </div>
  );
}

export default App;
