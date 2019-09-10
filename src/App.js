import React from 'react';
import ContactCard from './ContactCard';

function App() {
  return (
<div className="px-2">
  <div className="flex -mx-2">
    <ContactCard />
    <ContactCard />
    <ContactCard />
  </div>
</div>
  );
}

export default App;
