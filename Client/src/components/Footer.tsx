import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="p-4 text-center text-xs md:text-sm md:fixed relative bottom-0 right-0 left-0">
        © {new Date().getFullYear()} Rajakumaran
      </footer>
    </div>
  );
};

export default Footer;
