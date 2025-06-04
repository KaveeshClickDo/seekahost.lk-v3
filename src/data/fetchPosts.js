import config from "@/config";

const fetchPosts = async (params) => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    };
    
    const populateParams = [
      'populate[postPrimary][populate]=*',
      'populate[postMetadata][populate]=*',
      'populate[authorDetails][populate]=*'
    ].join('&');
    
    const request = await fetch(`${config.api}/api/posts?${populateParams}&${params}`, reqOptions);
    
    if (!request.ok) {
      throw new Error(`API request failed with status ${request.status}`);
    }
    
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: [] };
  }
}

export default fetchPosts;