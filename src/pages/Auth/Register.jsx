import { Image, Lock, Mail, User, UserPlus } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import LoadingScreen from "../../components/LoadingScreen";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const { googleLogin, registerUser, updateProfileInfo, loading, setLoading } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const registerHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRegex = /.{6,}/;

    if (!uppercaseRegex.test(password)) {
      toast.error("Must have an Uppercase letter in the password");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      toast.error("Must have a Lowercase letter in the password");
      return;
    }
    if (!lengthRegex.test(password)) {
      toast.error("Length must be at least 6 characters");
      return;
    }

    registerUser(email, password)
      .then(() => {
        updateProfileInfo(name, photo),
          toast.success("Registration Success"),
          navigate(location.state || "/"),
          setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message), setLoading(false), navigate("/register");
      });
  };

  const googleLoginHandler = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Success"),
          setLoading(false),
          navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.message),
          setLoading(false),
          navigate(location.state || "/register");
      });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* left Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#0F5660] mb-1">
              Create Account
            </h2>
            <p className="text-gray-500 text-sm">
              Sign up to get started with HomeNest
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={registerHandler} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-medium flex items-center gap-1">
                  <User className="w-4 h-4 text-[#0F5660]" /> Full Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full focus:border-[#0F5660] focus:ring-[#0F5660]"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-medium flex items-center gap-1">
                  <Image className="w-4 h-4 text-[#0F5660]" /> Photo URL
                </span>
              </label>
              <input
                name="photoUrl"
                type="text"
                placeholder="https://your-photo-link.com"
                className="input input-bordered w-full focus:border-[#0F5660] focus:ring-[#0F5660]"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-medium flex items-center gap-1">
                  <Mail className="w-4 h-4 text-[#0F5660]" /> Email
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full focus:border-[#0F5660] focus:ring-[#0F5660]"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-medium flex items-center gap-1">
                  <Lock className="w-4 h-4 text-[#0F5660]" /> Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:border-[#0F5660] focus:ring-[#0F5660]"
              />
            </div>

            <div className="form-control mt-4">
              <button className="btn w-full bg-[#0F5660] hover:bg-[#134a51] text-white font-semibold text-base flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />{" "}
                {/* {loading ? "Registering..." : "Register"} */}
                Register
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="grow h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>

          {/* Google Register */}
          <button
            onClick={googleLoginHandler}
            type="button"
            className="btn w-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Bottom Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?
            <Link
              state={location.state}
              to="/login"
              className="text-[#0F5660] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* right Side - Image / Illustration */}
      <div className="hidden lg:flex flex-1 bg-[#0F5660] items-center justify-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=700"
          alt="Modern Apartment"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white z-10">
          <h2 className="text-4xl font-bold mb-4">Join HomeNest Today</h2>
          <p className="text-gray-200 max-w-md">
            Create an account to add your properties, manage listings, and
            connect with buyers or renters instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
