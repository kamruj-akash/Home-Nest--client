import { Lock, LogIn, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { googleLogin, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const googleLoginHandler = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Success"),
          setLoading(false),
          navigate(location.state || "/");
      })
      .catch((err) => console.log(err));
  };

  const emailLoginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Left Side - Image / Illustration */}
      <div className="hidden lg:flex flex-1 bg-[#0F5660] items-center justify-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Home Illustration"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white z-10">
          <h2 className="text-4xl font-bold mb-4">Welcome Back to HomeNest</h2>
          <p className="text-gray-200 max-w-md">
            Sign in to explore exclusive listings and manage your properties
            effortlessly.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#0F5660] mb-1">Login</h2>
            <p className="text-gray-500 text-sm">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form Fields */}
          <form onClick={emailLoginHandler} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-medium flex items-center gap-1">
                  <Mail className="w-4 h-4 text-[#0F5660]" /> Email
                </span>
              </label>
              <input
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
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:border-[#0F5660] focus:ring-[#0F5660]"
              />
            </div>

            <div className="form-control mt-4">
              <button
                type="button"
                className="btn w-full bg-[#0F5660] hover:bg-[#134a51] text-white font-semibold text-base flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" /> Login
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="grow h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
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
            Don’t have an account?{" "}
            <Link
              state={location.state}
              to="/register"
              className="text-[#0F5660] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
