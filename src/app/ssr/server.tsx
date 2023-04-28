interface Props {
  bookInfo: BookInfo;
}
interface BookInfo {
  title: string;
  description: string;
}
export default function Server({ bookInfo }: Props) {
  return (
    <div className='flex flex-col rounded bg-slate-100 text-center'>
      <h2>Server</h2>
      {bookInfo ? (
        <div>
          <h2>Title: {bookInfo.title}</h2>
          <h3>Description: {bookInfo.description}</h3>
        </div>
      ) : (
        <div>
          <h3>No Data </h3>
        </div>
      )}
    </div>
  );
}
