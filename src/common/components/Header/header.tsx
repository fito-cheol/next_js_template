import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href='/'> Home </Link>
      <Link href='/search'> Search </Link>
      <Link href='/dashboard'> Dashboard </Link>
      <Link href='/server-client-render'> server-client-render </Link>
      <Link href='/ssrprops'> ssrprops </Link>
      <Link href='/staticprops'> staticprops </Link>
    </div>
  );
}
