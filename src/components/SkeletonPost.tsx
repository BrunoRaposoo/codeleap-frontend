export default function SkeletonPost() {
  return (
    <div className="flex flex-col border border-gray-300 m-6 rounded-2xl animate-pulse">
      <header className="flex items-center justify-between bg-gray-200 w-full p-6 rounded-t-2xl">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="flex gap-4">
          <div className="h-6 w-6 bg-gray-300 rounded"></div>
          <div className="h-6 w-6 bg-gray-300 rounded"></div>
        </div>
      </header>
      <div className="p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}