import { Link } from "@remix-run/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

const Pagination = ({ currentPage, totalPages, baseUrl }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className='flex justify-center mt-8'>
      <div className='flex items-center'>
        <Link
          to={`${baseUrl}?page=${Math.max(1, currentPage - 1)}`}
          className='w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white mr-2 hover:bg-red-600 transition-colors duration-200'
        >
          <span className='sr-only'>Previous</span>
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </Link>

        <div className='flex items-center bg-gray-100 rounded-full px-2 py-1'>
          {pages.map((page) => (
            <Link
              key={page}
              to={`${baseUrl}?page=${page}`}
              className={`w-8 h-8 flex items-center justify-center rounded-full mx-1 ${
                page === currentPage
                  ? "bg-coral-500 text-[#9d303c] font-bold"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {page}
            </Link>
          ))}
          {totalPages > 11 && <span className='mx-1'>...</span>}
        </div>

        <Link
          to={`${baseUrl}?page=${Math.min(totalPages, currentPage + 1)}`}
          className='w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white ml-2 hover:bg-red-600 transition-colors duration-200'
        >
          <span className='sr-only'>Next</span>
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Pagination;
