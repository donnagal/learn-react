import React from 'react';


function ContactCard() {
  return (
    <div className="w-1/3 px-2">
      <div className="bg-gray-400">
        <img src="https://images.unsplash.com/photo-1568004374826-9d8377cbb660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        <h3>Name</h3>
        <p>info</p>
      </div>
    </div>
  );
}

export default ContactCard;
