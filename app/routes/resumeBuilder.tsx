import { Link, Outlet } from "@remix-run/react";
import Header from "~/components/Custom/Header";

const ResumeBuilder = () => {
  return (
    <div>
      <Header />
      <Link to='dashboard'>Team</Link>
      <Outlet />
    </div>
  );
};

export default ResumeBuilder;
