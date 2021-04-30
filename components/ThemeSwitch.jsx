import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeSwitch() {
  const [darkmode, setDarkmode] = useState(false);

  // set saved theme or system theme on initial load
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("darkmode")) != undefined) {
      toggleTheme(JSON.parse(localStorage.getItem("darkmode")));
    }
    else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches 
    ) {
      setDarkmode(true)
    }
  }, []);

  useEffect(() => {
    if (darkmode === true) {
      document.documentElement.setAttribute("prefers-color-scheme", "dark");
    } else {
      document.documentElement.setAttribute("prefers-color-scheme", "light");
    }
  }, [darkmode]);

  function toggleTheme(theme) {
    localStorage.setItem("darkmode", theme);
    setDarkmode(theme);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          name="darkmode"
          value={darkmode}
          onClick={() => toggleTheme(!darkmode)}
        />
        {darkmode ? (
          <Sun size="32" color="var(--text-color-light)" />
        ) : (
          <Moon size="32" color="var(--text-color-light)" />
        )}
      </label>

      <style jsx>{`
        label {
          cursor: pointer;
        }
        input {
          display: none;
        }
      `}</style>
    </>
  );
}

export default ThemeSwitch;
