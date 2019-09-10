import React from 'react';

function Header() {
  return (
<header>
  <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
    <a href="\" className="font-semibold lg:text-3xl tracking-wide text-green-lighter hover:text-white no-underline">
        R E A C T:.
      </a>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div>
    </div>
  </nav>
 </header>
  );
}

export default Header;
