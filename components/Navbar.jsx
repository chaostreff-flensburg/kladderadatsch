import Link from "next/link";
import { Home, Info } from "lucide-react";

import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <ThemeSwitch />
        </div>
        <Link href="/">
          <a>
            <Home size="32" color="var(--text-color-light)" />
          </a>
        </Link>
        <Link href="/info">
          <a>
            <Info size="32" color="var(--text-color-light)" />
          </a>
        </Link>
      </nav>

      <style jsx>{`
        nav {
          position: fixed;
          bottom: 4px;
          left: 50%;
          transform: translate(-50%, -50%);

          display: flex;
          justify-content: space-evenly;

          min-width: 200px;
          padding: 6px 6px;
          border-radius: 16px;
          background-color: var(--bg-color);
          box-shadow: var(--shadow-l);
        }
        nav > * {
          margin: 6px 12px;
        }
      `}</style>
    </>
  );
}

export default Navbar;
