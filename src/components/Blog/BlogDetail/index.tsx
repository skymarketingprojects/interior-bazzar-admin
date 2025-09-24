import parse from "html-react-parser";
import styles from "./BlogDetail.module.css";
import type { BlogType } from "../../../types/global";
const BlogDetail = ({ blog }: { blog: BlogType }) => {
  const { title, cover_image_url, content, author_image, author_name, publish_date, read_time } = blog;
  return (
    <div className={`container ${styles.container}`}>
      <h2 className={`linewrap-2 ${styles.title}`}>{title}</h2>
      <img
        src={cover_image_url}
        alt={blog.title}
        className={`${styles.blogImage}`}
      />
      <div className={styles.metaIfno}>
        <div className={styles.left}>
          <img
            src={author_image}
            alt={author_name}
            className={styles.avatar}
          />
          <div>
            <p className={styles.name}>{author_name}</p>
            <p className={styles.date}>Published at {publish_date}</p>
          </div>
        </div>
        <p className={styles.readTime}>{read_time}</p>
      </div>
      <div>{parse(content)}</div>
    </div>
  );
};
export default BlogDetail;
