export default function StatCard({ title, value, icon: Icon, colorClass }) {
    return(
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
            <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{title}</p>
                <p className="text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">{value}</p>
            </div>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-slate-50 border ${colorClass} transition-transform group-hover:scale-110`}>
                <Icon className="w-7 h-7" />
            </div>
        </div>
    )
}