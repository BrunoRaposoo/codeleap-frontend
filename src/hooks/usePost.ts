'use client'

import { useState, useEffect } from 'react'

export interface Post {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://dev.codeleap.co.uk/careers/')
      const data = await response.json()
      setPosts(data.results)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const createPost = async (title: string, content: string, username: string) => {
    try {
      const response = await fetch('https://dev.codeleap.co.uk/careers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          username,
        }),
      })
      
      if (response.ok) {
        fetchPosts()
        return true
      }
      return false
    } catch (error) {
      console.error('Error creating post:', error)
      return false
    }
  }

  const deletePost = async (id: number) => {
    try {
      const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        fetchPosts();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting post:', error);
      return false;
    }
  };

  const updatePost = async (id: number, title: string, content: string) => {
    try {
      const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
      
      if (response.ok) {
        fetchPosts();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating post:', error);
      return false;
    }
  };

  useEffect(() => {
    fetchPosts()
  }, [])

  return { posts, loading, fetchPosts, createPost, deletePost, updatePost }
}