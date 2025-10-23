function BookingConfirmation({ onContactSupport }) {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Success Message */}
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Your flight is booked!</h1>
        <p className="text-gray-500">Confirmation details have been sent to your email</p>

        {/* Booking Reference Ticket */}
        <div className="mt-6 relative">
          <div className="bg-green-50 rounded-lg p-6 relative overflow-hidden">
            {/* Ticket cutout circles */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-50 rounded-full -ml-4"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-50 rounded-full -mr-4"></div>

            <div className="flex justify-center mb-3">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <div className="text-sm font-medium text-gray-700 mb-2">Booking Reference</div>
            <div className="text-3xl font-bold mb-4">XYZZ789</div>
            <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors">
              Confirmed
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Booking History */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-lg font-semibold text-orange-500">Booking History</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                  <div className="h-12 border-l-2 border-dashed border-gray-300"></div>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="font-semibold text-lg">SC, 18:00</div>
                    <div className="text-xs text-gray-500">11 May</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">LHU, 14:00</div>
                    <div className="text-xs text-gray-500">12 May</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">11hrs 55mins</div>
                  <div className="text-xs text-gray-500">0 change stop</div>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Confirmed</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <div className="text-sm text-gray-500 mb-1">Date</div>
                <div className="font-medium">2025-11-01</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Time</div>
                <div className="font-medium">10:15 - 08:30+1</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Airline</div>
                <div className="font-medium">Air France</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Flight</div>
                <div className="font-medium">Air France</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Duration</div>
                <div className="font-medium">10h 15m</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Baggage</div>
                <div className="font-medium">1 × 23kg checked bag included</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Passenger Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h2 className="text-lg font-semibold text-orange-500">Passenger Details</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>john@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+ 123456789O</span>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="8" width="18" height="12" rx="2" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M7 16h.01M11 16h.01" />
              </svg>
              <h2 className="text-lg font-semibold text-orange-500">Payment Summary</h2>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Base Fare</span>
                <span className="font-medium">₹ 4,165</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Taxes & Fees</span>
                <span className="font-medium">₹ 880</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">₹ 608</span>
              </div>
              <div className="flex justify-between pt-3 border-t font-semibold">
                <span>Total Paid</span>
                <span>₹ 4,437</span>
              </div>
              <div className="text-xs text-gray-500 pt-2">
                <div>Payment Method: Credit Card</div>
                <div>Transaction ID: TXNI23789456</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Options */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-center text-gray-500 mb-6">Booking options</h3>
        <div className="flex justify-center gap-3 overflow-x-auto">
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Download Ticket
          </button>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Manage Booking
          </button>
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Add to Calendar
          </button>
          <button
            onClick={onContactSupport}
            className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Contact Support
          </button>
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share Booking
          </button>
        </div>
      </div>

      {/* Complete Your Trip */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-center text-gray-700 font-semibold text-lg mb-6">Complete Your Trip</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-lg">Book Hotel</h4>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-lg">Rent Taxi</h4>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-lg">Rent Bus</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingConfirmation
