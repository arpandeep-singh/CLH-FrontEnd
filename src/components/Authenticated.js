import React from "react";

const Authenticated = ({ children }) => {
  const isAuthenticated = React.useMemo(
    () => localStorage.getItem("token"),
    []
  );

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <>
      <p>
        Please Login <a href="/login">Go to login</a>
      </p>
    </>
  );
};

export default Authenticated;
