'use client'

import { useState } from 'react';
import Button from './Buttons';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
  initialTitle: string;
  initialContent: string;
}

export default function EditModal({ 
  isOpen, 
  onClose, 
  onSave, 
  initialTitle, 
  initialContent 
}: EditModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, content);
  };

  return (
    <div className="fixed inset-0 bg-[#777777CC]/80 flex items-center justify-center z-50">
      <div className="bg-white opacity-100 rounded-2xl p-6 w-full max-w-xl">
        <h2 className="text-[22px] font-bold mb-6">Edit item</h2>
        
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className='mb-4'>
            <label htmlFor="title" className="block text-base font-normal mb-2">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-500 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-base font-normal mb-2">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border border-gray-500 rounded-lg py-2 px-3 w-full h-24 resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          
          <div className="flex justify-end gap-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}