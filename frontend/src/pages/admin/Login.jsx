import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login redirect
    navigate('/quan-ly-giai-dau');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Stadium Background with Dark Tint Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518605368461-1ee7e1611b81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      >
        {/* Dark semi-transparent tint */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Back to Home Link */}
      <Link to="/" className="absolute top-6 left-6 z-20 flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-700/50 backdrop-blur-md">
         <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
      </Link>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        
        {/* Top Accent Bar */}
        <div className="h-2 w-full bg-linear-to-r from-emerald-500 to-blue-600"></div>
        
        <div className="p-8 sm:p-10">
          
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl border-2 border-emerald-500/20 flex items-center justify-center shadow-inner mb-4">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">Admin Portal</h2>
            <p className="text-sm font-medium text-slate-500 mt-1 text-center">Hệ thống quản lý Giải bóng đá IT</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-slate-700">Tài khoản / Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder="admin@khoait.edu.vn" 
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-slate-700">Mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••" 
                  className="block w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all"
              >
                Đăng Nhập
              </button>
            </div>
            
            <div className="flex items-center justify-center pt-4">
              <a href="#" className="font-semibold text-sm text-slate-500 hover:text-blue-600 transition-colors">
                Bạn quên mật khẩu?
              </a>
            </div>
          </form>
          
        </div>
        
        {/* Footer info inside card */}
        <div className="bg-slate-50 border-t border-slate-100 py-4 text-center">
           <p className="text-xs text-slate-400 font-medium font-sans">
             Chỉ dành riêng cho Ban tổ chức giải đấu.
           </p>
        </div>
      </div>
    </div>
  );
}
