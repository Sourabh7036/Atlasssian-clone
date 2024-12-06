import './Navbar.css'
import Button from '@mui/material/Button';

export default function Navbar(){

    return (
      <div  className='Main-div'>
         <header className='header-container'>
          {/* Navbar content */}
            <nav className="navbar-container">
                 <a href="#" aria-label="Atlassian Home" className='logo-link'>
                   <i className="fa-brands fa-atlassian"></i>
                     <span>
                      ATLASSIAN
                    </span>
                  </a>
                  <ul>
                    <li className='Drop-down'><a href="#" aria-haspopup="true" aria-expanded="false">Products<i className="fa-solid fa-chevron-down"></i></a>
                      <div className='Drop-down-list'>
                         <a href="#">Data1</a>
                         <a href="#">Data2</a>
                         <a href="#">Data3</a>
                      </div>
                      </li>
                    <li className='Drop-down'><a href="#"aria-haspopup="true" aria-expanded="false">Teams<i className="fa-solid fa-chevron-down"></i></a>
                     <div className='Drop-down-list'>
                         <a href="#">Data1</a>
                         <a href="#">Data2</a>
                         <a href="#">Data3</a>
                      </div>
                    </li>
                    <li className='Drop-down'><a href="#" aria-haspopup="true" aria-expanded="false">Why Atlassian<i className="fa-solid fa-chevron-down"></i></a>
                    <div className='Drop-down-list'>
                         <a href="#">Data1</a>
                         <a href="#">Data2</a>
                         <a href="#">Data3</a>
                      </div>
                    </li>
                    <li className='Drop-down'><a href="#" aria-haspopup="true" aria-expanded="false">Resources<i className="fa-solid fa-chevron-down"></i></a>
                    <div className='Drop-down-list'>
                         <a href="#">Data1</a>
                         <a href="#">Data2</a>
                         <a href="#">Data3</a>
                      </div>
                    </li>
                    <li className='Drop-down'><a href="#" aria-haspopup="true" aria-expanded="false">Enterprises<i className="fa-solid fa-chevron-down"></i></a>
                    <div className='Drop-down-list'>
                         <a href="#">Data1</a>
                         <a href="#">Data2</a>
                         <a href="#">Data3</a>
                      </div>
                    </li>
                  </ul>
            </nav>
         </header>


    {/*  Main content */}
         <main className='Main-conten-container'>

           <div className="Upper-part"> 
             <h1>The new jira :
               <br /> 
               from 
               <span>teams
                   <img src="" alt="" />
               </span> to dreams
             </h1>
             <Button variant="contained">Get started</Button>

           </div>
     {/* middele conten from here */}
           <div className='middle-part'>
                <p1>Here is the middle content</p1>
           </div>

         </main>
        
       </div>


         
    )
  }