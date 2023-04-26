import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/"> Home </Link>
    <Link href="/search"> Search </Link>
    <Link href="/dashboard"> Dashboard </Link>
  </div>
);

export default Header;
