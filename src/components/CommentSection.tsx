import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Comment } from '../types';
import { MessageCircle, ThumbsUp, Reply, Send, MoreVertical } from 'lucide-react';

interface CommentSectionProps {
  problemId: string;
}

export default function CommentSection({ problemId }: CommentSectionProps) {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadComments();
  }, [problemId]);

  const loadComments = () => {
    // Load comments from localStorage (in a real app, this would be from your backend)
    const savedComments = localStorage.getItem(`comments_${problemId}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    } else {
      // Generate some mock comments for demonstration
      const mockComments: Comment[] = [
        {
          id: 'comment-1',
          userId: 'user1',
          username: 'CodeMaster',
          content: 'This problem really helped me understand the basics! The hints were super helpful.',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          upvotes: 5,
          replies: [
            {
              id: 'reply-1',
              userId: 'user2',
              username: 'JSNinja',
              content: 'Totally agree! The step-by-step approach makes it easy to follow.',
              timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
              upvotes: 2,
              replies: []
            }
          ]
        },
        {
          id: 'comment-2',
          userId: 'user3',
          username: 'DevBeginner',
          content: 'I struggled with this at first, but the hints really guided me to the solution. Thanks!',
          timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
          upvotes: 3,
          replies: []
        }
      ];
      setComments(mockComments);
      localStorage.setItem(`comments_${problemId}`, JSON.stringify(mockComments));
    }
  };

  const saveComments = (updatedComments: Comment[]) => {
    setComments(updatedComments);
    localStorage.setItem(`comments_${problemId}`, JSON.stringify(updatedComments));
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    setLoading(true);

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      userId: user.id,
      username: user.username,
      content: newComment.trim(),
      timestamp: new Date().toISOString(),
      upvotes: 0,
      replies: []
    };

    const updatedComments = [comment, ...comments];
    saveComments(updatedComments);
    setNewComment('');
    setLoading(false);
  };

  const handleSubmitReply = async (commentId: string) => {
    if (!replyText.trim() || !user) return;

    const reply: Comment = {
      id: `reply-${Date.now()}`,
      userId: user.id,
      username: user.username,
      content: replyText.trim(),
      timestamp: new Date().toISOString(),
      upvotes: 0,
      replies: []
    };

    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply]
        };
      }
      return comment;
    });

    saveComments(updatedComments);
    setReplyText('');
    setReplyingTo(null);
  };

  const handleUpvote = (commentId: string, isReply: boolean = false, parentId?: string) => {
    const updatedComments = comments.map(comment => {
      if (isReply && comment.id === parentId) {
        return {
          ...comment,
          replies: comment.replies.map(reply => 
            reply.id === commentId 
              ? { ...reply, upvotes: reply.upvotes + 1 }
              : reply
          )
        };
      } else if (!isReply && comment.id === commentId) {
        return { ...comment, upvotes: comment.upvotes + 1 };
      }
      return comment;
    });

    saveComments(updatedComments);
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const commentTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - commentTime.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const renderComment = (comment: Comment, isReply: boolean = false, parentId?: string) => (
    <div key={comment.id} className={`${isReply ? 'ml-8 mt-3' : 'mb-6'}`}>
      <div className={`${colors.surface} rounded-lg p-4 border border-white/10`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-xs">
                {comment.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <span className={`font-semibold ${colors.text} text-sm`}>
                {comment.username}
              </span>
              <span className={`text-xs ${colors.textSecondary} ml-2`}>
                {formatTimeAgo(comment.timestamp)}
              </span>
            </div>
          </div>
          
          <button className={`p-1 ${colors.textSecondary} hover:text-white transition-colors duration-200`}>
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        <p className={`${colors.text} text-sm mb-3 leading-relaxed`}>
          {comment.content}
        </p>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleUpvote(comment.id, isReply, parentId)}
            className={`flex items-center space-x-1 ${colors.textSecondary} hover:text-pink-400 transition-colors duration-200`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span className="text-xs">{comment.upvotes}</span>
          </button>

          {!isReply && (
            <button
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className={`flex items-center space-x-1 ${colors.textSecondary} hover:text-blue-400 transition-colors duration-200`}
            >
              <Reply className="w-4 h-4" />
              <span className="text-xs">Reply</span>
            </button>
          )}
        </div>

        {/* Reply Form */}
        {replyingTo === comment.id && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmitReply(comment.id);
            }}>
              <div className="flex space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xs">
                    {user?.fullName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a reply..."
                    className={`w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg ${colors.text} placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200 resize-none`}
                    rows={2}
                  />
                  <div className="flex justify-end mt-2 space-x-2">
                    <button
                      type="button"
                      onClick={() => {
                        setReplyingTo(null);
                        setReplyText('');
                      }}
                      className={`px-3 py-1 text-xs ${colors.textSecondary} hover:text-white transition-colors duration-200`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!replyText.trim()}
                      className="px-3 py-1 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white text-xs font-medium rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Replies */}
      {comment.replies.length > 0 && (
        <div className="mt-3">
          {comment.replies.map(reply => renderComment(reply, true, comment.id))}
        </div>
      )}
    </div>
  );

  return (
    <div className={`${colors.surface} rounded-xl p-6 border border-white/10`}>
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="w-5 h-5 text-blue-400" />
        <h3 className={`text-lg font-semibold ${colors.text}`}>
          Discussion ({comments.length})
        </h3>
      </div>

      {/* New Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-6">
        <div className="flex space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">
              {user?.fullName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts, ask questions, or help others..."
              className={`w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg ${colors.text} placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200 resize-none`}
              rows={3}
            />
            <div className="flex justify-between items-center mt-3">
              <span className={`text-xs ${colors.textSecondary}`}>
                Be respectful and helpful to fellow learners
              </span>
              <button
                type="submit"
                disabled={!newComment.trim() || loading}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Posting...' : 'Post Comment'}</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map(comment => renderComment(comment))
        ) : (
          <div className="text-center py-8">
            <MessageCircle className={`w-12 h-12 ${colors.textSecondary} mx-auto mb-4`} />
            <p className={`${colors.textSecondary} mb-2`}>
              No comments yet
            </p>
            <p className={`text-sm ${colors.textSecondary}`}>
              Be the first to share your thoughts or ask a question!
            </p>
          </div>
        )}
      </div>

      {/* Comment Guidelines */}
      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <h4 className={`font-medium ${colors.text} mb-2`}>Community Guidelines</h4>
        <ul className={`text-sm ${colors.textSecondary} space-y-1`}>
          <li>• Be respectful and constructive in your feedback</li>
          <li>• Help others learn by explaining concepts clearly</li>
          <li>• Share alternative solutions and approaches</li>
          <li>• Ask questions if you're stuck or need clarification</li>
        </ul>
      </div>
    </div>
  );
}