import React from 'react';


function ContactCard(props) {
  return (
    <div className="w-1/3 px-2">
      <div className="bg-gray-200 p-5">
        <img src={props.contact.imgUrl} />
        <h3 className="text-3xl">{props.contact.name}</h3>
        <p>Phone: {props.contact.phone}</p>
        <p>Email: {props.contact.email}</p>
      </div>
    </div>
  );
}

export default ContactCard;
