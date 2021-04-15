import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>

      <PortfolioView />
    </Layout>
  );
}

function PortfolioView() {
  return (
    <div>
      <div className="content-section-a">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-push-6  col-sm-6">
              <h2 className="section-heading">Ansira</h2>
              <h4>2018-Present</h4>
              <p className="lead">Senior Developer</p>
              <ul>
                <li>
                  Developed various cloud applications for a media gateway
                  application, dashboard applications, and various websites.
                </li>
                <li>HTML5, CSS3, JavaScript, Typescript</li>
                <li>Facebook API</li>
                <li>Angular 9</li>
                <li>React 16, Redux</li>
                <li>Python 3.6+, Flask, Chalice</li>
                <li>Node.js</li>
                <li>
                  AWS Lambda serverless microservices, S3, EC2, Redshift,
                  DynamoDB, PostgresSQL
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-pull-6  col-sm-6">
              <Image
                priority
                src="/images/portfolio/ansira.jpeg"
                className="img-responsive"
                width={365}
                height={191}
                alt="Ansira"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-a">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-push-6  col-sm-6">
              <h2 className="section-heading">Bank of America</h2>
              <h4>2017-2018</h4>
              <p className="lead" style={{ textAlign: "left" }}>
                Assistant Vice President&#59; Consultant Applications Developer
              </p>
              <ul>
                <li>
                  Developed applications used for fixed income trading in New
                  York City
                </li>
                <li>HTML5, CSS3, JavaScript</li>
                <li>React 16, Redux</li>
                <li>Python</li>
                <li>
                  <a href="https://www.openfin.co/" target="_blank">
                    OpenFin
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-pull-6  col-sm-6">
              <Image
                priority
                src="/images/portfolio/boa.jpeg"
                className="img-responsive"
                width={365}
                height={365}
                alt="Bank of America"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-a">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-push-6  col-sm-6">
              <h2 className="section-heading">Preserve US LLC</h2>
              <h4>2015</h4>
              <p className="lead">Real estate website.</p>
              <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>Twitter Bootstrap and Responsive Design</li>
                <li>MEAN (AngularJS, Node.js, Express.js, MongoDB) stack</li>
                <li>Yeoman, Node.js</li>
                <li>Google Maps API integration</li>
                <li>Social and payment integration</li>
              </ul>
              <div className="main-button-container">
                {/* <a
                  className="btn btn-default btn-lg"
                  href="https://www.preservedfw.com"
                  target="_blank"
                >
                  Preserve US &raquo;
                </a> */}
                <a
                  className="btn btn-default btn-lg"
                  href="https://github.com/KamiMoon/preserveus"
                  target="_blank"
                >
                  <i className="fa fa-github fa-lg"></i> GitHub &raquo;
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-pull-6  col-sm-6">
              {/* <a href="https://www.preservedfw.com" target="_blank"> */}
              <img
                src="https://res.cloudinary.com/ddovrks1z/image/upload/w_365,h_365,c_fit/preserveus/fbh9iwaastcsbbo3n9t5.png"
                className="img-responsive"
              />
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-a">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-push-6  col-sm-6">
              <h2 className="section-heading">Volunteer Omaha</h2>
              <h4>2014</h4>
              <p className="lead">Volunteering Social Network</p>
              <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>jQuery</li>
                <li>Twitter Bootstrap and Responsive Design</li>
                <li>Google Maps API integration</li>
                <li>LAMP (Linux, Apache, MySQL, PHP)</li>
                <li>CakePHP</li>
                <li>
                  Also partially rewritten as MEAN (AngularJS, Node.js,
                  Express.js, MongoDB) stack
                </li>
              </ul>
              <div className="main-button-container">
                <a
                  className="btn btn-default btn-lg"
                  href="https://github.com/KamiMoon/volunteeromaha"
                  target="_blank"
                >
                  <i className="fa fa-github fa-lg"></i> PHP Version &raquo;
                </a>
                <a
                  className="btn btn-default btn-lg"
                  href="https://github.com/KamiMoon/mean_vo_server"
                  target="_blank"
                >
                  <i className="fa fa-github fa-lg"></i> MEAN Version &raquo;
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-pull-6  col-sm-6">
              <a
                href="hhttps://github.com/KamiMoon/volunteeromaha"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/ddovrks1z/image/upload/w_365,h_365,c_fit/preserveus/eegxivfsjbf1sfxethnu.png"
                  className="img-responsive"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-a">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-push-6  col-sm-6">
              <h2 className="section-heading">Union Pacific Railroad</h2>
              <h4>2011-2017</h4>
              <p className="lead">Senior Application Developer</p>
              <ul>
                <li>
                  Developed various applications for Intermodal Terminal
                  Operations
                </li>
                <li>HTML5, CSS3, JavaScript</li>
                <li>jQuery, jQuery Mobile, jQuery UI, Foundation</li>
                <li>Require.js, Handlebars.js, AngularJS</li>
                <li>Google Maps API integration, ArcGIS integration</li>
                <li>Yeoman, Node.js</li>
                <li>
                  Java backend and web services, Jersey, Spring, Spring MVC
                </li>
                <li>Oracle Database</li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-pull-6  col-sm-6">
              <img
                src="https://res.cloudinary.com/ddovrks1z/image/upload/w_365,h_365,c_fit/preserveus/ca2ng0u9t0fh33oso1oo.png"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
