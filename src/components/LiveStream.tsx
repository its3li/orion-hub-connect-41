
import React, { useState } from 'react';
import { Video, Users, MessageSquare, Calendar, Clock } from 'lucide-react';

interface LiveStreamProps {
  isVip: boolean;
}

const LiveStream = ({ isVip }: LiveStreamProps) => {
  const [upcomingStreams] = useState([
    {
      id: 1,
      title: 'شرح مباشر - أساسيات React',
      instructor: 'أحمد محمد',
      date: '2024-06-15',
      time: '19:00',
      participants: 45,
      isLive: false
    },
    {
      id: 2,
      title: 'ورشة عمل - بناء مشروع عملي',
      instructor: 'سارة أحمد',
      date: '2024-06-12',
      time: '20:00',
      participants: 32,
      isLive: true
    }
  ]);

  if (!isVip) {
    return (
      <div className="glass-effect p-8 rounded-2xl text-center">
        <Video className="w-16 h-16 text-purple-300 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-3">البث المباشر حصري لأعضاء VIP</h3>
        <p className="text-gray-300 mb-6">انضم إلى جلسات التعلم التفاعلية مع المدربين مباشرة</p>
        <ul className="text-right text-gray-300 mb-6 space-y-2">
          <li>• جلسات مباشرة تفاعلية</li>
          <li>• إمكانية طرح الأسئلة المباشرة</li>
          <li>• ورش عمل عملية</li>
          <li>• تسجيلات البث للمراجعة</li>
        </ul>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all text-lg font-semibold">
          ترقية إلى VIP
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="glass-effect p-6 rounded-2xl">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Video className="w-6 h-6 mr-2" />
          البث المباشر
        </h3>

        <div className="space-y-4">
          {upcomingStreams.map((stream) => (
            <div key={stream.id} className="border border-white/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-semibold text-white">{stream.title}</h4>
                  {stream.isLive && (
                    <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full animate-pulse">
                      مباشر الآن
                    </span>
                  )}
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {stream.participants}
                </div>
              </div>

              <div className="text-gray-300 text-sm mb-3">
                <p>المدرب: {stream.instructor}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {stream.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {stream.time}
                  </div>
                </div>
                
                <button className={`px-4 py-2 rounded-lg transition-colors ${
                  stream.isLive 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}>
                  {stream.isLive ? 'انضم الآن' : 'تذكيرني'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat for Live Stream */}
      <div className="glass-effect p-6 rounded-2xl">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2" />
          الدردشة المباشرة
        </h4>
        
        <div className="h-64 bg-black/30 rounded-lg p-4 mb-4 overflow-y-auto">
          <div className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-purple-300 font-semibold">أحمد:</span>
              <span className="text-gray-300">مرحباً بالجميع</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-300 font-semibold">سارة:</span>
              <span className="text-gray-300">شرح رائع استاذ</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="اكتب رسالتك..."
            className="flex-1 p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
          />
          <button className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            إرسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
