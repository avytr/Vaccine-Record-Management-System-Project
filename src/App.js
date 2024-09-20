import { Routes, Route } from 'react-router-dom';

import './App.css';
import Thumbnail from './Thumbnail/Thumbnail';
import Content from './Content/Content';
import Description from './Description/Description';
import Header from './Header/Header';
import Records from './Records/Records';
import Vaccines from './Vaccines/Vaccines';
import Locations from './Locations/Locations';

import Vaccine from './BinaryTreeSearch/Vaccine';
import Location from './BinaryTreeSearch/Location';
import Record from './BinaryTreeSearch/Record';



import { useEffect } from 'react';


var vaccines = [];
var locations = [];
var records = [];


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Thumbnail/>}/>
        <Route path='/records' element={<Records/>}></Route>
        <Route path='/vaccines' element={<Vaccines/>}></Route>
        <Route path='/locations' element={<Locations/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
