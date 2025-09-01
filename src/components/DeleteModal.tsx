'use client'

import Button from "./Buttons";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export default function DeleteModal({ isOpen, onClose, onConfirm, title }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#777777CC]/80 flex items-center justify-center z-50">
      <div className="bg-white opacity-100 rounded-2xl p-6 w-full max-w-xl">
        <h2 className="text-[22px] font-bold mb-10">
          Are you sure you want to delete this item?
        </h2>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}