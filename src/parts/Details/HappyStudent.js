import React from 'react';

export default function HappyStudent({ data }) {
  return (
    <div className="mt-4">
      <p className="text-gray-600 mt-1">
        {data?.note ?? "Student's reply response"}
      </p>
      <div className="flex items-center mt-4">
        <div className="w-14 rounded-full overflow-hidden">
          <img
            src={
              data?.users?.avatar ??
              'http://media.bwamicro.com/images/1593527439774.png'
            }
            alt={data?.users?.name ?? 'students name'}
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-gray-400">
            {data?.users?.name ?? "Studen's name"}
          </h2>
          <h2 className="text-lg text-gray-400">
            {data?.users?.role ?? "Studen's role"}
          </h2>
        </div>
      </div>
    </div>
  );
}
