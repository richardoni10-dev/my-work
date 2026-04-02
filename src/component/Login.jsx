import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberEmail, setRememberEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted:', { email, password, rememberEmail });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}

      <header className="bg-[#DA291C]">
        <div className="px-6 py-4">
          <div className="flex items-center gap-2">
            <svg 
              className="w-8 h-8 text-white" 
              viewBox="0 0 40 40" 
              fill="currentColor"
            >
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="20" cy="20" r="8" fill="currentColor"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold tracking-tight">ROGERS</span>
              <span className="text-white/90 text-xs">together with <span className="font-semibold">Shaw</span>)</span>
            </div>
          </div>
        </div>
        
        {/* NAVIGATION BAR*/}

        <nav className="bg-black px-6 py-3">
          <div className="flex items-center gap-4 text-white text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Business</a>
             {/* <span className="text-gray-500">|</span>
             <a href="#" className="hover:text-gray-300 transition-colors">Shop</a>
             <span className="text-gray-500">|</span>
             <a href="#" className="hover:text-gray-300 transition-colors">Support</a>
              <span className="text-gray-500">|</span>
              <a href="#" className="hover:text-gray-300 transition-colors"> MyRogers (Shaw)</a> */}


          </div>
        </nav>
      </header>

      {/* BODY */}

      <main className="flex justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Sign in to access your email
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL*/}
            <div>
              <input
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DA291C] focus:border-transparent transition-all"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
  />
            </div>

            {/* PASSWORD*/}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DA291C] focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>

            {/* REMEMBER ME */}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberEmail}
                onChange={(e) => setRememberEmail(e.target.checked)}
                className="w-5 h-5 border-2 border-gray-300 rounded text-[#DA291C] focus:ring-[#DA291C] focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="remember" className="ml-3 text-gray-700 text-sm cursor-pointer select-none">
                Remember my email
              </label>
            </div>

            {/* SIGN IN BUTTON */}

            <button
              type="submit"
              className="w-full bg-[#ee1414] hover:bg-[#E06060] text-white font-medium py-4 px-6 rounded-sm transition-colors duration-200"
            >
              Sign in
            </button>
          </form>

          {/* SUPPORT LINKS */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center space-y-4">
            <div>
              <p className="text-gray-900 font-medium mb-1">Having trouble?</p>
              <a 
                href="#" 
                className="text-[#0066CC] hover:underline text-sm font-medium"
              >
                Support: How To Reset My Password
              </a>
            </div>
            
            <div>
              <p className="text-gray-900 font-medium mb-1">Already know how?</p>
              <a 
                href="#" 
                className="text-[#0066CC] hover:underline text-sm font-medium"
              >
                Reset Password on MyRogers (Shaw)

              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;