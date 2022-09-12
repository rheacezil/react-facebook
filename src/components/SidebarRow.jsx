import React from "react";

export default function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <img
          className="rounded-full"
          src={src}
          width={40}
          height={40}
          alt={title}
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      {title && <p className="hidden sm:inline-flex font-medium">{title}</p>}
    </div>
  );
}
