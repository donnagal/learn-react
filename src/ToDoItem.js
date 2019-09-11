import React from 'react';


function ToDoItem(props) {
  return (
  <div className="lg:w-1/2 mx-auto">
    <div className="md:flex md:items-center py-3">
      <div className="md:w-1/3"></div>
      <p className="md:w-2/3 block text-gray-500 font-bold">
        <input className="mr-2 leading-tight" type="checkbox" />
        <span className="text-lg">
        {props.item.text}
        </span>
      </p>
    </div>
  </div>
  );
}

export default ToDoItem;
