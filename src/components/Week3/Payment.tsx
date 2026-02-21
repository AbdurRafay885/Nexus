import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Wallet, Send } from 'lucide-react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export const PaymentSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Wallet Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
          <Wallet className="absolute right-[-10px] bottom-[-10px] opacity-10" size={150} />
          <p className="text-primary-100 text-sm mb-1">Total Wallet Balance</p>
          <h2 className="text-4xl font-bold mb-6">$125,450.00</h2>
          <div className="flex gap-3">
             <button className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-white/30">
               <ArrowUpRight size={16} /> Transfer
             </button>
             <button className="bg-white text-primary-900 px-4 py-2 rounded-lg text-sm flex items-center gap-2 font-bold shadow-lg">
               <Send size={16} /> Fund Startup
             </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
           <h4 className="text-gray-500 text-sm mb-4 italic">Next Scheduled Payout</h4>
           <div className="flex justify-between items-end">
             <div>
               <p className="text-2xl font-bold text-gray-900">$12,000</p>
               <p className="text-xs text-success-500">Expected: March 1st</p>
             </div>
             <Badge variant="primary">Processing</Badge>
           </div>
        </div>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader><h3 className="font-bold">Transaction History</h3></CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Entity</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Nexus Tech', type: 'Investment', amt: '-$50,000', status: 'Completed', icon: <ArrowUpRight className="text-error-500" /> },
                { name: 'Seed Payout', type: 'Deposit', amt: '+$12,500', status: 'Pending', icon: <ArrowDownLeft className="text-success-500" /> },
              ].map((tx, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium flex items-center gap-2">{tx.icon} {tx.name}</td>
                  <td className="px-6 py-4 text-gray-500">{tx.type}</td>
                  <td className={`px-6 py-4 font-bold ${tx.amt.startsWith('+') ? 'text-success-600' : 'text-gray-900'}`}>{tx.amt}</td>
                  <td className="px-6 py-4"><Badge variant={tx.status === 'Completed' ? 'success' : 'warning'}>{tx.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};