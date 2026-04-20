import { Trophy, Users, Activity, MapPin } from 'lucide-react';

export default function OverviewCard() {
    return(
        <div className="bg-navy border border-navy-light rounded-2xl p-6 relative overflow-hidden group hover:border-neon/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 rounded-bl-full z-0 group-hover:bg-neon/10 transition-colors duration-500" />
            <div className="flex items-start justify-between relative z-10">
                <div>
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Giải Đấu Hiện Tại</h3>
                    <h2 className="text-2xl font-bold text-white mb-4">IT Super Cup 2026</h2>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center">
                                <Users className="w-4 h-4 text-blue-400" />
                            </div>
                            <span><strong className="text-white">16</strong> Đội Tham Gia</span>    
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center">
                                <Activity className="w-4 h-4 text-neon" />
                            </div>
                            <span>Vòng <strong className="text-white border-b border-neon">Tứ Kết</strong> (Đang diễn ra)</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-orange-400" />
                            </div>
                            <span>Sân Bóng Mini Khu A</span>
                        </div>
                    </div>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-neon/20 to-blue-500/20 border border-neon/20 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-neon" />
                </div>
            </div>
        </div>
    )
}