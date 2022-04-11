import React, { ReactNode } from "react";
import { Link } from "gatsby";

const Layout = (props: { children: ReactNode }) => {
  return (
    <section>
      <header>
        <nav>
          <Link to="/"> Home</Link>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>
        <p> A footer</p>
      </footer>
    </section>
  );
};

export default Layout;
