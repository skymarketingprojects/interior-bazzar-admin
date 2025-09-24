import { useEffect, useState } from "react";
import type { BlogType } from "../../types/global";
import { BlogService } from "../../api/modules/blog";
import { logger } from "../../utils/logger";
import { useAlert } from "../../context/AlertContext";
const useBlogs = () => {
  const { showAlert } = useAlert();
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await BlogService.getBlogs(pageNo);
      if (!res.response) {
        setBlogs([]);
        return;
      }
      setBlogs((prev) =>
        pageNo === 1 ? res.data.blogs : [...prev, ...res.data.blogs]
      );
      setHasNext(res.data.hasNext);
      setTotalPages(res.data.totalPage);
    } catch (e) {
      logger.error("Error fetching blogs: ", e);
    } finally {
      setLoading(false);
    }
  };

  const incrementPage = () => {
    if (hasNext) {
      setPageNo((prev) => prev + 1);
    } else {
      showAlert("No more blogs", "info");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [pageNo]);

  return { blogs, loading, totalPages, pageNo, incrementPage };
};

export default useBlogs;
