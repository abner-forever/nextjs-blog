import Link from "next/link";
import React from "react";
import Layout from "@/components/Layout";

const HOST = process.env.HOME_PAGE || "http://localhost:3000"

interface AboutProps {
  articleInfo: any;
}

export async function getServerSideProps(context: any) {
  const { params } = context;
 
  const { id } = params;
  // 调用 API 路由来获取数据
  const res = await fetch(`${HOST}/api/article/${id}`);
  const { data } = await res.json();
  return {
      props: {
        articleInfo: data,
      },
  };
}


const Article = ({articleInfo}: AboutProps) => {
  return (
    <Layout title={String(articleInfo?.title)}>
      <div className="flex justify-between p-3 bg-white rounded-md mb-2"> <p>{articleInfo?.title}</p>
      <Link href="/">返回首页</Link></div>
      <div
        className=" bg-white rounded-md p-3 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: articleInfo?.content || "null" }}
      />
    </Layout>
  );
};

export default Article;
