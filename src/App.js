import logo from './logo.svg';
import './App.css';
import {AboutPage} from './AboutPage.js';




function MyHeader(){
  return(
    <div className='Header'>
      <div className='TitleLine'><img className='logo' src={logo}/> DTS</div>
        <ul className='Nav'>
          <li><a href=''>Home</a></li>
          <li><a href=''>About</a></li>
          <li><a href=''>Contact</a></li>
        </ul>
    </div>
  )
}

function Content(){
  return(
    <div className='Content'>
      <h2>Welcome to my site</h2>
      <p>Cupidatat magna adipisicing aute officia. Consectetur sit tempor laborum non culpa. Magna tempor aute esse non tempor officia. Occaecat eu ut ut incididunt sunt exercitation tempor magna laboris eu esse exercitation non. Occaecat laboris anim dolore ex. Enim irure aliqua reprehenderit aute esse dolor incididunt deserunt qui laborum veniam minim duis nulla.</p>
      <AboutPage/>
    </div>
  )
}

function Sidebar(){
  return(
  <div className='Sidebar'>
    <h2>Recent Events</h2>
    <p>Labore incididunt consectetur occaecat consequat fugiat. Eiusmod ut do duis ut esse excepteur cupidatat culpa voluptate duis. Excepteur sit proident enim id occaecat laborum voluptate enim anim reprehenderit do esse. Occaecat excepteur nostrud ullamco ex sint nisi dolor ad.</p>
  </div>
  )
}

function Footer(){
  return(
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
