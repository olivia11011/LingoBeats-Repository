import React, { useRef } from "react";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  return (
    <div className="flex flex-col items-center w-11/12 max-w-3xl p-6 bg-gray-900 bg-opacity-80 rounded-xl shadow-lg sm:p-8 md:p-10 lg:p-12">
      <video ref={videoRef} src={src} className="w-full rounded-lg" controls />

      <button className="mt-6 px-6 py-1 text-white border-2 border-white rounded-lg transition-all lg:px-8 lg:py-2 lg:text-lg hover:bg-white hover:text-gray-900">
        Take Quiz
      </button>
    </div>
  );
}
