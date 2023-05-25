import ytdl from "@distube/ytdl-core";

export default function handler(req, res) {
  const { videoId } = req.query;
  ytdl.video(`https://www.youtube.com/watch?v=${videoId}`).then((info) => {
    res.status(200).json(info.videoDetails);
  });
}
