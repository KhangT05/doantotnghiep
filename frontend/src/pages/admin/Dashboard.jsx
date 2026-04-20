import AdminLayout from '../../layouts/AdminLayout';
import { Users, UserPlus, CalendarCheck, CalendarClock, Trophy, Goal } from 'lucide-react';
import { topScorers, upcomingMatches } from '../../data/data';
import StatCard from '../../components/StatCard';

export default function Dashboard() {  
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm border-l-4 border-l-blue-600 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Trophy className="w-32 h-32 text-blue-600" />
           </div>
           <h2 className="text-2xl font-extrabold text-blue-600 tracking-tight mb-2 relative z-10">
             Welcome back, Admin! 👋
           </h2>
           <p className="text-gray-600 font-medium relative z-10">
             Here is the current status of the tournament at a glance.
           </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <StatCard title="Total Teams" value="8" icon={Users} colorClass="border-blue-200 text-blue-600" />
           <StatCard title="Total Players" value="142" icon={UserPlus} colorClass="border-blue-200 text-blue-600" />
           <StatCard title="Matches Completed" value="12" icon={CalendarCheck} colorClass="border-blue-200 text-blue-600" />
           <StatCard title="Upcoming Matches" value="4" icon={CalendarClock} colorClass="border-red-200 text-red-600" />
        </div>

        {/* Widgets section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           
           {/* Upcoming Matches */}
           <div className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                 <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <CalendarClock className="w-5 h-5 text-red-600" />
                    Upcoming Matches
                 </h3>
                 <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">View All</button>
              </div>
              <div className="p-6 flex-1 bg-gray-50/50">
                 <div className="space-y-4">
                    {upcomingMatches.slice(0, 3).map((match) => (
                       <div key={match.id} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:border-red-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-col">
                             <span className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">{match.date} • {match.time}</span>
                             <span className="text-sm font-medium text-gray-600">{match.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="font-bold text-gray-900 text-right w-20 truncate">{match.teamA}</div>
                             <div className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-black rounded-lg border border-gray-200">VS</div>
                             <div className="font-bold text-gray-900 w-20 truncate">{match.teamB}</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Top Scorers */}
           <div className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                 <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Goal className="w-5 h-5 text-blue-600" />
                    Top Scorers
                 </h3>
              </div>
              <div className="flex-1 overflow-x-auto">
                 <table className="w-full text-left whitespace-nowrap">
                   <thead>
                      <tr className="bg-gray-50/80 text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-gray-100">
                         <th className="py-4 px-6 w-16 text-center">Rank</th>
                         <th className="py-4 px-6">Player</th>
                         <th className="py-4 px-6">Team</th>
                         <th className="py-4 px-6 text-center">Goals</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                      {topScorers.map((scorer) => (
                         <tr key={scorer.id} className="hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6 text-center">
                               <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs mx-auto shadow-sm ${
                                  scorer.rank === 1 ? 'bg-red-100 text-red-700 border border-red-300' :
                                  scorer.rank === 2 ? 'bg-gray-200 text-gray-700 border border-gray-300' :
                                  scorer.rank === 3 ? 'bg-gray-100 text-gray-600 border border-gray-200' :
                                  'bg-gray-50 text-gray-500 border border-gray-200'
                               }`}>
                                 {scorer.rank}
                               </div>
                            </td>
                            <td className="py-4 px-6 font-bold text-gray-900">{scorer.name}</td>
                            <td className="py-4 px-6 text-gray-600 font-medium text-sm">{scorer.team}</td>
                            <td className="py-4 px-6 text-center font-black text-blue-600 text-lg">
                               {scorer.goals}
                            </td>
                         </tr>
                      ))}
                   </tbody>
                 </table>
              </div>
           </div>

        </div>

      </div>
    </AdminLayout>
  );
}

