function FareDetails() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Fare Details</h3>
        <button className="text-sm text-orange-500 hover:underline">View Fare Rules</button>
      </div>

      <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Base Fare (1 Traveller)</span>
            <button>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <span className="text-sm font-medium">₹ 4,165</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Fee & Surcharges</span>
            <button>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <span className="text-sm font-medium">₹ 880</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Discount</span>
            <button>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <span className="text-sm font-medium text-green-600">₹ 608</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
        <span className="font-semibold">Total Fare</span>
        <span className="font-semibold">₹ 4,437</span>
      </div>

      <div className="flex justify-between items-center bg-orange-50 px-4 py-3 rounded-lg">
        <span className="font-semibold">Your Pay</span>
        <span className="text-xl font-bold">₹ 4,437</span>
      </div>
    </div>
  )
}

export default FareDetails
