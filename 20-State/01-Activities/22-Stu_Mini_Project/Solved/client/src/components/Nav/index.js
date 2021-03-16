import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Your personal CMS
      </a>
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
