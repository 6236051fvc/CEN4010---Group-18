import React from "react";

function Footer() {
  return (
    <footer className="w-full py-4">
      <div className="container px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} InstaFlash. All rights reserved. Developed By: Jawad, Daniella, Julian and Christopher
        </p>
      </div>
    </footer>
  );
}

export default Footer;