import React, { forwardRef } from "react";

const Input = forwardRef(({ icon: Icon, label, id, ...props }, ref) => (
  <div className="relative mb-6">
    {label && (
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
    )}
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {Icon && <Icon className="size-5 text-green-500" />}
    </div>
    <input
      ref={ref}
      id={id}
      {...props}
      className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 
                 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 
                 transition duration-200"
    />
  </div>
));

export default Input;
