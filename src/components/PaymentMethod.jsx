import { useState } from 'react'
import ProcessingPaymentModal from './ProcessingPaymentModal'

function PaymentMethod({ onPaymentSuccess }) {
  const [selectedMethod, setSelectedMethod] = useState('UPI')
  const [showProcessingModal, setShowProcessingModal] = useState(false)

  const handlePayment = () => {
    setShowProcessingModal(true)

    // Show modal for 3 seconds then navigate to confirmation
    setTimeout(() => {
      setShowProcessingModal(false)
      if (onPaymentSuccess) {
        onPaymentSuccess()
      }
    }, 3000)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-[calc(100vh-10rem)]">
      <div className="flex items-center gap-2 mb-8">
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="12" rx="2" strokeWidth="2"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M7 16h.01M11 16h.01" />
        </svg>
        <h2 className="text-xl font-semibold text-orange-500">Payment Method</h2>
      </div>

      <div className="flex gap-8">
        {/* Left - Payment Options */}
        <div className="w-40 flex-shrink-0">
          <div className="space-y-2">
            <button
              onClick={() => setSelectedMethod('UPI')}
              className={`w-full text-left px-3 py-2 transition-all duration-200 border-l-4 ${
                selectedMethod === 'UPI'
                  ? 'border-orange-500 text-orange-500 font-medium'
                  : 'border-transparent text-gray-700 hover:border-gray-300'
              }`}
            >
              UPI
            </button>
            <button
              onClick={() => setSelectedMethod('Credit Card')}
              className={`w-full text-left px-3 py-2 transition-all duration-200 border-l-4 ${
                selectedMethod === 'Credit Card'
                  ? 'border-orange-500 text-orange-500 font-medium'
                  : 'border-transparent text-gray-700 hover:border-gray-300'
              }`}
            >
              Credit Card
            </button>
            <button
              onClick={() => setSelectedMethod('Debit Card')}
              className={`w-full text-left px-3 py-2 transition-all duration-200 border-l-4 ${
                selectedMethod === 'Debit Card'
                  ? 'border-orange-500 text-orange-500 font-medium'
                  : 'border-transparent text-gray-700 hover:border-gray-300'
              }`}
            >
              Debit Card
            </button>
            <button
              onClick={() => setSelectedMethod('Net Banking')}
              className={`w-full text-left px-3 py-2 transition-all duration-200 border-l-4 ${
                selectedMethod === 'Net Banking'
                  ? 'border-orange-500 text-orange-500 font-medium'
                  : 'border-transparent text-gray-700 hover:border-gray-300'
              }`}
            >
              Net Banking
            </button>
          </div>
        </div>

        {/* Middle - Payment Details */}
        <div className="flex-1">
          {selectedMethod === 'UPI' && (
            <div>
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4">Pay with UPI</h3>
                  <p className="text-sm text-gray-600 mb-4">Virtual Payment Address</p>
                  <input
                    type="text"
                    placeholder="Enter your Mobile Number or UPI ID"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
                  />
                  <button
                    onClick={handlePayment}
                    className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                  >
                    PAY ₹ 4,437 NOW
                  </button>
                </div>

                <div className="flex items-center justify-center pt-20">
                  <span className="text-gray-500 font-medium">OR</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4">Pay with QR Code</h3>
                  <p className="text-sm text-gray-600 mb-4">Don't have VPA? Scan QR with your UPI app</p>
                  <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
                    SHOW QR CODE
                  </button>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                By clicking on Pay Now. you are agreeing to our Terms & Conditions , Privacy policy, User Agreement and Covid-19 Guidelines.
              </div>
            </div>
          )}

          {selectedMethod === 'Credit Card' && (
            <div>
              <h3 className="text-lg font-semibold mb-6">Pay with Credit Card</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Credit Card Number</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name On Card</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <div className="grid grid-cols-2 gap-3">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                        <option>Month</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                        <option>Year</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="000"
                      maxLength="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="tokenize-card"
                    defaultChecked
                    className="w-5 h-5 accent-orange-500 cursor-pointer"
                  />
                  <label htmlFor="tokenize-card" className="text-sm cursor-pointer">
                    Tokenize your card as per the latest RBI guidelines
                  </label>
                </div>

                <button
                  onClick={handlePayment}
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                >
                  PAY ₹ 4,437 NOW
                </button>

                <div className="text-sm text-gray-600">
                  By clicking on Pay Now. you are agreeing to our Terms & Conditions , Privacy policy, User Agreement and Covid-19 Guidelines.
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'Debit Card' && (
            <div>
              <h3 className="text-lg font-semibold mb-6">Pay with Debit Card</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Debit Card Number</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name On Card</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <div className="grid grid-cols-2 gap-3">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                        <option>Month</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                        <option>Year</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="000"
                      maxLength="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="tokenize-debit-card"
                    defaultChecked
                    className="w-5 h-5 accent-orange-500 cursor-pointer"
                  />
                  <label htmlFor="tokenize-debit-card" className="text-sm cursor-pointer">
                    Tokenize your card as per the latest RBI guidelines
                  </label>
                </div>

                <button
                  onClick={handlePayment}
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                >
                  PAY ₹ 4,437 NOW
                </button>

                <div className="text-sm text-gray-600">
                  By clicking on Pay Now. you are agreeing to our Terms & Conditions , Privacy policy, User Agreement and Covid-19 Guidelines.
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'Net Banking' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Pay with Net Banking</h3>
              <div className="space-y-4">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
                  <option>Select Your Bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Punjab National Bank</option>
                </select>
                <button
                  onClick={handlePayment}
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                >
                  PAY ₹ 4,437 NOW
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ProcessingPaymentModal isOpen={showProcessingModal} />
    </div>
  )
}

export default PaymentMethod
