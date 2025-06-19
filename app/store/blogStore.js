import { create } from 'zustand';

const useBlogStore = create((set) => ({
  currentBlog: null,
  setCurrentBlog: (blog) => set({ currentBlog: blog }),
}));

export default useBlogStore;
