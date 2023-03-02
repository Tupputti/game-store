// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export const getGameList = async () => {
  const endpoint = `http://localhost:3005/gamelist`;
  const data = await (await fetch(endpoint)).json();
  return data;
};
