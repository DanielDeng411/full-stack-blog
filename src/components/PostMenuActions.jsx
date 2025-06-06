const PostMenuActions = () => {
  return (
    <div className=''>
        <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
            >
                <path
                    d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
            <span className="ml-1">Save this post</span>
        </div>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-red-600 hover:text-red-800 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6 7h12M9 7V5h6v2m2 0v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7h12z" />
        </svg>
            <span>Delete this post</span>
        </div>
    </div>
  )
}

export default PostMenuActions