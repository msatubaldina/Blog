import {Routes, Route} from 'react-router-dom';
import './App.css';

import {Home, CreatePost, PostDetail, Posts, Profile} from './pages';
import { Header } from './components';
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/post-detail/:postId' element={<PostDetail/>}/>
        <Route path='/profile/:userId' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
