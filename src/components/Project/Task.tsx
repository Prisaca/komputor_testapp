import React from 'react'

const Task = ({
  person,
}: {
  person: {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
  };
}) => {
  return (
    <li key={person.id}>
      <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={person.imageUrl}
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <a href="#" className="focus:outline-none">
            {/* Extend touch target to entire panel */}
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="truncate text-sm text-gray-500">{person.role}</p>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Task