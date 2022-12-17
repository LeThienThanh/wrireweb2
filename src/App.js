import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

import { Account, Overview, Admin, Author,Editor,Settting,Story } from './containers/admin/';
import { Route, Routes } from 'react-router-dom';

import path from './ultis/path';

function App() {
  return (
    <>
      <div className="App">
        <Routes >
          <Route path = {path.ADMIN} element={<Admin/>}>
            <Route path = {path.OVERVIEW} element={<Overview/>}/>
            <Route path = {path.AUTHOR} element={<Author/>}/>
            <Route path = {path.EDITOR} element={<Editor/>}/>
            <Route path = {path.STORY} element={<Story/>}/>
            <Route path = {path.ACCOUNT} element={<Account/>}/>
            <Route path = {path.SETTING} element={<Settting/>}/>

            <Route path = {path.START} element={<Overview/>}/>
          </Route>
        </Routes>
      </div>
  </>
  );
}

export default App;
