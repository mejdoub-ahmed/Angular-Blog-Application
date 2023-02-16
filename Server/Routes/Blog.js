const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  GetAllBlogs,
  GetOneBlog,
  UpVoteBlog,
  DownVoteBlog,
  AddNewBlog,
  SearchBlog,
} = require("../Controller/Blog.js");

//GET request to fetch all blogs.
router.get("/getAllBlogs", GetAllBlogs);
// GET request for one blog.
router.get("/getOneBlog/:id", GetOneBlog);
// POST request for creating a new blog.
router.post("/addNewBlog", AddNewBlog);

// Update request for updating the number of up and down vote of each blog
router.put("/upVoteBlog/:id", UpVoteBlog);
router.put("/downVoteBlog/:id", DownVoteBlog);
// POST request for search for a blog.
router.post("/SearchBlog", SearchBlog);

module.exports = router;
