import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const [currentItemId, setCurrentItemId] = useState(null);

  const handleSave = () => {
    setCurrentItemId(null);
  };

  const handleEdit = (id) => {
    setCurrentItemId(id);
  };
 return (
   <div className="App">
     <header className="App-header">
       <h1>CRUD con React</h1>
       <div className="header-left">
         <h1 class="font-montserrat font-bold text-[34px] leading-10">Furniro</h1>
       </div>
       <div className="header-center">
         <nav>
           <a href="#opcion1">Home</a>
           <a href="#opcion2">Shop</a>
           <a href="#opcion3">About</a>
           <a href="#opcion4">Contact</a>
         </nav>
       </div>
       <div className="header-right">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden lg:block"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden lg:block"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden lg:block"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden md:block"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
       </div>
     </header>
     <main>
       <ItemForm itemId={currentItemId} onSave={handleSave} />
       <ItemList onEdit={handleEdit} />
       <div className="main-div1">
         <div className="main-div2">
           <div className="main-div3">
             <span class="text-base font-semibold text-[#333] tracking-[3px]">New Arrival
             </span>
             <p>Este es el contenido del tercer div.</p>
           </div>
         </div>
       </div>
     </main>
   </div>
 );
}

export default App;