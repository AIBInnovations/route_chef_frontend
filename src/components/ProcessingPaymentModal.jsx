function ProcessingPaymentModal({ isOpen }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-12">
        {/* Spinner */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4">Processing Your Payment</h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-8">
          This will only take a moment. Thank you for your patience.
        </p>

        {/* Important Note */}
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-center text-gray-700">
            <span className="text-orange-500 font-semibold">Important:</span> Please do not refresh this page or use the back button while your transaction is being processed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProcessingPaymentModal
