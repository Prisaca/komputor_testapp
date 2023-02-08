import React from "react";

const Milestone = ({ letter }: { letter: string }) => {
  return (
    <div className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
      <h3>{letter}</h3>
    </div>
  );
};

export default Milestone;
