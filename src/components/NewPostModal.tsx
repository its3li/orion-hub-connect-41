
import React, { useState } from 'react';
import { X, Upload, Image, Mic, Send } from 'lucide-react';

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: any) => void;
}

const NewPostModal: React.FC<NewPostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'أسئلة عامة',
    tags: '',
    images: [] as File[],
    audioFile: null as File | null
  });

  const [isRecording, setIsRecording] = useState(false);

  const categories = [
    'أسئلة عامة',
    'برمجة',
    'تصميم',
    'تسويق',
    'إدارة أعمال',
    'علوم البيانات',
    'أمن سيبراني'
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 3) // Max 3 images
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleAudioRecord = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      // Here you would handle stopping the recording and saving the file
    } else {
      // Start recording
      setIsRecording(true);
      // Here you would handle starting the recording
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) return;

    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      createdAt: new Date(),
      author: 'المستخدم الحالي'
    };

    onSubmit(postData);
    setFormData({
      title: '',
      content: '',
      category: 'أسئلة عامة',
      tags: '',
      images: [],
      audioFile: null
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-effect p-6 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">إضافة موضوع جديد</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-white font-medium mb-2">عنوان الموضوع</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              placeholder="اكتب عنوان الموضوع هنا..."
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-white font-medium mb-2">الفئة</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div>
            <label className="block text-white font-medium mb-2">محتوى الموضوع</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
              rows={6}
              placeholder="اكتب محتوى الموضوع هنا..."
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-white font-medium mb-2">الوسوم (اختياري)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              placeholder="وسم1, وسم2, وسم3..."
            />
            <p className="text-gray-400 text-sm mt-1">افصل الوسوم بفاصلة</p>
          </div>

          {/* Media Upload */}
          <div className="space-y-4">
            <label className="block text-white font-medium">إضافة ملفات (اختياري)</label>
            
            {/* Image Upload */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <Image className="w-5 h-5" />
                <span>إضافة صور</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {/* Audio Record */}
              <button
                type="button"
                onClick={handleAudioRecord}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isRecording 
                    ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                    : 'bg-green-600 hover:bg-green-700'
                } text-white`}
              >
                <Mic className="w-5 h-5" />
                <span>{isRecording ? 'إيقاف التسجيل' : 'تسجيل صوتي'}</span>
              </button>
            </div>

            {/* Image Preview */}
            {formData.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Audio Preview */}
            {isRecording && (
              <div className="p-3 bg-red-600/20 border border-red-400/50 rounded-lg">
                <div className="flex items-center gap-2 text-red-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span>جاري التسجيل...</span>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-gray-300 hover:text-white transition-colors"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              نشر الموضوع
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;
