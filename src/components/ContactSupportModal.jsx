import { useState } from 'react'

function ContactSupportModal({ isOpen, onClose }) {
  const [countryCode, setCountryCode] = useState('IN')
  const [agreedToPolicy, setAgreedToPolicy] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="p-8">
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Customer query</h2>
            <p className="text-gray-600">We'd love to hear from you. Please fill out this form.</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* First name and Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 appearance-none bg-white"
                >
                  <option value="IN">IN</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="AU">AU</option>
                </select>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Include a message..."
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
              ></textarea>
            </div>

            {/* Privacy policy checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy-policy"
                checked={agreedToPolicy}
                onChange={(e) => setAgreedToPolicy(e.target.checked)}
                className="w-4 h-4 accent-gray-900 cursor-pointer"
              />
              <label htmlFor="privacy-policy" className="text-sm text-gray-700 cursor-pointer">
                You agree to our friendly{' '}
                <a href="#" className="text-gray-900 underline hover:text-black">
                  privacy policy
                </a>
                .
              </label>
            </div>

            {/* Submit button */}
            <button
              type="button"
              onClick={onClose}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                agreedToPolicy
                  ? 'bg-gray-900 hover:bg-black text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!agreedToPolicy}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSupportModal
