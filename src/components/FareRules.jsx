import { useState } from 'react'

function FareRules({ onProceedToPayment }) {
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleProceedToPayment = () => {
    if (acceptedTerms && onProceedToPayment) {
      onProceedToPayment()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
        </svg>
        <h2 className="text-xl font-semibold text-orange-500">Important Note Regarding Your Fare</h2>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Fare Rules</h3>

        <ul className="space-y-4 text-gray-700 list-disc list-outside pl-5">
          <li>The fare you have selected for travel from New Delhi to Mumbai falls under the special category of Group Promotional Fares.</li>
          <li>This fare type is non-refundable, non-changeable, and non-cancellable.</li>
          <li>Once your booking is confirmed, your name will be displayed on the airline's website 12 to 24 hours prior to the departure time, along with the names of other travelers in the group PNR.</li>
          <li>Web check-in for your ticket can be completed the day before your journey, starting at 8 PM. We kindly advise you to verify the terminal information with your boarding pass.</li>
        </ul>

        <div className="flex items-center gap-3 mt-6">
          <input
            type="checkbox"
            id="accept-terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="w-5 h-5 accent-orange-500 cursor-pointer"
          />
          <label htmlFor="accept-terms" className="text-base cursor-pointer">
            I understand and confirm that I have read all the points.
          </label>
        </div>

        <button
          onClick={handleProceedToPayment}
          className={`px-8 py-3 rounded-lg font-medium text-white transition-colors ${
            acceptedTerms
              ? 'bg-gray-800 hover:bg-gray-900'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!acceptedTerms}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default FareRules
