import { Route, Routes } from "react-router-dom";
import { BlogItem } from "./BlogItem";
import { blogArr } from "../../data/data";
import { Title } from "../UI/Title";
import { BlogBlockItem } from "./BlogBlockItem";

export const Blog = () => {
  return (
    <Routes>
      <Route path="" element={
        <section className="blog">
        <div className="container">
          <Title title="Блог"/>
          <div className="blog__block">
          {blogArr.map(blog => (
            <BlogBlockItem blog={blog} key={blog.article} />
          ))}
          </div>
        </div>
      </section>
      }>
      </Route>
      {blogArr.map(blog => (
        <Route 
          path={blog.link}
          key={blog.name}
          element={
          <BlogItem blog={blog} />
        }>
        </Route>
      ))}
    </Routes>
  )
}