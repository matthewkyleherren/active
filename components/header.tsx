"use client";

import { Logo } from "./logo";

export function Header() {
  return (
    <div className="pointer-events-none fixed inset-0 w-screen h-svh z-50 p-2 lg:p-4 flex items-end lg:items-center justify-center">
      <header
        className="w-full lg:w-auto pointer-events-auto blurred-bg"
        style={{ borderRadius: 80 }}
      >
        <div className="flex gap-2 lg:gap-8 lg:justify-between items-center uppercase p-3 lg:p-8">
          <div className="flex-none overflow-hidden whitespace-nowrap order-1 lg:order-none">
            <div className="lg:w-38 flex gap-2">
              <button className="uppercase cursor-pointer link relative z-10">
                Products
              </button>
              <a className="link" href="#">
                About us
              </a>
            </div>
          </div>
          <div className="w-full lg:w-auto flex">
            <a
              className="w-[80px] flex-none lg:w-[150px] h-auto overflow-hidden link transition-transform"
              href="#"
            >
              <Logo />
            </a>
          </div>
          <div className="flex-none overflow-hidden whitespace-nowrap order-2 lg:order-none">
            <div className="lg:w-38 flex justify-end gap-2">
              <button className="uppercase cursor-pointer link relative z-10">
                Subscribe
              </button>
              <button className="link">IT</button>
              <button className="link">
                <span className="uppercase">(0)</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
