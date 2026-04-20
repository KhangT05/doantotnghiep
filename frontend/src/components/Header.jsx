import { Link, useLocation } from 'react-router-dom';
import { Information } from '../data/data';

export default function Header() {
    const location = useLocation();
    
    return(
        <header className="sticky top-0 z-50 bg-[#003280] border-b border-blue-700 shadow-sm text-white">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <Link to="/" className="flex items-center gap-3">
                    <div className="">
                        <img src={Information.imgUrl} alt="" className='w-12 h-12 text-white rounded-full' />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight leading-none uppercase italic">{Information.logoTitle}</h1>
                        <p className="text-blue-100 text-xs font-semibold tracking-wider">{Information.logoSubtitle}</p>
                    </div>
                </Link>
                
                <nav className="hidden md:flex items-center gap-8 font-medium">
                    <Link to="/" className={`${location.pathname === '/' ? 'text-white font-bold' : 'text-blue-200 hover:text-white'} transition-colors duration-300`}>Trang Chủ</Link>
                    <Link to="/lich-thi-dau" className={`${location.pathname === '/lich-thi-dau' ? 'text-white font-bold' : 'text-blue-200 hover:text-white'} transition-colors duration-300`}>Lịch Thi Đấu</Link>
                    <Link to="/bang-xep-hang" className={`${location.pathname === '/bang-xep-hang' ? 'text-white font-bold' : 'text-blue-200 hover:text-white'} transition-colors duration-300`}>Bảng Xếp Hạng</Link>
                </nav>
                
                <div className="flex items-center gap-4">
                    <Link to="/dang-ky-doi-bong" className="hidden lg:inline-block bg-white text-blue-600 px-6 py-2.5 rounded-lg font-extrabold hover:bg-gray-100 transition-all duration-300 shadow-md text-sm uppercase tracking-wider mr-2">
                        Đăng Kí Đội
                    </Link>
                    <Link to="/quan-ly-giai-dau/dang-nhap" className="bg-transparent border border-white text-white px-6 py-2.5 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm uppercase tracking-wider">
                        Đăng Nhập
                    </Link>
                </div>
            </div>
        </div>
    </header>
    )
}