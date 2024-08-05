// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const HOST = "http://foreverheart.top";

export async function getArticleList() {
  const result = await (await fetch(`${HOST}/api/articles`)).json();
  return result.data;
}

export async function getArticleDetail(id: string) {
  const result = await (await fetch(`${HOST}/api/articles/detail/${id}`)).json();
  return result;
}
export default function handler(req:NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  getArticleDetail(id as string).then((result)=>{
    res.status(200).json(result);
  })
}