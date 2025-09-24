import { useEffect, useState } from "react";
import type { BlogType } from "../../types/global";
import { getIdFromBlogSlug } from "../../utils/helper/urlFormatter";
import { BlogService } from "../../api/modules/blog";
import { logger } from "../../utils/logger";

const useBlogDetail = (slug: string | undefined) => {
  const [loading, setLoading] = useState(true);
  const blogId = getIdFromBlogSlug(slug!);
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);
  const fetchBlog = async () => {
    try {
      if (!blogId) {
        return;
      }
      setLoading(true);
      const res = await BlogService.getBlogById(blogId);
      if (!res.response) {
        setBlog(null);
        setRelatedBlogs([]);
      }

      setBlog(res.data.blog);
      // setRelatedBlogs(res.data.relatedBlogs);
    } catch (e) {
      logger.error("Error fetching blog: ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!slug || !blogId) return;
    fetchBlog();
  }, [blogId]);

  return { blog, relatedBlogs, loading };
};
export default useBlogDetail;
