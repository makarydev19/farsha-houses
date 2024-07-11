"use client";

import Link from "next/link";
import Image from "next/image";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useContext } from "react";
import ThemeContext from "@/context/themeContext";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  console.log(session);
  return (
    <header className="py-10 px-20 max-sm:px-10 mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-tertiary-light">
          {darkTheme ? (
            <Image
              src={`/FarshaProfilePic-removebg-preview (1).png`}
              alt=""
              width={100}
              height={100}
            />
          ) : (
            <Image
              src={`/output-onlinepngtools1.png`}
              alt=""
              width={100}
              height={100}
            />
          )}
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="w-10 h-19 rounded-full overflow-hidden">
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className="scale-animation img"
                    />
                  </div>
                ) : (
                  <FaUserCircle className="cursor-pointer size-7" />
                )}
              </Link>
            ) : (
              <Link href="/auth">
                <FaUserCircle className="cursor-pointer size-7" />
              </Link>
            )}
          </li>
          <li className="ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer ml-4 size-7"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer ml-4 size-7"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>

      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all mx-7">
          <Link href="/rooms">Houses</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
