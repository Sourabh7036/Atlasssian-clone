import './Example.css';
export default function Example(){

    return(
       
          
              <header className="navbar">
                <div className="navbar-container">
                  <img src="#" alt="Logo" className="navbar-logo" />
                  <ul className="navbar-menu">
                    <li className="menu-item">
                      Products
                      <div className="dropdown">
                        <a href="#">Product 1</a>
                        <a href="#">Product 2</a>
                        <a href="#">Product 3</a>
                      </div>
                    </li>
                    <li className="menu-item">
                      Teams
                      <div className="dropdown">
                        <a href="#">Team 1</a>
                        <a href="#">Team 2</a>
                        <a href="#">Team 3</a>
                      </div>
                    </li>
                    <li className="menu-item">
                      Why Atlassian
                      <div className="dropdown">
                        <a href="#">Reason 1</a>
                        <a href="#">Reason 2</a>
                        <a href="#">Reason 3</a>
                      </div>
                    </li>
                    <li className="menu-item">
                      Resources
                      <div className="dropdown">
                        <a href="#">Resource 1</a>
                        <a href="#">Resource 2</a>
                        <a href="#">Resource 3</a>
                      </div>
                    </li>
                    <li className="menu-item">
                      Enterprise
                      <div className="dropdown">
                        <a href="#">Enterprise 1</a>
                        <a href="#">Enterprise 2</a>
                        <a href="#">Enterprise 3</a>
                      </div>
                    </li>
                  </ul>
                  <form className="navbar-search">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                  </form>
                </div>
              </header>
         
          
    )
}