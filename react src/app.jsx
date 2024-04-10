import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './Home/Home';
import { Project } from './Proj_page/Proj_page';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='app body bg-dark text-light'>
        <header class="sticky-top">
          <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              TechConnect<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='Home'>
                    Home
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='Proj_page'>
                    Project Page
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/home' element={<Home userName={userName} />} />
          <Route path='/Proj_page' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

    
        <footer class="sticky-bottom">
          <div class="container-fluid ">
            <p class="text-muted">&copy; Aaron Earl - Web Programming 260</p>
            <a href="https://github.com/aearl23/Startup-">GitHub</a>
          </div>
        </footer>   
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;