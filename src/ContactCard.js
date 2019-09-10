import React from 'react';


function ContactCard(props) {
  return (
    <div className="w-1/3 px-2">
      <div className="bg-gray-200 p-5">
        <img src={props.imgUrl} />
        <h3>{props.name}</h3>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default ContactCard;
