
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, FileText, Download, BookOpen } from 'lucide-react';

const CourseAccess = () => {
  const { courseId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const courseData = {
    title: 'كورس React',
    instructor: 'أحمد محمد',
    duration: '8 أسابيع',
    totalVideos: 0,
    totalDuration: '0 ساعة',
    progress: 0,
  };

  const modules = [
    {
      title: 'الأساسيات',
      lessons: [
        { id: 0, title: 'مقدمة عن React', duration: '15:30', type: 'video', videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
        { id: 1, title: 'إعداد بيئة التطوير', duration: '20:45', type: 'video', videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
        { id: 2, title: 'JSX والمكونات', duration: '25:15', type: 'video', videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' },
        { id: 3, title: 'ملف التمارين - الجزء الأول', duration: '', type: 'file' }
      ]
    }
  ];

  const allLessons = modules.flatMap(module => module.lessons);
  const currentLesson = allLessons[currentVideo];

  const markAsCompleted = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const goToNextLesson = () => {
    if (currentVideo < allLessons.length - 1) {
      markAsCompleted(currentVideo);
      setCurrentVideo(currentVideo + 1);
    }
  };

  const goToPreviousLesson = () => {
    if (currentVideo > 0) {
      setCurrentVideo(currentVideo - 1);
    }
  };

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
              <div className="text-center">
                <div className="text-purple-300 font-semibold">{courseData.progress}%</div>
                <div className="text-gray-400 text-xs">مكتمل</div>
              </div>
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                  style={{ width: `${courseData.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-3">
            <div className="glass-effect rounded-2xl overflow-hidden mb-6">
              {currentLesson?.type === 'video' ? (
                <div className="relative bg-black aspect-video">
                  <video 
                    className="w-full h-full" 
                    controls 
                    poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800"
                  >
                    <source src={currentLesson.videoUrl} type="video/mp4" />
                    متصفحك لا يدعم تشغيل الفيديو
                  </video>
                  <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-lg">
                    <span className="text-white text-sm">{currentLesson.duration}</span>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{currentLesson?.title}</h3>
                    <p className="text-gray-300 mb-4">ملف للتحميل</p>
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto">
                      <Download className="w-5 h-5 mr-2" />
                      تحميل الملف
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Lesson Info */}
            <div className="glass-effect p-6 rounded-2xl mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">{currentLesson?.title}</h2>
                  <div className="flex items-center text-gray-300 text-sm gap-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{currentLesson?.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={goToPreviousLesson}
                  disabled={currentVideo === 0}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  الدرس السابق
                </button>
                <span className="text-gray-300">
                  {currentVideo + 1} من {allLessons.length}
                </span>
                <button 
                  onClick={goToNextLesson}
                  disabled={currentVideo === allLessons.length - 1}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  الدرس التالي
                </button>
              </div>
            </div>
          </div>

          {/* Course Content Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-effect p-6 rounded-2xl sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                محتوى الكورس
              </h3>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="border-b border-white/10 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-purple-300 mb-3">{module.title}</h4>
                    <div className="space-y-2">
                      {module.lessons.map((lesson) => (
                        <div 
                          key={lesson.id}
                          className={`p-3 rounded-lg cursor-pointer transition-all ${
                            currentVideo === lesson.id 
                              ? 'bg-purple-600/30 border border-purple-400' 
                              : 'hover:bg-white/10'
                          }`}
                          onClick={() => setCurrentVideo(lesson.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {lesson.type === 'video' ? (
                                <Play className="w-4 h-4 text-purple-300 mr-2" />
                              ) : (
                                <FileText className="w-4 h-4 text-purple-300 mr-2" />
                              )}
                              <span className="text-sm text-gray-300">
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {lesson.duration && (
                                <span className="text-xs text-gray-400">{lesson.duration}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Course Stats */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-300">{courseData.totalVideos}</div>
                    <div className="text-gray-400 text-xs">فيديو</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-300">{courseData.totalDuration}</div>
                    <div className="text-gray-400 text-xs">ساعة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccess;
