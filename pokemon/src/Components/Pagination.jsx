export const Pagination = ({ props }) => {
  return (
    <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{props.showedFirst}</span> to <span className="font-medium">{props.showedLast}</span> of{" "}
          <span className="font-medium">{props.total}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <a
          onClick={props.prev}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:cursor-pointer"
        >
          Previous
        </a>
        <p className="text-sm text-gray-700  px-4 py-2 ">
          Page: <span className="font-medium">{props.page}</span>
        </p>
        <a
          onClick={props.next}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:cursor-pointer "
        >
          Next
        </a>
      </div>
    </nav>
  );
};
