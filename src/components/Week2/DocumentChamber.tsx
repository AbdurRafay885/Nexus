import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Clock, PenTool, UploadCloud } from 'lucide-react';
import { Card, CardBody, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export const DocumentChamber: React.FC = () => {
  const [docs, setDocs] = useState([
    { id: 1, name: 'Seed_Round_Term_Sheet.pdf', status: 'In Review', date: '2026-02-21' },
    { id: 2, name: 'Nexus_Equity_Agreement.pdf', status: 'Draft', date: '2026-02-20' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-primary-900">Document Chamber</h2>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm">
          <UploadCloud size={18} /> Upload New Deal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {docs.map(doc => (
            <Card key={doc.id} className="hover:border-primary-300 transition-all cursor-pointer">
              <CardBody className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-50 text-primary-600 rounded-lg">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                    <p className="text-xs text-gray-500">Updated: {doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={doc.status === 'In Review' ? 'warning' : 'gray'}>{doc.status}</Badge>
                  <Download size={18} className="text-gray-400 hover:text-primary-600" />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* E-Signature Pad Mock */}
        <div className="space-y-4">
          <Card className="bg-primary-50 border-dashed border-2 border-primary-200">
            <CardHeader className="text-sm font-bold flex items-center gap-2">
              <PenTool size={16} /> E-Signature Required
            </CardHeader>
            <CardBody>
              <div className="h-32 bg-white rounded border border-gray-200 mb-3 flex items-center justify-center text-gray-300 italic">
                Sign Here...
              </div>
              <button className="w-full bg-primary-700 text-white py-2 rounded text-sm font-medium hover:bg-primary-800">
                Apply Signature to Deal
              </button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};