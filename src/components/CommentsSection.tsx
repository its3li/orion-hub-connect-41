
import React, { useState } from 'react';
import { MessageCircle, Send, Heart, Reply } from 'lucide-react';

interface Comment {
  id: number;
  user: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
  replies?: Comment[];
}

interface CommentsSectionProps {
  videoId: string;
  isVip: boolean;
}

const CommentsSection = ({ videoId, isVip }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: 'أحمد محمد',
      avatar: 'A',
      text: 'شرح ممتاز ومفيد جداً، شكراً لك',
      time: 'منذ ساعتين',
      likes: 5,
      replies: [
        {
          id: 2,
          user: 'سارة أحمد',
          avatar: 'S',
          text: 'أوافقك الرأي',
          time: 'منذ ساعة',
          likes: 2
        }
      ]
    }
  ]);
  
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  if (!isVip) {
    return (
      <div className="glass-effect p-6 rounded-2xl text-center">
        <MessageCircle className="w-12 h-12 text-purple-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">التعليقات حصرية لأعضاء VIP</h3>
        <p className="text-gray-300 mb-4">اشترك في باقة VIP للمشاركة في التعليقات والنقاشات</p>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
          ترقية إلى VIP
        </button>
      </div>
    );
  }

  const addComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now(),
      user: 'أنت',
      avatar: 'Y',
      text: newComment,
      time: 'الآن',
      likes: 0
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="glass-effect p-6 rounded-2xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <MessageCircle className="w-6 h-6 mr-2" />
        التعليقات ({comments.length})
      </h3>

      {/* Add Comment */}
      <div className="mb-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            Y
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="اكتب تعليقك هنا..."
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={addComment}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                إرسال
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-white/10 pb-4 last:border-b-0">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {comment.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-white">{comment.user}</span>
                  <span className="text-gray-400 text-sm">{comment.time}</span>
                </div>
                <p className="text-gray-300 mb-2">{comment.text}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-gray-400 hover:text-purple-300 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{comment.likes}</span>
                  </button>
                  <button
                    onClick={() => setReplyingTo(comment.id)}
                    className="flex items-center gap-1 text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    <Reply className="w-4 h-4" />
                    <span className="text-sm">رد</span>
                  </button>
                </div>

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-3 mr-4 space-y-3">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm">
                          {reply.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-white text-sm">{reply.user}</span>
                            <span className="text-gray-400 text-xs">{reply.time}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{reply.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
