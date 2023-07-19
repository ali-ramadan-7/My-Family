import Navs from './component/nav/nav';
import Story from './component/story/story';
import Footer from './component/footer/footer';
import FEvent from './component/family-events/f-events';
import Gallery from './component/gallery/gallery';
import {  BrowserRouter, Routes , Route} from "react-router-dom"
import './App.css';
import Home from './component/Home/Home';
import Error from './component/error/error';
function App() {
  return ( 
    <BrowserRouter>
      <Navs />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/story" element={<Story />}/>
      <Route path="/events" element={<FEvent />}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="*" element={<Error />}/>
  </Routes>
  <Footer/>
  </BrowserRouter> 
    
  );
}

export default App;

// <Navs/>
          
          
// <Route path="/#home"  element={<AboutFamily/>}/>
// <Route path="/#about"  element={<IconCard/>

            // <Slick/>
            // <Footer/>
            // <OurStory/>
            // <PersonCard/>
            // <FEvent/>
            // <Gallery/>
            // <h1 className="container"> reday? </h1>
            // <p>if container play that website is ready...</p>
          
