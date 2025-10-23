import { useState } from 'react'

function BookingReview({ onContactSupport }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
          </svg>
          <h2 className="text-xl font-semibold text-orange-500">Review Your Booking</h2>
        </div>
        <div className="flex items-center gap-4">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" strokeWidth="2" fill="currentColor"/>
                <circle cx="12" cy="5" r="1" strokeWidth="2" fill="currentColor"/>
                <circle cx="12" cy="19" r="1" strokeWidth="2" fill="currentColor"/>
              </svg>
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                <button
                  className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                  </svg>
                  <span className="text-gray-700">Manage Booking</span>
                </button>
                <button
                  className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                  onClick={() => {
                    setShowMenu(false)
                    if (onContactSupport) onContactSupport()
                  }}
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-gray-700">Contact Support</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm font-medium">
          Economy | Deal Of The Day
        </div>
        <div className="text-sm text-gray-600">0 stops</div>
      </div>

      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-6 flex-1">
          <div>
            <div className="text-lg font-semibold mb-1">Mumbai</div>
            <div className="text-3xl font-bold mb-2">23:55</div>
            <div className="text-xs text-gray-500 mb-1">Mon, 29 Sep 2025</div>
            <div className="text-xs text-gray-900 font-medium">Indira Gandhi International Airport, T-1D</div>
          </div>

          <div className="flex flex-col items-center px-4 pt-4">
            <div className="text-orange-500 text-sm font-medium mb-2">2h 40m</div>
            <div className="relative w-20">
              <div className="h-0.5 bg-gray-300"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7V5z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold mb-1">New York</div>
            <div className="text-3xl font-bold mb-2">02:40</div>
            <div className="text-xs text-gray-500 mb-1">Tue, 30 Sep 2025</div>
            <div className="text-xs text-gray-900 font-medium">Chatrapati Shivaji, T-1</div>
          </div>
        </div>

        <div className="flex items-center gap-8 border-l border-gray-200 pl-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium">Paid Meal</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="14" rx="2" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2" />
              </svg>
              <span className="text-sm font-medium">15 kgs</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-700 rounded-md px-3 py-2">
              <div className="grid grid-cols-3 gap-0.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold">IndiGo</span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 mt-6">
        <svg className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        <div className="text-sm">
          <span className="font-semibold">Important Note : </span>
          <span>The Fare Rules for your flight selection have changed. Please review them before proceeding.</span>
        </div>
      </div>
    </div>
  )
}

export default BookingReview
