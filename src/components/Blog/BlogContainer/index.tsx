import BlogCard, { BlogCardShimmer } from '../BlogCard';
import styles from './BlogContainer.module.css';
import type { BlogType } from '../../../types/global';
const BlogContainer = ({ blogs }: { blogs: BlogType[] }) => {
    return (
        <div className={`container ${styles.container}`}>
            {blogs.map((blog) => (
                <BlogCard key={blog.id} Blog={blog} />
            ))}
        </div>
    );
};

export const BlogContainerShimmer = ({ number }: { number: number }) => {
    return (
        <div className={`container ${styles.container}`}>
            {Array.from({ length: number }).map((_, index) => (
                <BlogCardShimmer key={index} />
            ))}
        </div>
    );
};

export default BlogContainer;
