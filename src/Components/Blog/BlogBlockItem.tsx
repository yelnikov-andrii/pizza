import React from "react";
import { Link } from "react-router-dom";
import {Blog} from '../../types/type';

type Props = {
  blog: Blog;
}

export const BlogBlockItem: React.FC <Props> = ({blog}) => {
  return (
    <div className="blog__block_item" key={blog.name}>
      <img src={blog.img} alt="" className="blog__block_item_img"/>
      <p className="blog__block_item_date">
        {blog.data}
      </p>
      <p className="blog__block_item_name">
        {blog.name}
      </p>
      <p className="blog__block_item_preview">
        {blog.preview}
      </p>
      <Link 
        to={blog.link} 
        className="blog__block_item_link"
      >
        Читати далі
      </Link>
    </div>
  )
}