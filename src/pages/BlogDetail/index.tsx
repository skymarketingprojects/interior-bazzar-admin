import useBlogDetail from "./useBlogDetail";
import { useParams } from "react-router-dom";
import styles from "./BlogDetail.module.css"
import { QueryForm } from "../../components/Home";
import BlogDetail from "../../components/Blog/BlogDetail";
import BlogContainer, { BlogContainerShimmer } from "../../components/Blog/BlogContainer";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { loading, blog, relatedBlogs } = useBlogDetail(slug);
  if (loading) {
    return (
      <div className={`${styles.mainContainer}`}>
        <BlogDetailSHimmer />
        <BlogContainerShimmer number={3} />
      </div>
    )
  }
  if (!blog) {
    return <div className="container text-center py-[100px]">Blog not found</div>;
  }
  return (
    <>
      {loading ? <>
        <BlogDetailSHimmer />
        <BlogContainerShimmer number={3} />
      </>
        :
        <>
          <BlogDetail blog={blog} />
          {relatedBlogs?.length > 0 &&
            <>
              <div className="container">
                <h2>Explore more blogs</h2>
              </div>
              <BlogContainer blogs={relatedBlogs} />
            </>
          }
        </>
      }
      <QueryForm />
    </>
  );
};


const BlogDetailSHimmer = () => {
  return (
    <div className="container mx-auto animate-pulse grid gap-2  ">

      {/* Title Shimmer */}
      <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

      {/* Cover Image Shimmer */}
      <div className="w-full h-64 bg-gray-300 rounded"></div>

      {/* Author & Meta Info */}
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="flex flex-col gap-1">
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
            <div className="h-2 w-16 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="h-2 w-12 bg-gray-300 rounded"></div>
      </div>

      {/* Content Shimmer */}
      <div className="grid gap-2">
        <div className="h-6 w-full bg-gray-300 rounded"></div>
        <div className="h-6 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-6 w-4/6 bg-gray-300 rounded"></div>
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
        <div className="h-6 w-full bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
