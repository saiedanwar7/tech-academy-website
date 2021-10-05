import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import CourseDetails from './component/CourseDetails/CourseDetails';
import Courses from './component/Courses/Courses';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Instructor from './component/Instructor/Instructor';
import NotFound from './component/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>


        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/courses'>
            <Courses></Courses>
          </Route>

          <Route path="/course/:courseId">
            <CourseDetails></CourseDetails>
          </Route>

          <Route path="/instructor">
            <Instructor></Instructor>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

           <Route path="*">
            <NotFound></NotFound>
          </Route>

         </Switch>
            <Footer></Footer>
         </Router>

    </div>
  );
}

export default App;