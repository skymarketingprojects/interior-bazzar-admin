import { Button } from "../../ui";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";
import { PAGES } from "../../../utils/constants/app";
import type { BlogType } from "../../../types/global";
import { generateBlogSlug } from "../../../utils/helper/urlFormatter";
const BlogCard = ({ Blog }: { Blog: BlogType }) => {
  const { id, title, cover_image_url, author_image, author_name, publish_date, read_time } = Blog;
  const slug = generateBlogSlug(title, id)
  return (
    <div className={styles.card}>
      {/* Image */}
      <img src={cover_image_url} alt={title} className={styles.banner} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.authorRow}>
          <div className={styles.authorInfo}>
            <img
              alt={author_name}
              src={author_image}
              className={styles.authorImg}
            />
            <div>
              <p className={styles.authorName}>{author_name}</p>
              <p className={styles.publishDate}>Published at {publish_date}</p>
            </div>
          </div>
          <span className={styles.readTime}>{read_time}</span>
        </div>

        <h3 className={`linewrap-2 ${styles.title}`}>{title}</h3>
        <Link className={styles.link} to={PAGES.BLOGS + `/${slug}`}>
          <Button className={styles.button}>Know More</Button>
        </Link>
      </div>
    </div>
  );

};


export const BlogCardShimmer = () => {
  return (
    <div className="w-full mx-auto flex flex-col overflow-hidden bg-gray-200 animate-pulse shadow-lg">

      {/* Image Shimmer */}
      <div className="w-full h-42 bg-gray-300"></div>

      {/* Content */}
      <div className="grid gap-2 p-4">

        {/* Author Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-300"></div>
            <div className="flex flex-col gap-1">
              <div className="h-3 w-24 bg-gray-300 rounded"></div>
              <div className="h-2 w-16 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="h-2 w-12 bg-gray-300 rounded"></div>
        </div>

        {/* Title Shimmer */}
        <div className="h-5 bg-gray-300 rounded w-full"></div>
        <div className="h-5 bg-gray-300 rounded w-5/6"></div>

        {/* Button Shimmer */}
        <div className="h-10 w-full bg-gray-300 rounded"></div>
      </div>
    </div>
  )
}

export default BlogCard;
