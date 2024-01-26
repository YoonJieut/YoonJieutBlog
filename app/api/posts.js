import Post from "../../models/Post";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content, userId } = req.body;
    try {
      const newPost = await Post.create({ title, content, userId });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
