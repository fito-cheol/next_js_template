import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/"> Home </Link>
    <Link href="/search"> Search </Link>
    <Link href="/dashboard"> Dashboard </Link>
    <Link href="/server-client-render"> server-client-render </Link>
    <Link href="/ssrprops"> ssrprops </Link>
    <Link href="/staticprops"> staticprops </Link>
  </div>
);

export default Header;
