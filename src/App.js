import React from 'react';
import './App.css';
import TopBar from './components/TopBar/topBar.jsx'
import PostList from './components/PostList/postList.jsx'
import Communities from './components/Communities/communities.jsx'

const App = () => {
  return (
  <div className='App'>
    <TopBar />
    <div className='container'>
      <PostList />
      <Communities />
    </div>
  </div>
  );
};

export default App;
