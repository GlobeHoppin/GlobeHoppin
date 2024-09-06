import PageNav from "../components/PageNav";

function Loginpage() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <PageNav />
      <div className="mx-auto text-gray-200">
        <div className="grid md:grid-cols-2">
          <div>Login Page</div>
          <div className="">Login Form</div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
