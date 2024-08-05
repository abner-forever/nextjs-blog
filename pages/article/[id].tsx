import Link from "next/link";
import React from "react";
import Layout from "@/components/Layout";
import { getArticleDetail } from "../api/article/[id]";
import { remark } from "remark";
import html from "remark-html";

interface ArticleProps {
  title: any;
  content: string;
}

export async function getServerSideProps(context: any) {
  const { params } = context;

  const { id } = params;
  const { data } = await getArticleDetail(id);
  const processedContent = await remark().use(html).process(data.content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      title: data.title,
      content: contentHtml,
    },
  };
}

const Article = ({ title, content }: ArticleProps) => {
  return (
    <Layout title={String(title)}>
      <div className="h-16 flex justify-between p-3 bg-white rounded-md mb-2">
        <p>{title}</p>
        <Link href="/">返回首页</Link>
      </div>
      <div
        className=" bg-white rounded-md p-3 overflow-hidden min-h-screen"
        dangerouslySetInnerHTML={{ __html: content || "null" }}
      />
    </Layout>
  );
};

export default Article;
