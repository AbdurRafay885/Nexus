import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MonitorUp, Settings, MoreVertical } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const VideoCallSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  return (
    <div className="flex flex-col h-[600px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Video Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
        {/* Remote Participant */}
        <div className="bg-gray-800 rounded-xl relative flex items-center justify-center border border-gray-700">
          <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-xs">Investor: Sarah Johnson</div>
          <div className="text-gray-500 flex flex-col items-center">
             <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl mb-2">SJ</div>
             <span>Remote Video Stream</span>
          </div>
        </div>

        {/* Local Participant (Self) */}
        <div className="bg-gray-800 rounded-xl relative flex items-center justify-center border border-gray-700">
           <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-xs">You (Abdur Rafay)</div>
           {isVideoOff ? (
             <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl">AR</div>
           ) : (
             <div className="text-success-500 animate-pulse text-sm">Camera Active</div>
           )}
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-gray-800/80 backdrop-blur-md p-6 flex justify-center items-center gap-4 border-t border-gray-700">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className={`p-4 rounded-full transition-all ${isMuted ? 'bg-error-500 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}>
          {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
        </button>

        <button 
          onClick={() => setIsVideoOff(!isVideoOff)}
          className={`p-4 rounded-full transition-all ${isVideoOff ? 'bg-error-500 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}>
          {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
        </button>

        <button 
          onClick={() => setIsScreenSharing(!isScreenSharing)}
          className={`p-4 rounded-full transition-all ${isScreenSharing ? 'bg-success-500 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}>
          <MonitorUp size={24} />
        </button>

        <button className="bg-error-600 hover:bg-error-700 p-4 rounded-2xl text-white transition-all transform hover:scale-105 ml-8">
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  );
};