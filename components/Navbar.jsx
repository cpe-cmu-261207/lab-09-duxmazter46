import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* navbar */}
      <div style={{ maxWidth: "600px" }} className="mx-auto">
        <div className="d-flex justify-content-center gap-5 fs-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/exp">
            <a>Experience</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/lab07">
            <a>Lab-07</a>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}
