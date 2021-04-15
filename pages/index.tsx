import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Jumbotron />
      <Marketing />
      <br />
      <br />
      {/* <PostList allPostsData={allPostsData}></PostList> */}
    </Layout>
  );
}

function Jumbotron() {
  return (
    <section className="jumbotron">
      <h1>Portfolio Website of Eric Kizaki</h1>
      <h4>
        Even this website is part of the portfolio. Built using React.js,
        Next.js, Node.js, running on{" "}
        <a href="https://vercel.com/" target="_blank">
          Vercel
        </a>
        .
      </h4>
      <p>
        <a
          className="btn btn-lg btn-success"
          href="https://github.com/KamiMoon/nextjs-blog"
          target="_blank"
          role="button"
        >
          <i className="fa fa-github fa-lg"></i> GitHub
        </a>
      </p>
    </section>
  );
}

function Marketing() {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <Image
            priority
            src="/images/HTML5.png"
            height={140}
            width={140}
            alt="HTML5"
          />
          <h2>HTML5</h2>
          <p>
            Extensive Experience using HTML5 APIs such as WebSockets for
            real-time applications. In depth knowledge of offline applications
            using local storage and IndexedDB.
          </p>
        </div>
        <div className="col-lg-4">
          <Image
            priority
            src="/images/angular.png"
            height={140}
            width={140}
            alt="Angular"
          />
          <h2>Angular</h2>
          <p>
            Extensive experience using Angular on the client for creating rich
            single page applications.
          </p>
        </div>
        <div className="col-lg-4">
          <Image
            priority
            src="/images/react.png"
            height={140}
            width={198}
            alt="React"
          />
          <h2>React</h2>
          <p>
            Experience using React on the client for creating web application
            user interfaces. Experience with redux and React Native.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Image
            priority
            src="/images/nodejs.png"
            height={150}
            width={245}
            alt="Node.js"
          />
          <h2>Backend Development</h2>
          <p>
            Extensive experience Node.js for creating web server applications
            using Express.js and serverless microservices on AWS Lambda.
            Experience using PHP, Python, and Java for creating backend
            services.
          </p>
        </div>
        <div className="col-lg-4">
          <Image
            priority
            src="/images/database.png"
            height={150}
            width={124}
            alt="Database"
          />
          <h2>Database</h2>
          <p>
            Extensive experience using NoSQL datastores such as MongoDB and
            DynamoDB. Experience with various relational database such as
            Oracle, SQL Server, and PostgresSQL. Database schema and table
            design experience.
          </p>
        </div>
        <div className="col-lg-4">
          <Image
            priority
            src="/images/aws.png"
            height={150}
            width={200}
            alt="AWS"
          />
          <h2>Cloud</h2>
          <p>
            Extensive using various cloud platforms for development and setting
            up CI/CD.
          </p>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            WebGL Visualizations
            <span className="text-muted">...It is in 3D!</span>
          </h2>
          <p className="lead">
            I have been experimenting with WebGL technology and I created{" "}
            {/* <a href="http://threejs.org/">Three.js</a> in particular. For the 3D
            house demo click the the Blue Square in the top left to move through
            the house in a scripted fashion through a simple 3D house model
            created in <a href="https://www.blender.org/">Blender</a>. Has mouse
            orbit and move controls to move freely as well. The second demo is a */}
            A 3D container yard that renders 11,000+ containers each clickable
            with its own JavaScript data. Renders at 60fps on most hardware.
          </p>
          <div className="main-button-container">
            {/* <a
              className="btn btn-default btn-lg"
              href="https://dazzling-fire-6644.firebaseapp.com/threejs/"
              target="_blank"
            >
              3D House &raquo;
            </a> */}
            <a
              className="btn btn-default btn-lg"
              href="/threejslot/index.html"
              target="_blank"
            >
              3D Container Yard &raquo;
            </a>
            {/* <a
              className="btn btn-default btn-lg"
              href="https://github.com/KamiMoon/angular_full/tree/master/client/threejslot"
            >
              <i className="fa fa-github fa-lg"></i> GitHub &raquo;
            </a> */}
          </div>
        </div>
        <div className="col-md-5">
          <Image
            priority
            src="/images/WebGL_500.jpg"
            className="featurette-image img-responsive center-block"
            width={457}
            height={227}
            alt="WebGL"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 col-md-push-5">
          <h2 className="featurette-heading">
            CSS3<span className="text-muted">...animations!</span>
          </h2>
          <p className="lead">
            It is not just responsive design (see this website). CSS3 can be
            used to animate. For the small demo bellow click the red railcar to
            move the train and click the yellow containers to have them come off
            the train.
          </p>
          <div className="main-button-container">
            <a
              className="btn btn-default btn-lg"
              href="presentations/css3transitions/index.html"
              target="_blank"
            >
              CSS3 Transitions Presentation &raquo;
            </a>
            <a
              className="btn btn-default btn-lg"
              href="presentations/css3transitions/GraphicalTrain.html"
              target="_blank"
            >
              CSS3 Transitions Demo &raquo;
            </a>
            {/* <a
              className="btn btn-default btn-lg"
              href="https://github.com/KamiMoon/angular_full/tree/master/client/css3presentation"
            >
              <i className="fa fa-github fa-lg"></i> GitHub &raquo;
            </a>
            . */}
          </div>
        </div>
        <div className="col-md-5 col-md-pull-7">
          {/* <img
            className="featurette-image img-responsive center-block"
            src="/images/css3.png"
            alt="CSS3"
          /> */}
          <Image
            priority
            src="/images/css3.png"
            className="featurette-image img-responsive center-block"
            width={177}
            height={250}
            alt="CSS3"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Java<span className="text-muted"></span>
          </h2>
          <p className="lead">
            Extensive experience with Maven, Spring MVC, Spring JDBC, and
            Oracle. See Linkedin. Click demo for the source to a small demo app.
          </p>
          <div className="main-button-container">
            <a
              className="btn btn-default btn-lg"
              href="https://www.linkedin.com/in/erickizaki"
              role="button"
            >
              Linkedin &raquo;
            </a>
            <a
              className="btn btn-default btn-lg"
              href="https://github.com/KamiMoon/websocketdemo"
              role="button"
            >
              <i className="fa fa-github fa-lg"></i> Demo &raquo;
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Image
            priority
            src="/images/java.jpeg"
            className="featurette-image img-responsive center-block"
            width={256}
            height={256}
            alt="Java"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Presentations</h2>
          <p className="lead">
            Here is a list of presentations I have given to a live audience on
            HTML5 technology. I am an advocate for the web as an open platform.
            Finely tuned HTML5 presentations using{" "}
            <a href="http://impress.github.io/impress.js/#/bored">impress.js</a>
          </p>
          <div className="main-button-container">
            {/* <a
              className="btn btn-default btn-lg"
              role="button"
              href="https://dazzling-fire-6644.firebaseapp.com/presentations/#/start"
              target="_blank"
            >
              WebGL Presentation &raquo;
            </a> */}
            <a
              className="btn btn-default btn-lg"
              href="presentations/css3transitions/index.html"
              target="_blank"
            >
              CSS3 Transitions Presentation &raquo;
            </a>
            <a
              className="btn btn-default btn-lg"
              href="presentations/IndexedDB/index.html"
              target="_blank"
            >
              IndexedDB Presentation &raquo;
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Image
            priority
            src="/images/mic.jpg"
            className="featurette-image img-responsive center-block"
            width={350}
            height={358}
            alt="Mic"
          />
        </div>
      </div>
    </div>
  );
}
