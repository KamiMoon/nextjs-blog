import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-6">
            <h3>Site</h3>
            <ul>
              <li>
                <Link href={`/`}>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href={`/portfolio`}>
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href={`/blog`}>
                  <a>Blog</a>
                </Link>
              </li>
              <li>&nbsp;</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6">
            <h3>Social</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/eric.kizaki" target="_blank">
                  <span className="fa-stack">
                    <i className="fa fa-square-o fa-stack-2x fa-inverse"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/erickizaki"
                  target="_blank"
                >
                  <span className="fa-stack">
                    <i className="fa fa-square-o fa-stack-2x fa-inverse"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>{" "}
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/KamiMoon" target="_blank">
                  <span className="fa-stack">
                    <i className="fa fa-square-o fa-stack-2x fa-inverse"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>{" "}
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:erickizaki@gmail.com">erickizaki@gmail.com</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="cold-md-12">
            <hr />
            <div id="footer-author">Eric Kizaki 2021</div>
          </div>
        </div>
        <a id="go-to-top" href="#"></a>
      </div>
      <br />
    </footer>
  );
}
