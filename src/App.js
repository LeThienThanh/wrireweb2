import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

import { Account, Overview, Admin, Author,Editor,Settting,Story } from './containers/admin/';
import { Author_au, Overview_au, Settting_au, Story_au } from './containers/author';
import { Route, Routes } from 'react-router-dom';

import DetailStory_au from './containers/author/story/detailStory'
import Write  from './containers/author/story/write';

import path from './ultis/path';

function App() {
  return (
    <>
      <div className="App">
        <Routes >
          {/* <Route path = {path.PUBLIC} element={<Admin/>}>
            <Route path = {path.OVERVIEW} element={<Overview/>}/>
            <Route path = {path.AUTHOR} element={<Author/>}/>
            <Route path = {path.EDITOR} element={<Editor/>}/>
            <Route path = {path.STORY} element={<Story/>}/>
            <Route path = {path.ACCOUNT} element={<Account/>}/>
            <Route path = {path.SETTING} element={<Settting/>}/>

            <Route path = {path.START} element={<Overview/>}/>
          </Route> */}

          <Route path = {path.PUBLIC} element={<Author_au/>}>
            <Route path = {path.OVERVIEW} element={<Overview_au/>}/>
            <Route path = {path.AUTHOR} element={<Author_au/>}/>
            <Route path = {path.STORY} element={<Story_au/>}/>
            <Route path = {path.SETTING} element={<Settting_au/>}/>
            <Route path = {'/story/detail'} element={<DetailStory_au/>}/>
            <Route path = {'/story/write'} element={<Write/>}/>
            <Route path = {path.START} element={<Overview/>}/>
          </Route>
        </Routes>
      </div>
  </>
  );
}

export default App;
