import AsideAdmin from '../pages/admin/AsideAdmin';

export default function AdminLayout({ children }) {
  
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900 font-sans">
      <AsideAdmin />

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-white border-b border-gray-200 px-4 md:px-8 flex items-center justify-between shrink-0 shadow-sm">
          <h1 className="text-lg md:text-xl font-bold text-blue-600 hidden sm:block">Tournament Management</h1>
          <div className="flex-1 sm:hidden"></div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
               <p className="text-sm font-bold text-gray-900 leading-tight">Admin User</p>
               <p className="text-xs text-gray-500">Manage System</p>
             </div>
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 border border-blue-200 shadow-sm">
               AD
             </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-4 md:p-8 relative">
           {children}
        </div>
      </main>
    </div>
  );
}
