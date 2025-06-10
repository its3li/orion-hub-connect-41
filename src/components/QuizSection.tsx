
import React, { useState } from 'react';
import { CheckCircle, XCircle, Trophy, Clock, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSectionProps {
  lectureId: string;
  isVip: boolean;
}

const QuizSection = ({ lectureId, isVip }: QuizSectionProps) => {
  const [questions] = useState<Question[]>([
    {
      id: 1,
      question: 'ما هو React؟',
      options: [
        'مكتبة JavaScript لبناء واجهات المستخدم',
        'لغة برمجة جديدة',
        'قاعدة بيانات',
        'خادم ويب'
      ],
      correctAnswer: 0,
      explanation: 'React هو مكتبة JavaScript مطورة من Facebook لبناء واجهات المستخدم التفاعلية.'
    },
    {
      id: 2,
      question: 'ما هو JSX؟',
      options: [
        'لغة برمجة منفصلة',
        'امتداد لـ JavaScript يسمح بكتابة HTML في JS',
        'مكتبة CSS',
        'إطار عمل منفصل'
      ],
      correctAnswer: 1,
      explanation: 'JSX هو امتداد لـ JavaScript يسمح بكتابة عناصر HTML داخل كود JavaScript.'
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [quizStarted, setQuizStarted] = useState(false);

  React.useEffect(() => {
    if (quizStarted && timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowResults(true);
    }
  }, [timeLeft, quizStarted, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / questions.length) * 100;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTimeLeft(600);
    setQuizStarted(false);
  };

  if (!isVip) {
    return (
      <div className="glass-effect p-8 rounded-2xl text-center">
        <Trophy className="w-16 h-16 text-purple-300 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-3">الاختبارات حصرية لأعضاء VIP</h3>
        <p className="text-gray-300 mb-6">اختبر معرفتك وتابع تقدمك مع اختبارات تفاعلية شاملة</p>
        <ul className="text-right text-gray-300 mb-6 space-y-2">
          <li>• اختبارات تفاعلية بعد كل محاضرة</li>
          <li>• تتبع النتائج والتقدم</li>
          <li>• شروحات مفصلة للإجابات</li>
          <li>• شهادات إنجاز للاختبارات</li>
        </ul>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all text-lg font-semibold">
          ترقية إلى VIP
        </button>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="glass-effect p-8 rounded-2xl text-center">
        <Trophy className="w-16 h-16 text-purple-300 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-3">اختبار المحاضرة</h3>
        <div className="text-gray-300 mb-6 space-y-2">
          <p>عدد الأسئلة: {questions.length}</p>
          <p>الوقت المحدد: 10 دقائق</p>
          <p>الدرجة المطلوبة للنجاح: 70%</p>
        </div>
        <button
          onClick={() => setQuizStarted(true)}
          className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all text-lg font-semibold"
        >
          بدء الاختبار
        </button>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const passed = score >= 70;

    return (
      <div className="glass-effect p-8 rounded-2xl text-center">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
          passed ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {passed ? (
            <CheckCircle className="w-8 h-8 text-white" />
          ) : (
            <XCircle className="w-8 h-8 text-white" />
          )}
        </div>
        
        <h3 className="text-2xl font-semibold text-white mb-3">
          {passed ? 'تهانينا! لقد نجحت' : 'لم تحقق الدرجة المطلوبة'}
        </h3>
        
        <div className="text-3xl font-bold text-purple-300 mb-6">
          {score.toFixed(0)}%
        </div>

        <div className="space-y-4 mb-6">
          {questions.map((question, index) => (
            <div key={question.id} className="text-right border border-white/20 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">{question.question}</h4>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isCorrect = optionIndex === question.correctAnswer;
                  const isSelected = selectedAnswers[index] === optionIndex;
                  
                  return (
                    <div
                      key={optionIndex}
                      className={`p-2 rounded ${
                        isCorrect
                          ? 'bg-green-500/20 border border-green-500'
                          : isSelected
                          ? 'bg-red-500/20 border border-red-500'
                          : 'bg-white/5'
                      }`}
                    >
                      <span className={`${
                        isCorrect ? 'text-green-300' : isSelected ? 'text-red-300' : 'text-gray-300'
                      }`}>
                        {option}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-purple-300 text-sm mt-2">{question.explanation}</p>
            </div>
          ))}
        </div>

        <button
          onClick={resetQuiz}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          إعادة المحاولة
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="glass-effect p-8 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">
          السؤال {currentQuestion + 1} من {questions.length}
        </h3>
        <div className="flex items-center text-white bg-red-600/20 px-3 py-1 rounded-lg">
          <Clock className="w-4 h-4 mr-2" />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="bg-purple-600 h-2 rounded-full transition-all"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h4 className="text-xl text-white mb-6 text-right">{question.question}</h4>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-right rounded-lg border transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? 'bg-purple-600/20 border-purple-400 text-white'
                  : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          السؤال السابق
        </button>
        
        <button
          onClick={nextQuestion}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === questions.length - 1 ? 'إنهاء الاختبار' : 'السؤال التالي'}
        </button>
      </div>
    </div>
  );
};

export default QuizSection;
