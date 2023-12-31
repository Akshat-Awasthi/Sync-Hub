import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Header from './pages/Header';
import EditorForm from './pages/EditorForm';
import EditorPage from './pages/EditorPage';
import "./style/header.scss"
import "./style/App.scss"
import "./style/editorform.scss"
import "./style/editorpage.scss"
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <Toaster 
        position="top-right"
        toastOptions={{
          success:{
            theme:{
              primary:'#5e17eb',
            },
         },
       }}
        ></Toaster>
    
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<EditorForm/>} />
          <Route path='/editor/*' element={<EditorPage />} />
        </Routes>
        
      </BrowserRouter>
    </div>
   
  );
}

export default App;
