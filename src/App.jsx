import React from 'react'
import GetStarted from './Pages/GetStarted/GetStarted'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EnterName from './Pages/EnterName/EnterName';
import EnterEmail from './Pages/EnterEmail/EnterEmail';
import EnterPhoneNumber from './Pages/EnterPhoneNumber/EnterPhoneNumber';
import './App.css'
import EnterGitHub from './Pages/EnterGithub/EnterGithub';
import EnterInstagram from './Pages/EnterInstagram/EnterInstagram';
import EnterTwitter from './Pages/EnterTwitter/EnterTwitter';
import EnterLinkedIn from './Pages/EnterLinkedIn/EnterLinkedIn';
import EnterDomain from './Pages/EnterDomain/EnterDomain';
import EnterImage from './Pages/EnterImage/EnterImage';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Switch>
          <Route exact path='/' component={GetStarted} />
          <Route exact path='/name' component={EnterName} />
          <Route exact path='/email' component={EnterEmail} />
          <Route exact path='/phone' component={EnterPhoneNumber} />
          <Route exact path='/github' component={EnterGitHub} />
          <Route exact path='/instagram' component={EnterInstagram} />
          <Route exact path='/twitter' component={EnterTwitter} />
          <Route exact path='/linkedin' component={EnterLinkedIn} />
          <Route exact path='/domain' component={EnterDomain} />
          <Route exact path='/image' component={EnterImage} />
        </Switch>
     </BrowserRouter>
     <Toaster/>
   </div>
  )
}

export default App