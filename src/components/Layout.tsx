import React, { type PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="bg-gradient-to-br">
        header
        {children}
        footer{" "}
      </div> 
    </>
  );
};

export default Layout;
