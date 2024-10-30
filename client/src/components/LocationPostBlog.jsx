import axios from "axios";
import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import { NavBar } from "./Nav-Bar";

export default function LocationPostBlog() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText)

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );
      setPosts(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [searchText]);

  return (
    <>
      <NavBar inputText={setSearchText} />
      <div className="Posts">
        {posts.map((blog, id) => {
          return (
            <BlogCard
              key={id}
              photo={blog.photos[0]}
              title={blog.title}
              description={
                blog.description.length > 100
                  ? blog.description.slice(0, 100) + "..."
                  : blog.description
              }
              url={blog.url}
            />
          );
        })}
      </div>
    </>
  );
}
