import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter"; // Премахваме useLocation, защото не го ползваш

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  // Изтриваме реда с const [location, setLocation], защото window.location е достъпен навсякъде директно

  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#" + id;
    }
    setIsOpen(false);
  };
