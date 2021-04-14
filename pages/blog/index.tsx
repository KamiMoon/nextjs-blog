import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import Head from "next/head";

export default function PostList({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <div className="panel panel-primary">
        <div className="panel-heading">Posts</div>
        <div className="panel-body">
          <div className="list-group">
            {allPostsData.map(({ id, date, title }) => (
              <div key={id}>
                <Link href={`/blog/${id}`}>
                  <a className="list-group-item">{title}</a>
                </Link>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
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
