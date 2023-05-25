import ytdl from "@distube/ytdl-core";
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { videoId } = req.query;
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  });
  ytdl.getInfo(`https://www.youtube.com/watch?v=${videoId}`).then((info) => {
    res.status(200).json(info.videoDetails);
  });
}
