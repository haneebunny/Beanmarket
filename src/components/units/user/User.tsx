import React from "react";

export default function User({ user: { photoURL, displayName } }: any) {
  return (
    <div className="flex items-center">
      <img
        className="rounded-full w-10 h-10 mr-2"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
