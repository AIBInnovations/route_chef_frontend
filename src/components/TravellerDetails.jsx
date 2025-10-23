function TravellerDetails() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h2 className="text-xl font-semibold text-orange-500">Enter Traveller Details</h2>
      </div>

      {/* Contact Details */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
        <div className="flex gap-6">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                  <option>+91</option>
                </select>
              </div>
              <div className="col-span-9">
                <input
                  type="tel"
                  placeholder="990 470 3101"
                  defaultValue="990 470 3101"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
          <div className="w-96 flex-shrink-0">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 h-full">
              <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2"/>
                <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2"/>
              </svg>
              <div className="text-sm">
                <span className="font-semibold">Important Note :</span>
                <p className="mt-1">Your booking details will be sent to this email address and mobile number.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adult 1 */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Adult 1</h3>
        <div className="flex gap-6">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                <option>Title</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
              </select>
              <input
                type="text"
                placeholder="First & Middle Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <div className="w-96 flex-shrink-0">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 h-full">
              <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2"/>
                <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2"/>
              </svg>
              <div className="text-sm">
                <span className="font-semibold">Important Note :</span>
                <p className="mt-1">Please ensure that the names of the passengers on the travel documents is the same as on their government issued identity proof.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors"
      >
        Continue
      </button>
    </div>
  )
}

export default TravellerDetails
