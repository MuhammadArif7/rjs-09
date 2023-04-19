import logo from './logo.svg';
import './App.css';
import { AboutPage } from './AboutPage.js';
import Profile from './UserData';
import { ConditionalRendering } from './ConditionalRendering';
import ShoppingList from './ShoppingList';
import { useState } from 'react';
import MyButtonCustom from './MyButtonCustom';

function MyButton() 
{
  const [count, setCount] = useState(0);
  function handleClick() 
  {
    setCount(count + 1);
    //alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>Clicked: {count}</button>
  );
}

function MyHeader(){
  return (
    <div className='Header'>
      <div className='TitleLine'><img className='logo' src={logo} /> DTS
      
      </div>
      <ul className='Nav'>
        <li><a href=''>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>Contact</a></li>
        <li><MyButton/></li>
        <li><MyButton/></li>
      </ul>
    </div>
  )
}

function Content() {
  return (
    <div className='Content'>
      <h2>Welcome to my site</h2>
      <p>Cupidatat magna adipisicing aute officia. Consectetur sit tempor laborum non culpa. Magna tempor aute esse non tempor officia. Occaecat eu ut ut incididunt sunt exercitation tempor magna laboris eu esse exercitation non. Occaecat laboris anim dolore ex. Enim irure aliqua reprehenderit aute esse dolor incididunt deserunt qui laborum veniam minim duis nulla.</p>
      <AboutPage />
      <br/><hr/><br/>
      <Profile/>
      <br/><hr/><br/>
      <ShoppingList/>
    </div>
  )
}

function Sidebar() {
  return (
    <div className='Sidebar'>
      <h2>Recent Events</h2>
      <p>Labore incididunt consectetur occaecat consequat fugiat. Eiusmod ut do duis ut esse excepteur cupidatat culpa voluptate duis. Excepteur sit proident enim id occaecat laborum voluptate enim anim reprehenderit do esse. Occaecat excepteur nostrud ullamco ex sint nisi dolor ad.</p>
    <br /><hr /><br/>
    <ConditionalRendering/>
    <br /><hr /><br/>
    <MyButtonCustom/>
    </div>
  )
}

function Footer() {
  return (
    <footer>&copy; 2023 </footer>
  )
}

function App() {
  
  return (
    <div className="Container">
      <MyHeader />
      <div className='MainContent'>
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
