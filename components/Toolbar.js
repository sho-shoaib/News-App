import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import useWindowSize from "./getWindowDimensions";

const Toolbar = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className='max-w-screen-2xl p-5 border-b-2 relative bg-white'
        style={{ zIndex: "999" }}
      >
        <div className='mx-auto max-w-6xl flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>NewsApp</h1>
          {width <= 450 ? (
            <div
              onClick={() => setOpen((prev) => !prev)}
              className='rounded-full flex justify-center items-start p-2 hover:bg-neutral-100 transition active:bg-transparent'
            >
              <RxHamburgerMenu className='text-2xl' />
            </div>
          ) : (
            <div className='flex items-end gap-6'>
              <Link href='/'>Home</Link>
              <Link href='/feed/1'>Feed</Link>
              <Link href='/eom'>EOM</Link>
              <Link
                href='https://www.linkedin.com/in/shoaib-shaikh-658a62232/'
                target='_blank'
              >
                LinkedIn
              </Link>
            </div>
          )}
        </div>
      </nav>
      {width < 440 && (
        <div
          className={`max-w-screen-2xl p-5 border-b-2 ${
            open ? "translate-y-0" : "-translate-y-20"
          } transition`}
        >
          <div className='mx-auto max-w-6xl flex justify-center items-center'>
            <div className='flex items-end gap-6'>
              <Link href='/'>Home</Link>
              <Link href='/feed/1'>Feed</Link>
              <Link href='/eom'>EOM</Link>
              <Link
                href='https://www.linkedin.com/in/shoaib-shaikh-658a62232/'
                target='_blank'
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toolbar;
