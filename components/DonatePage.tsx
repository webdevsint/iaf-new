import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const DonatePage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const bkashNumber = "017XXXXXXXX";
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(bkashNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const amount = formData.get('amount');
    const trxId = formData.get('trxid');
    const name = formData.get('name');
    
    // Navigate to confirmation page with state
    navigate('/donation-confirmation', {
      state: {
        donationSuccessful: true,
        amount: amount,
        trxId: trxId,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      }
    });
  };

  return (
    <div className="bg-background-light flex flex-col min-h-screen">
      {/* Header */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            alt="Helping hands in Wahedpur"
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215224/infrastructure_1_jsdlbo.webp"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 header-light-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
              Support Our Mission
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
              Your contribution directly transforms lives in Wahedpur, building a foundation for sustainable growth and community empowerment.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Donation Form */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Make a Donation</h2>
                  <p className="text-gray-600 text-sm">Fill out the form below to process your secure donation.</p>
                </div>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide" htmlFor="custom_amount">Donation Amount (BDT)</label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="text-gray-500 font-bold text-lg">৳</span>
                      </div>
                      <input 
                        className="block w-full rounded-xl border-gray-300 pl-10 pr-16 focus:border-primary focus:ring-primary py-4 bg-gray-50 text-gray-900 text-lg font-bold placeholder:text-gray-400 placeholder:font-normal" 
                        id="custom_amount" 
                        min="1" 
                        name="amount" 
                        placeholder="Enter amount to contribute" 
                        required 
                        type="number"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-400 font-bold text-sm tracking-widest">BDT</span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 italic">Every Taka counts towards a better future for Wahedpur.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="name">Full Name</label>
                      <input className="w-full rounded-lg border-gray-300 bg-gray-50 py-3 px-4 text-gray-900 focus:border-primary focus:ring-primary shadow-sm" id="name" name="name" placeholder="John Doe" required type="text"/>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">Email Address</label>
                      <input className="w-full rounded-lg border-gray-300 bg-gray-50 py-3 px-4 text-gray-900 focus:border-primary focus:ring-primary shadow-sm" id="email" name="email" placeholder="you@example.com" required type="email"/>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-icons text-bkash-pink">account_balance_wallet</span>
                      <h3 className="font-bold text-gray-800 text-lg">bKash Send Money</h3>
                    </div>
                    <div className="text-sm text-gray-600 mb-6 space-y-2">
                      <p>Please Send Money to the following bKash Personal number:</p>
                      <div className="flex items-center gap-3 bg-white p-3 rounded border border-gray-200 w-fit">
                        <span className="font-mono font-bold text-lg text-gray-900">{bkashNumber}</span>
                        <button 
                          className="text-xs text-primary-dark font-bold hover:text-primary uppercase" 
                          type="button"
                          onClick={handleCopy}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <ol className="list-decimal list-inside space-y-1 mt-3 pl-1">
                        <li>Go to your bKash Mobile Menu by dialing *247#</li>
                        <li>Choose "Send Money"</li>
                        <li>Enter the Personal bKash Account Number above</li>
                        <li>Enter the amount you wish to donate</li>
                        <li>Enter a reference (e.g., Donation)</li>
                        <li>Enter your PIN to complete transaction</li>
                      </ol>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="trxid">bKash Transaction ID (TrxID) <span className="text-red-500">*</span></label>
                      <input className="w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 focus:border-bkash-pink focus:ring-bkash-pink shadow-sm uppercase placeholder:normal-case" id="trxid" name="trxid" placeholder="e.g. 8J7A6..." required type="text"/>
                      <p className="mt-1 text-xs text-gray-500">This is required to verify your donation.</p>
                    </div>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary-dark text-background-dark font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.99]" type="submit">
                    Complete Donation
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-surface-dark text-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">volunteer_activism</span>
                Your Impact
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-primary font-bold text-xs">
                    ৳500
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-200">Essential Supplies</h4>
                    <p className="text-xs text-gray-400 mt-1">Provides a week's worth of essential food supplies for a struggling family.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-primary font-bold text-xs">
                    ৳1k
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-200">Education Support</h4>
                    <p className="text-xs text-gray-400 mt-1">Covers books and stationery for two students for an entire academic term.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-primary font-bold text-xs">
                    ৳5k
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-200">Medical Access</h4>
                    <p className="text-xs text-gray-400 mt-1">Funds a mobile medical camp visit providing checkups for 50 villagers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <h3 className="font-display font-bold text-gray-900 mb-4">Transparency Guarantee</h3>
              <p className="text-sm text-gray-600 mb-6">
                We believe in 100% transparency. Every Taka you donate is accounted for and goes directly to our programs in Wahedpur.
              </p>
              <div className="flex justify-center gap-4 text-gray-400">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-3xl text-emerald-rich">verified_user</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">Verified</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-3xl text-emerald-rich">lock</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">Secure</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-3xl text-emerald-rich">favorite</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">Non-Profit</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-gray-900 text-sm mb-2">Need help donating?</h4>
              <p className="text-xs text-gray-600 mb-3">Contact our support team for assistance with bank transfers or other methods.</p>
              <Link className="text-primary-dark font-bold text-sm hover:underline" to="/contact">Contact Support →</Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DonatePage;