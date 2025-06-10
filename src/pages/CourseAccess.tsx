
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, FileText, Download, BookOpen, Video, Trophy, MessageCircle, Lock, Crown, Eye, RotateCcw } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import CommentsSection from '../components/CommentsSection';
import LiveStream from '../components/LiveStream';
import QuizSection from '../components/QuizSection';

const CourseAccess = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('content');
  const [currentLecture, setCurrentLecture] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [completedVideos, setCompletedVideos] = useState<number[]>([]);
  const [isVip, setIsVip] = useState(false); // هذا سيتم ربطه بنظام المصادقة
  const [videoStats, setVideoStats] = useState<{[key: number]: {views: number, duration: number, lastPosition: number}}>({});

  const courseData = {
    title: 'كورس React',
    instructor: 'أحمد محمد',
    totalLectures: 4,
    completedLectures: 0,
  };

  const lectures = [
    {
      id: 0,
      title: 'الأساسيات',
      description: 'تعلم أساسيات React والمفاهيم الأساسية',
      isUnlocked: true,
      videos: [
        { 
          id: 0, 
          title: 'مقدمة عن React', 
          duration: '15:30', 
          videoUrl: 'https://youtu.be/d047LNFYjvI?si=bE81IWbXgO9R4HBO',
          description: 'مقدمة شاملة عن React وما يميزه عن المكتبات الأخرى'
        },
        { 
          id: 1, 
          title: 'إعداد بيئة التطوير', 
          duration: '20:45', 
          videoUrl: 'https://youtu.be/d047LNFYjvI?si=bE81IWbXgO9R4HBO',
          description: 'كيفية إعداد بيئة التطوير لبدء العمل مع React'
        },
        { 
          id: 2, 
          title: 'JSX والمكونات', 
          duration: '25:15', 
          videoUrl: 'https://youtu.be/d047LNFYjvI?si=bE81IWbXgO9R4HBO',
          description: 'فهم JSX وكيفية إنشاء المكونات'
        }
      ],
      materials: [
        { name: 'ملف شرح المحاضرة الأولى', type: 'pdf', size: '2.5 MB' },
        { name: 'تدريبات عملية', type: 'pdf', size: '1.8 MB' }
      ]
    },
    {
      id: 1,
      title: 'State والـ Props',
      description: 'تعلم إدارة البيانات في React',
      isUnlocked: completedVideos.length >= 3,
      videos: [
        { 
          id: 3, 
          title: 'فهم الـ State', 
          duration: '18:20', 
          videoUrl: 'https://youtu.be/d047LNFYjvI?si=bE81IWbXgO9R4HBO',
          description: 'كيفية إدارة البيانات المحلية في المكونات'
        },
        { 
          id: 4, 
          title: 'تمرير البيانات بـ Props', 
          duration: '22:10', 
          videoUrl: 'https://youtu.be/d047LNFYjvI?si=bE81IWbXgO9R4HBO',
          description: 'كيفية تمرير البيانات بين المكونات'
        }
      ],
      materials: [
        { name: 'شرح State والـ Props', type: 'pdf', size: '3.1 MB' }
      ]
    },
    {
      id: 2,
      title: 'Hooks المتقدمة',
      description: 'استخدام Hooks المتقدمة في React',
      isUnlocked: false,
      videos: [
        { id: 5, title: 'useEffect Hook', duration: '24:30', videoUrl: '', description: 'التعامل مع side effects' }
      ],
      materials: []
    },
    {
      id: 3,
      title: 'مشروع عملي (VIP فقط)',
      description: 'بناء مشروع متكامل - حصري لأعضاء VIP',
      isUnlocked: false,
      isVipOnly: true,
      videos: [
        { id: 6, title: 'التخطيط للمشروع', duration: '30:00', videoUrl: '', description: 'كيفية التخطيط وتنظيم المشروع' }
      ],
      materials: []
    }
  ];

  const allVideos = lectures.flatMap(lecture => lecture.videos);
  const currentVideoData = allVideos[currentVideo];
  const currentLectureData = lectures[currentLecture];

  const handleVideoComplete = (videoId: number) => {
    if (!completedVideos.includes(videoId)) {
      setCompletedVideos([...completedVideos, videoId]);
    }
    
    // Update stats
    setVideoStats(prev => ({
      ...prev,
      [videoId]: {
        ...prev[videoId],
        views: (prev[videoId]?.views || 0) + 1,
        duration: prev[videoId]?.duration || 0
      }
    }));
  };

  const handleVideoTimeUpdate = (currentTime: number, duration: number) => {
    setVideoStats(prev => ({
      ...prev,
      [currentVideo]: {
        ...prev[currentVideo],
        views: prev[currentVideo]?.views || 1,
        duration,
        lastPosition: currentTime
      }
    }));
  };

  const goToNextVideo = () => {
    if (currentVideo < allVideos.length - 1) {
      handleVideoComplete(currentVideo);
      setCurrentVideo(currentVideo + 1);
      // Update current lecture if needed
      const nextVideoLecture = lectures.findIndex(lecture => 
        lecture.videos.some(video => video.id === currentVideo + 1)
      );
      if (nextVideoLecture !== -1) {
        setCurrentLecture(nextVideoLecture);
      }
    }
  };

  const selectVideo = (videoId: number) => {
    setCurrentVideo(videoId);
    const videoLecture = lectures.findIndex(lecture => 
      lecture.videos.some(video => video.id === videoId)
    );
    if (videoLecture !== -1) {
      setCurrentLecture(videoLecture);
    }
  };

  const tabs = [
    { id: 'content', label: 'المحتوى', icon: BookOpen },
    { id: 'live', label: 'البث المباشر', icon: Video, vipOnly: true },
    { id: 'quiz', label: 'الاختبارات', icon: Trophy, vipOnly: true },
    { id: 'comments', label: 'التعليقات', icon: MessageCircle, vipOnly: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/courses" className="mr-4 p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-white" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-white">{courseData.title}</h1>
                <p className="text-gray-300 text-sm">بواسطة {courseData.instructor}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {!isVip && (
                <button
                  onClick={() => setIsVip(true)}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all font-semibold flex items-center"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  ترقية إلى VIP
                </button>
              )}
              {isVip && (
                <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg">
                  <Crown className="w-4 h-4 mr-2" />
                  عضو VIP
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Navigation Tabs */}
            <div className="glass-effect p-2 rounded-2xl mb-6">
              <div className="flex gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isDisabled = tab.vipOnly && !isVip;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => !isDisabled && setActiveTab(tab.id)}
                      disabled={isDisabled}
                      className={`flex-1 py-3 px-4 rounded-lg transition-all flex items-center justify-center relative ${
                        activeTab === tab.id && !isDisabled
                          ? 'bg-purple-600 text-white'
                          : isDisabled
                          ? 'text-gray-500 cursor-not-allowed'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {tab.label}
                      {tab.vipOnly && !isVip && (
                        <Crown className="w-4 h-4 mr-1 text-yellow-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'content' && (
              <>
                {/* Video Player */}
                <div className="glass-effect rounded-2xl overflow-hidden mb-6">
                  {currentVideoData ? (
                    <div className="aspect-video">
                      <VideoPlayer
                        videoUrl={currentVideoData.videoUrl}
                        title={currentVideoData.title}
                        onVideoEnd={() => handleVideoComplete(currentVideo)}
                        onTimeUpdate={handleVideoTimeUpdate}
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">اختر فيديو للمشاهدة</h3>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info and Stats */}
                {currentVideoData && (
                  <div className="glass-effect p-6 rounded-2xl mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">{currentVideoData.title}</h2>
                    <p className="text-gray-300 mb-4">{currentVideoData.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <Eye className="w-5 h-5 text-purple-300 mx-auto mb-1" />
                        <div className="text-white font-semibold">{videoStats[currentVideo]?.views || 0}</div>
                        <div className="text-gray-400 text-xs">مشاهدة</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <Clock className="w-5 h-5 text-purple-300 mx-auto mb-1" />
                        <div className="text-white font-semibold">{currentVideoData.duration}</div>
                        <div className="text-gray-400 text-xs">المدة</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <RotateCcw className="w-5 h-5 text-purple-300 mx-auto mb-1" />
                        <div className="text-white font-semibold">{videoStats[currentVideo]?.views || 0}</div>
                        <div className="text-gray-400 text-xs">مرات الفتح</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="w-5 h-5 mx-auto mb-1">
                          {completedVideos.includes(currentVideo) ? (
                            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                          ) : (
                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
                          )}
                        </div>
                        <div className="text-white font-semibold">
                          {completedVideos.includes(currentVideo) ? 'مكتمل' : 'غير مكتمل'}
                        </div>
                        <div className="text-gray-400 text-xs">الحالة</div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button 
                        onClick={() => currentVideo > 0 && setCurrentVideo(currentVideo - 1)}
                        disabled={currentVideo === 0}
                        className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        الفيديو السابق
                      </button>
                      <button 
                        onClick={goToNextVideo}
                        disabled={currentVideo === allVideos.length - 1}
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        الفيديو التالي
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === 'live' && <LiveStream isVip={isVip} />}
            {activeTab === 'quiz' && <QuizSection lectureId={currentLecture.toString()} isVip={isVip} />}
            {activeTab === 'comments' && currentVideoData && (
              <CommentsSection videoId={currentVideo.toString()} isVip={isVip} />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-effect p-6 rounded-2xl sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                محتوى الكورس
              </h3>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {lectures.map((lecture) => (
                  <div key={lecture.id} className="border-b border-white/10 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-purple-300">{lecture.title}</h4>
                      {lecture.isVipOnly && (
                        <Crown className="w-4 h-4 text-yellow-500" />
                      )}
                      {!lecture.isUnlocked && !lecture.isVipOnly && (
                        <Lock className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3">{lecture.description}</p>
                    
                    <div className="space-y-2">
                      {lecture.videos.map((video) => {
                        const isLocked = (!lecture.isUnlocked && !lecture.isVipOnly) || (lecture.isVipOnly && !isVip);
                        
                        return (
                          <div 
                            key={video.id}
                            className={`p-3 rounded-lg transition-all ${
                              isLocked
                                ? 'opacity-50 cursor-not-allowed'
                                : currentVideo === video.id 
                                ? 'bg-purple-600/30 border border-purple-400 cursor-pointer' 
                                : 'hover:bg-white/10 cursor-pointer'
                            }`}
                            onClick={() => !isLocked && selectVideo(video.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                {isLocked ? (
                                  <Lock className="w-4 h-4 text-gray-500 mr-2" />
                                ) : (
                                  <Play className="w-4 h-4 text-purple-300 mr-2" />
                                )}
                                <span className="text-sm text-gray-300">
                                  {video.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                {completedVideos.includes(video.id) && (
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                )}
                                <span className="text-xs text-gray-400">{video.duration}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Materials */}
                      {lecture.materials.length > 0 && (
                        <div className="mt-3 space-y-2">
                          <h5 className="text-sm font-semibold text-gray-300">المواد التعليمية:</h5>
                          {lecture.materials.map((material, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded">
                              <div className="flex items-center">
                                <FileText className="w-4 h-4 text-purple-300 mr-2" />
                                <span className="text-xs text-gray-300">{material.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400">{material.size}</span>
                                <Download className="w-4 h-4 text-purple-300 cursor-pointer hover:text-purple-200" />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccess;
