// services/apiService.ts




export const getPosts = async ($axios:any) => {
  try {
    const response = await $axios.$get(`/posts`);
    return response;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Add other API functions as needed
