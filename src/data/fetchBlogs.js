import config from "@/config";

const fetchBlogs = async (params) => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    };
    
    const request = await fetch(`${config.api}/api/blogs?populate=*&${params}`, reqOptions);
    
    if (!request.ok) {
      throw new Error(`API request failed with status ${request.status}`);
    }
    
    const response = await request.json();
    return response;
  } catch (error) {
    return { data: [] };
  }
}

export default fetchBlogs;