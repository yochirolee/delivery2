import Head from "next/head";
import NavBar from "../../components/navBar/navBar";

export default function Header() {
  return (
    <nav className="flex  fixed w-full justify-between flex-wrap bg-gray-700 p-2 ">
      <Head></Head>

      <NavBar />
    </nav>
  );
}
