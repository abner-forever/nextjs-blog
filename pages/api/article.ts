// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const HOST = "http://foreverheart.top";
type Data = {
  name: string;
};

export async function getArticleList() {
  const result = await (await fetch(`${HOST}/api/article/articleList`)).json();
  return result.data;
}

export async function getArticleDetail(id: string) {
  const result = await (await fetch(`${HOST}/api/article/getArticle?id=${id}`)).json();
  return result.data;
}