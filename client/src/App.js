// import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Feedback from './Components/Feedback.js';
import Payment from './Components/Payment.js';
import Cat from './Components/Cat.js';
import Product from './Components/Product.js';
import Forgotpassword from './Components/Forgotpassword.js';
import Otp from './Components/Otp.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './Components/Layout/Footer.js';
import Navbar from './Components/Layout/Navbar.js';
import About from './Components/About.js';
import Slider from './Components/Slider.js';
import Contact from './Components/Contact.js';
import Login from './Components/Login.js';
import Registrationform from './Components/Registrationform.js';
import Resetpassword from './Components/Resetpassword.js';
import Reg from './Components/Reg.js';
 import Feedbackview from './Components/Feedbackview.js';
import Categoryview from './Components/Categoryview.js';
import Productview from './Components/Productview.js';
import Paymentview from './Components/Paymentview.js';
import Loginform from './Components/Loginform.js';
import Regview from './Components/Regview.js';

import Userhome from './Components/Userhome.js';
import Adminhome from './Components/Adminhome.js';
import Qty from './Components/Qty.js'
import Cartview from './Components/Cartview.js';
import Orderview from './Components/Orderview.js';
import Paybillnext from './Components/Paybillnext.js';
import Paybill from './Components/Paybill.js';
import Customerorder from './Components/Customerorder.js';
import Todaysorder from './Components/Todaysorder.js';






function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Slider}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/registrationform" component={Registrationform}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forgotpassword" component={Forgotpassword}></Route>
          <Route exact path="/otp" component={Otp}></Route>
          <Route exact path="/resetpassword" component={Resetpassword}></Route>
          <Route exact path="/forgotpass" component={Forgotpassword}></Route>
          <Route exact path="/otp" component={Otp}></Route>
          <Route exact path="/category" component={Cat}></Route>
          <Route exact path="/payment" component={Payment}></Route>
          <Route exact path="/feedback" component={Feedback}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route exact path="/reg"    component={Reg}></Route>
          <Route exact path="/feedbackview" component={Feedbackview}></Route>
         <Route exact path="/categoryview" component={Categoryview}></Route>
         <Route exact path="/productview"   component={Productview}></Route>
         <Route exact path="/paymentview"   component={Paymentview}></Route>
         <Route exact path="/loginform"   component={Loginform}></Route>
         <Route exact path="/regview"   component={Regview}></Route>

         <Route exact path="/userhome"   component={Userhome}></Route>
      <Route exact path="/adminhome" component={Adminhome}></Route>

    <Route exact path="/qty/:id/" component={Qty}></Route>
    <Route exact path="/mycart" component={Cartview}></Route>
      <Route  exact path="/myorder" component={Orderview}></Route>
      <Route  exact path="/paybill_next/:price/" component={Paybillnext}></Route>
    <Route exact path="/paybill/:id/:price/" component={Paybill}></Route>
    <Route exact path="/customerorder" component={Customerorder}></Route>
    <Route exact path="/todays" component={Todaysorder}></Route>





         
       
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
};
export default App;
