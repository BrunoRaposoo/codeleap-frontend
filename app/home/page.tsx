'use client'

import Button from "@/src/components/Buttons";
import Post from "@/src/components/Post";
import { useUser } from "@/src/hooks/useUser";
import { usePosts } from "@/src/hooks/usePost";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logout from "../../public/logout.svg"
import SkeletonPost from "@/src/components/SkeletonPost";
import Image from "next/image";

export default function Home() {
  const [title, setTile] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const { username, saveUsername } = useUser()
  const { posts, loading, createPost, deletePost, updatePost } = usePosts()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(title.trim() && content.trim()) {
      const success = await createPost(title, content, username)
      if(success) {
        setTile('')
        setContent('')
      }
    }
  }

    const handleLogout = () => {
      saveUsername('')
      router.push('/sign-up')
    }

  const disableButton = !title.trim() && !content.trim();

  const handleDeletePost = async (id: number) => {
    await deletePost(id);
  };

  const handleEditPost = async (id: number, title: string, content: string) => {
    await updatePost(id, title, content);
  };

  return (
    <div className="bg-white flex flex-col w-[50rem] m-auto">
      <header className="flex items-center justify-between bg-primary w-full text-white text-[1.375rem] font-bold py-7 px-9">
        <h1>CodeLeap Network</h1>
        <Button type="button" onClick={handleLogout}>
          <Image src={Logout} alt="Logout" width={20} height={20}/>
        </Button>
      </header>
      <div className="flex flex-col p-6">
        <div className="border border-#999999 rounded-2xl p-6">
          <h1 className="text-[1.375rem] font-bold text-black mb-6">What’s on your mind?</h1>
          <form onSubmit={handleSubmit} className="flex flex-col text-black">
            <label htmlFor="title" className="text-base font-normal mb-2">Title</label>
            <input 
              type="text" 
              className="border border-gray-500 rounded-lg py-2 px-3 mb-6 focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Hello world"
              value={title}
              onChange={(e) => setTile(e.target.value)}
            />
            <label htmlFor="content" className="text-base font-normal mb-2">Content</label>
            <textarea
              id="content"
              placeholder="Content here"
              className="border border-gray-500 rounded-lg py-2 px-3 mb-6 focus:outline-none focus:ring-1 focus:ring-primary h-24 resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="self-end">
              <Button type="submit" disabled={disableButton}>
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div>
        {loading ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonPost key={index} />
            ))}
          </>
        ) : (
          posts.sort((a, b) => new Date(b.created_datetime).getTime() - new Date(a.created_datetime).getTime()).map((post) =>(
            <Post 
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              created_datetime={post.created_datetime}
              currentUser={username}
              onDelete={handleDeletePost}
              onEdit={handleEditPost}
            />
          ))
        )}
      </div>
    </div>
  )
}