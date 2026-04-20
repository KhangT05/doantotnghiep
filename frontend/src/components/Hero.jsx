import { Activity, CalendarDays, Users } from "lucide-react";
import { HeroData } from "../data/data";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative bg-white pt-16 pb-20 overflow-hidden border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 text-red-600 font-medium text-sm tracking-wide">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>{HeroData.active}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-600 leading-[1.1] uppercase italic tracking-tight">
            {HeroData.textNormal} <br />
            <span className="text-gray-900">
              {HeroData.textHighlight}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
            {HeroData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link to="/lich-thi-dau" className="w-full sm:w-auto px-8 py-4 bg-[#003280] text-white font-black rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wide text-sm shadow-md">
              <CalendarDays className="w-5 h-5" />
              Lịch Thi Đấu
            </Link>
            <Link to="/bang-xep-hang" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 border border-gray-200 uppercase tracking-wide text-sm group shadow-sm">
              <Users className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
              Bảng Xếp Hạng
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}