import Link from "next/link";
import React from "react";
import Layout from "@/components/Layout";
import { getArticleDetail, getArticleList } from "@/pages/api/article";

interface AboutProps {
  // allPostsData: {
  //   id: string;
  //   date: string;
  //   title: string;
  // }[];
  articleInfo: any;
}
export async function getArticleData(id: string) {
  const result = await getArticleDetail(id);
  // Combine the data with the id
  return {
    id,
    ...result,
  };
}
export async function getStaticProps({ params }: any) {
  const articleInfo = await getArticleData(params.id);
  return {
    props: {
      articleInfo,
    },
  };
}

export async function getStaticPaths() {
  const result = await getArticleList();
  const paths = result.list.map((item: any) => item.id);
  return {
    paths: paths.map((id: string) => ({
      params: {
        id: id.toString(),
      },
    })),
    fallback: false,
  };
}

const Article = ({ articleInfo }: AboutProps) => {
  return (
    <Layout title={String(articleInfo.title)}>
      <div className="flex justify-between p-3 bg-white rounded-md mb-2"> <p>{articleInfo.title}</p>
      <Link href="/">返回首页</Link></div>
      <div
        className=" bg-white rounded-md p-3 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: articleInfo?.content || "null" }}
      />
    </Layout>
  );
};

export default Article;
