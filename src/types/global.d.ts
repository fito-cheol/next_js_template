// https://bobbyhadz.com/blog/typescript-make-types-global
// To declare global types in TypeScript:

// Create a global.d.ts file and declare types in the global namespace.
// Add types or interfaces that need to be globally accessible.
// Make the file a module by using export {}.
declare global {
  interface VideosListReturn {
    kind: string;
    etag: string;
    items: VideoResource[];
    nextPageToken: string;
    prevPageToken: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
  }
}
export {};
