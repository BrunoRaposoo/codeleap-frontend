"use client";

import Image from "next/image";
import Delete from "../../public/delete.svg";
import Edit from "../../public/edit.svg";
import { useUser } from "../hooks/useUser";
import { formatTimeAgo } from "../utils/dateUtils";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

interface PostProps {
  id: number;
  title: string;
  content: string;
  created_datetime: string;
  currentUser: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, content: string) => void;
}

export default function Post({
  id,
  title,
  content,
  created_datetime,
  currentUser,
  onDelete,
  onEdit,
}: PostProps) {
  const { username } = useUser();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const userCanEditandDelete = currentUser === username;

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const confirmDelete = () => {
    onDelete(id);
    setIsDeleteModalOpen(false);
  };

  const handleSaveEdit = (newTitle: string, newContent: string) => {
    onEdit(id, newTitle, newContent);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col border border-[#999999] m-6 rounded-2xl">
        <header className="flex items-center justify-between bg-primary w-full text-white p-4 md:p-6 rounded-t-2xl rounded-b-none">
          <h1 className="text-lg md:text-[1.375rem] font-bold">{title}</h1>
          {userCanEditandDelete && (
            <div className="flex items-center justify-center gap-2 md:gap-6">
              <button type="button" className="cursor-pointer" onClick={handleDelete}>
                <Image src={Delete} alt="Delete" />
              </button>
              <button type="button" className="cursor-pointer" onClick={handleEdit}>
                <Image src={Edit} alt="Edit" />
              </button>
            </div>
          )}
        </header>
        <div className="p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <p className="text-base md:text-ls font-bold text-[#777777]">@{username}</p>
            <span className="text-base md:text-lg font-normal text-[#777777]">
              {formatTimeAgo(created_datetime)}
            </span>
          </div>
          <div className="text-base md:text-lg font-normal">{content}</div>
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title={title}
      />
      
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveEdit}
        initialTitle={title}
        initialContent={content}
      />
    </>
  );
}
