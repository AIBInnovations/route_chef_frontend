function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <span className="text-orange-500">Route</span>
          <span className="text-gray-800">chef</span>
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-medium">
          PA
        </div>
      </div>
    </header>
  )
}

export default Header
