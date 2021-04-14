export default function Navbar() {
  return (
    <nav
      className="navbar navbar-default navbar-fixed-top topnav"
      role="navigation"
    >
      <div className="container-fluid topnav" id="navcontainer">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#js-navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/" className="navbar-brand">
            erickizaki.com
          </a>
        </div>
        <div className="navbar-collapse collapse" id="js-navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/blog">BLOG</a>
            </li>
            <li>
              <a href="/portfolio">PORTFOLIO</a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DEMOS <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/crud">AngularJS</a>
                </li>
                <li>
                  <a
                    href="https://dazzling-fire-6644.firebaseapp.com/presentations/#/start"
                    target="_blank"
                  >
                    WebGL Presentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://dazzling-fire-6644.firebaseapp.com/threejs/"
                    target="_blank"
                  >
                    Three.js House
                  </a>
                </li>
                <li>
                  <a href="threejslot/index.html" target="_blank">
                    Three.js Lot
                  </a>
                </li>
                <li>
                  <a
                    href="presentations/css3transitions/index.html"
                    target="_blank"
                  >
                    CSS3 Transitions Presentation
                  </a>
                </li>
                <li>
                  <a
                    href="presentations/css3transitions/GraphicalTrain.html"
                    target="_blank"
                  >
                    CSS3 Transitions Demo
                  </a>
                </li>
                <li>
                  <a href="presentations/IndexedDB/index.html" target="_blank">
                    IndexedDB Presentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/KamiMoon/TodoMVC" target="_blank">
                    jQuery
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/KamiMoon/websocketdemo"
                    target="_blank"
                  >
                    Java
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
            {/* <li ng-show="vm.isLoggedIn()">
              <a href="/profile/{{vm.getCurrentUser()._id}}">PROFILE</a>
            </li>
            <li ng-show="vm.isLoggedIn()">
              <a href="" ng-click="vm.logout()">
                <span className="glyphicon glyphicon-log-out"></span> LOGOUT
              </a>
            </li>
            <li ng-hide="vm.isLoggedIn()">
              <a href="/signup">
                <span className="glyphicon glyphicon-new-window"></span>{" "}
                REGISTER
              </a>
            </li>
            <li ng-hide="vm.isLoggedIn()">
              <a href="/login">
                <span className="glyphicon glyphicon-log-in"></span> LOGIN
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
