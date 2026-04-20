import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  
  
  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#" + id;
    }
    setIsOpen(false);
  };
