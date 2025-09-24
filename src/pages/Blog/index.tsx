import useBlogs from "./useBlogs";
import { QueryForm } from "../../components/shared";
import { BlogSearchBar, BlogContainer, } from "../../components/Blog";
import { BlogContainerShimmer } from "../../components/Blog/BlogContainer";
import { Button } from "../../components/ui";
import styles from "./Blog.module.css"

const Blog = () => {
    const {
        blogs,
        loading,
        incrementPage,
    } = useBlogs();

    return (
        <div>
            <BlogSearchBar />
            {blogs.length === 0 && loading ? (
                <BlogContainerShimmer number={3} />
            ) : (
                <>
                    <BlogContainer blogs={blogs} />
                    {loading && <BlogContainerShimmer number={3} />}
                </>
            )}
            <div className="container flex justify-center">
                <Button radius={true} className={`${styles.showMore}`} onClick={incrementPage}>Show  more</Button>
            </div>
            <QueryForm />
        </div>
    )
}
export default Blog;