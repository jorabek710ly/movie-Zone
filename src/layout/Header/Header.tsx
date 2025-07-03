import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  VideoCameraOutlined,
  BookOutlined,
  SearchOutlined,
  MenuOutlined,
  SunFilled,
  MoonFilled,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import CustomButton from "@/components/button/CustomButton";
import Navlogo from "@/assets/img/EMBLEM.svg";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const toggleDrawer = () => setOpen(!open);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* LOGO + NAME */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={Navlogo}
            alt="Logo"
            className="w-[40px] h-auto"
          />
          <span className="text-xl font-bold text-[#C61F1F] dark:text-white">
            MovieZone
          </span>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavItem to="/" label="Home" icon={<HomeOutlined />} />
          <NavItem to="/movies" label="Movies" icon={<VideoCameraOutlined />} />
          <NavItem to="/saved" label="Saved" icon={<BookOutlined />} />
          <NavItem to="/search" label="Search" icon={<SearchOutlined />} />
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-[#C61F1F] transition"
          >
            {isDark ? <SunFilled /> : <MoonFilled />}
          </button>
          <CustomButton />
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 22, color: "#C61F1F" }} />}
            onClick={toggleDrawer}
          />
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={open}
        className="md:hidden"
      >
        <div className="flex flex-col gap-4">
          <DrawerLink to="/" label="Home" icon={<HomeOutlined />} close={toggleDrawer} />
          <DrawerLink to="/movies" label="Movies" icon={<VideoCameraOutlined />} close={toggleDrawer} />
          <DrawerLink to="/saved" label="Saved" icon={<BookOutlined />} close={toggleDrawer} />
          <DrawerLink to="/search" label="Search" icon={<SearchOutlined />} close={toggleDrawer} />

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-base mt-4 text-gray-700 dark:text-gray-300"
          >
            {isDark ? <SunFilled /> : <MoonFilled />} Toggle Theme
          </button>

          <CustomButton />
        </div>
      </Drawer>
    </header>
  );
};

const NavItem = ({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center gap-1 ${
        isActive ? "text-[#C61F1F]" : "text-gray-500 dark:text-gray-400"
      } hover:text-[#C61F1F]`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const DrawerLink = ({
  to,
  label,
  icon,
  close,
}: {
  to: string;
  label: string;
  icon: React.ReactNode;
  close: () => void;
}) => (
  <NavLink
    to={to}
    onClick={close}
    className="flex items-center gap-2 text-gray-800 dark:text-gray-200"
  >
    {icon}
    {label}
  </NavLink>
);

export default React.memo(Header);
