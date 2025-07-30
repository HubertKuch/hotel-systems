export default function MobileNavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        {localStorage.getItem("test")}
        <div className="drawer-content btn btn-square btn-ghost lg:hidden">
          <label
            htmlFor="admin-drawer"
            className="btn btn-primary drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}
