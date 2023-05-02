import React from 'react';
import { getJson } from 'modules/api/test/sample';
import Server from './server';

interface BookInfo {
  title: string;
  description: string;
}

export default async function ServerAndClient() {
  // const data = await getJson();
  const data = { title: 'Book Title', description: 'Book Description' };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100 ">
      <h1 className="text-3xl font-bold">Server and Client Components</h1>
      <Server bookInfo={data} />
      <div className="flex w-full max-w-3xl flex-col space-y-8 rounded-lg bg-white p-4 shadow"></div>
    </div>
  );
}
