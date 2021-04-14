import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Image from "next/image";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Jumbotron />
      <Marketing />
      <br />
      <br />
      <PostList allPostsData={allPostsData}></PostList>
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
          href="https://github.com/KamiMoon/angular_full"
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
          {/* <Image
            priority
            src="/images/HTML5.png"
            height={140}
            width={140}
            alt="HTML5"
          /> */}
          <h2>HTML5</h2>
          <p>
            Extensive Experience using HTML5 APIs such as WebSockets for
            real-time applications. In depth knowledge of offline applications
            using local storage and IndexedDB.
          </p>
          <p>
            <a
              className="btn btn-default btn-lg"
              href="https://www.linkedin.com/in/erickizaki"
              role="button"
            >
              Linkedin &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="https://res.cloudinary.com/ddovrks1z/image/upload/w_140,h_140,c_fit/preserveus/fpfs3wntpppixtnyi45l.jpg"
            alt="AngularJS"
            width="140"
            height="140"
          />
          <h2>AngularJS</h2>
          <p>
            Extensive experience using AngularJS on the client for creating rich
            single page applications. Experience using modern toolsets such as
            Grunt. Click Demo for a small demo app using AngularJS, Node.js, and
            MongoDB.
          </p>
          <p>
            <a
              className="btn btn-default btn-lg"
              href="https://www.linkedin.com/in/erickizaki"
              role="button"
            >
              Linkedin &raquo;
            </a>
          </p>
          <p>
            <a className="btn btn-default btn-lg" href="/crud" role="button">
              Demo &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="https://res.cloudinary.com/ddovrks1z/image/upload/w_200,h_200,c_fit/preserveus/ubl6hx3cnyg02vqkwhv1.jpg"
            alt="MongoDB"
          />
          <img
            src="https://res.cloudinary.com/ddovrks1z/image/upload/w_200,h_200,c_fit/preserveus/yu6mk5unhlinzxcxwrl8.jpg"
            alt="Node.js"
          />
          <h2>Full Stack Development</h2>
          <p>
            MEAN stack development with AngularJS, Node.js, Express.js, and
            MongoDB. MongoDB Certified Developer.
          </p>
          <p>
            <a
              className="btn btn-default btn-lg"
              href="https://www.preservedfw.com"
              target="_blank"
              role="button"
            >
              Preserve US LLC &raquo;
            </a>
          </p>
          <p>
            <a
              className="btn btn-default btn-lg"
              href="https://github.com/KamiMoon/mean_vo_server"
              target="_blank"
              role="button"
            >
              <i className="fa fa-github fa-lg"></i> Volunteer Omaha &raquo;
            </a>
          </p>
          <p>
            <a
              className="btn btn-default btn-lg"
              href="https://github.com/KamiMoon/angular_full"
              target="_blank"
              role="button"
            >
              <i className="fa fa-github fa-lg"></i> erickizaki.com &raquo;
            </a>
          </p>
          <p>
            <a
              className="btn btn-default btn-lg"
              href="https://university.mongodb.com/exams/display_certificate?csrfmiddlewaretoken=XibdC5vVH3A3H4rKrVpkmEge5dgNdkuw&license1=946&license2=959&license3=786"
              target="_blank"
              role="button"
            >
              Certification &raquo;
            </a>
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
            I have been experimenting with WebGL technolgoy and{" "}
            <a href="http://threejs.org/">Three.js</a> in particular. For the 3D
            house demo click the the Blue Square in the top left to move through
            the house in a scripted fashion through a simple 3D house model
            created in <a href="https://www.blender.org/">Blender</a>. Has mouse
            orbit and move controls to move freely as well. The second demo is a
            3D container yard that renders 11,000+ containers each clickable
            with its own JavaScript data. Renders at 60fps on most hardware.
          </p>
          <div className="main-button-container">
            <a
              className="btn btn-default btn-lg"
              href="https://dazzling-fire-6644.firebaseapp.com/threejs/"
              target="_blank"
            >
              3D House &raquo;
            </a>
            <a
              className="btn btn-default btn-lg"
              href="threejslot/index.html"
              target="_blank"
            >
              3D Container Yard &raquo;
            </a>
            <a
              className="btn btn-default btn-lg"
              href="https://github.com/KamiMoon/angular_full/tree/master/client/threejslot"
            >
              <i className="fa fa-github fa-lg"></i> GitHub &raquo;
            </a>
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
            <a
              className="btn btn-default btn-lg"
              href="https://github.com/KamiMoon/angular_full/tree/master/client/css3presentation"
            >
              <i className="fa fa-github fa-lg"></i> GitHub &raquo;
            </a>
            .
          </div>
        </div>
        <div className="col-md-5 col-md-pull-7">
          {/* <img
            className="featurette-image img-responsive center-block"
            src="/images/css3.png"
            alt="CSS3"
          /> */}
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            jQuery<span className="text-muted">...MVC!</span>
          </h2>
          <p className="lead">
            Almost every demo here uses jQuery. I have heavy experience with it.
            Before there using Backbone.js and AngularJS my applications were
            done with good old jQuery, Require.js, and Handlebars.js.
          </p>
          <div className="main-button-container">
            <a
              className="btn btn-default btn-lg"
              href="https://github.com/KamiMoon/TodoMVC"
              target="_blank"
            >
              <i className="fa fa-github fa-lg"></i> jQuery Todo MVC &raquo;
            </a>
          </div>
        </div>
        <div className="col-md-5">
          {/* <img
            className="featurette-image img-responsive center-block"
            src="/images/jquery.png"
            alt="jQuery"
          /> */}
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
            <a
              className="btn btn-default btn-lg"
              role="button"
              href="https://dazzling-fire-6644.firebaseapp.com/presentations/#/start"
              target="_blank"
            >
              WebGL Presentation &raquo;
            </a>
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

function PostList(props) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {props.allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
