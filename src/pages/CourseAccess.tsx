
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, CheckCircle, Download, FileText, Users, MessageSquare, Award, Clock } from 'lucide-react';

const CourseAccess = () => {
  const { courseId } = useParams();
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  // Mock course data with lessons
  const course = {
    id: courseId,
    title: 'تطوير تطبيقات الويب باستخدام React',
    instructor: 'أحمد محمد',
    progress: 25,
    lessons: [
      {
        id: 0,
        title: 'مقدمة في React',
        duration: '15 دقيقة',
        type: 'video',
        description: 'نظرة عامة على React وأهميته في تطوير الويب',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        completed: true
      },
      {
        id: 1,
        title: 'إعداد بيئة التطوير',
        duration: '20 دقيقة',
        type: 'video',
        description: 'كيفية تثبيت Node.js و Create React App',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        completed: true
      },
      {
        id: 2,
        title: 'أول مكون React',
        duration: '25 دقيقة',
        type: 'video',
        description: 'إنشاء أول مكون React وفهم بنية المشروع',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        completed: false
      },
      {
        id: 3,
        title: 'فهم JSX',
        duration: '18 دقيقة',
        type: 'video',
        description: 'تعلم صيغة JSX وكيفية استخدامها',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        completed: false
      },
      {
        id: 4,
        title: 'تمرين عملي - مكون الترحيب',
        duration: '30 دقيقة',
        type: 'exercise',
        description: 'تطبيق عملي لإنشاء مكون ترحيب تفاعلي',
        completed: false
      }
    ],
    resources: [
      { name: 'ملفات الكود المصدرية', type: 'zip', size: '2.5 MB' },
      { name: 'الشرائح التقديمية', type: 'pdf', size: '5.1 MB' },
      { name: 'أمثلة إضافية', type: 'zip', size: '1.8 MB' }
    ]
  };

  const currentLesson = course.lessons[activeLesson];

  const markAsCompleted = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="flex h-screen">
        {/* Sidebar - Course Content */}
        <div className="w-1/3 bg-black/50 border-r border-white/20 overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-xl font-bold text-white mb-2">{course.title}</h1>
              <div className="flex items-center text-gray-300 text-sm mb-4">
                <span>بواسطة {course.instructor}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>التقدم</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Lessons List */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white mb-4">محتوى الكورس</h3>
              {course.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  onClick={() => setActiveLesson(index)}
                  className={`p-4 rounded-lg cursor-pointer transition-all hover:bg-white/10 ${
                    activeLesson === index ? 'bg-purple-600/20 border border-purple-500' : 'bg-white/5'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="mr-3">
                      {lesson.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : lesson.type === 'video' ? (
                        <PlayCircle className="w-5 h-5 text-purple-400" />
                      ) : (
                        <FileText className="w-5 h-5 text-orange-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${activeLesson === index ? 'text-white' : 'text-gray-300'}`}>
                        {lesson.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{lesson.duration}</span>
                        {lesson.type === 'exercise' && (
                          <span className="mr-2 px-2 py-1 bg-orange-600/20 text-orange-300 rounded text-xs">
                            تمرين
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resources */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">المواد التدريبية</h3>
              <div className="space-y-2">
                {course.resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 text-purple-400 mr-3" />
                      <div>
                        <div className="text-gray-300 text-sm">{resource.name}</div>
                        <div className="text-gray-500 text-xs">{resource.size}</div>
                      </div>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 text-sm">
                      تحميل
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Video/Content Area */}
          <div className="flex-1 bg-black/80 flex items-center justify-center">
            {currentLesson.type === 'video' ? (
              <div className="w-full max-w-4xl">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  {/* Video Player Placeholder */}
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <PlayCircle className="w-20 h-20 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{currentLesson.title}</h3>
                      <p className="text-gray-300 mb-4">{currentLesson.description}</p>
                      <button 
                        onClick={() => markAsCompleted(currentLesson.id)}
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        تشغيل الفيديو
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-4xl p-8">
                <div className="glass-effect p-8 rounded-2xl text-center">
                  <FileText className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{currentLesson.title}</h3>
                  <p className="text-gray-300 mb-6">{currentLesson.description}</p>
                  <div className="bg-white/5 p-6 rounded-lg mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">تعليمات التمرين</h4>
                    <div className="text-right text-gray-300 space-y-2">
                      <p>1. قم بإنشاء مكون جديد باسم Welcome</p>
                      <p>2. أضف props لاستقبال اسم المستخدم</p>
                      <p>3. اعرض رسالة ترحيب شخصية</p>
                      <p>4. أضف تصميم CSS للمكون</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => markAsCompleted(currentLesson.id)}
                    className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    بدء التمرين
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="bg-black/60 border-t border-white/20 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  disabled={activeLesson === 0}
                  onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  السابق
                </button>
                <button
                  disabled={activeLesson === course.lessons.length - 1}
                  onClick={() => setActiveLesson(Math.min(course.lessons.length - 1, activeLesson + 1))}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  التالي
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  الأسئلة والمناقشة
                </button>
                <button className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                  <Users className="w-4 h-4 mr-2" />
                  المجتمع
                </button>
                {completedLessons.length === course.lessons.length && (
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Award className="w-4 h-4 mr-2" />
                    الحصول على الشهادة
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccess;
