import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="px-6 pt-6 pb-4">
      <h2 className="text-lg font-medium text-gray-900">Project Name</h2>
      <p className="mt-1 text-sm text-gray-600">
        An overview over all your milestones and tasks.
      </p>
      {/* <form className="mt-6 flex space-x-4" action="#">
          <div className="min-w-0 flex-1">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="Search"
              />
            </div>
          </div>
        </form> */}
    </div>
  );
};



export default ProjectHeader;
