import { useState } from 'react'
import Header from './components/Header'
import BookingReview from './components/BookingReview'
import TravellerDetails from './components/TravellerDetails'
import FareRules from './components/FareRules'
import FareDetails from './components/FareDetails'
import PaymentMethod from './components/PaymentMethod'
import BookingConfirmation from './components/BookingConfirmation'
import ContactSupportModal from './components/ContactSupportModal'

function App() {
  const [currentPage, setCurrentPage] = useState('booking') // 'booking', 'payment', or 'confirmation'
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleProceedToPayment = () => {
    setCurrentPage('payment')
  }

  const handlePaymentSuccess = () => {
    setCurrentPage('confirmation')
  }

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'booking' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <BookingReview onContactSupport={openContactModal} />
              <TravellerDetails />
              <FareRules onProceedToPayment={handleProceedToPayment} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FareDetails />
            </div>
          </div>
        ) : currentPage === 'payment' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <PaymentMethod onPaymentSuccess={handlePaymentSuccess} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FareDetails />
            </div>
          </div>
        ) : (
          <BookingConfirmation onContactSupport={openContactModal} />
        )}
      </div>

      {/* Contact Support Modal */}
      <ContactSupportModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  )
}

export default App
