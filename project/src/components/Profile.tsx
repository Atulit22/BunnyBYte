import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useUserProgress } from '../contexts/UserProgressContext';
import { useTheme } from '../contexts/ThemeContext';
import { User, Calendar, Trophy, Target, Star, Award, TrendingUp, Code } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();
  const { progress } = useUserProgress();
  const { colors } = useTheme();

  const achievements = progress?.achievements || [];
  const earnedAchievements = achievements.filter(a => a.earned);
  const unearnedAchievements = achievements.filter(a => !a.earned);

  const levelStats = [
    {
      name: 'Easy',
      progress: progress?.levelProgress.easy,
      color: 'from-green-500 to-emerald-500',
      icon: '🌱'
    },
    {
      name: 'Intermediate',
      progress: progress?.levelProgress.intermediate,
      color: 'from-yellow-500 to-orange-500',
      icon: '🔥'
    },
    {
      name: 'Advanced',
      progress: progress?.levelProgress.advanced,
      color: 'from-red-500 to-pink-500',
      icon: '⚡'
    }
  ];

  const stats = [
    {
      label: 'Problems Solved',
      value: progress?.solvedProblems.length || 0,
      icon: Code,
      color: 'text-blue-400'
    },
    {
      label: 'Total Points',
      value: progress?.totalPoints || 0,
      icon: Star,
      color: 'text-yellow-400'
    },
    {
      label: 'Current Streak',
      value: progress?.currentStreak || 0,
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      label: 'Achievements',
      value: earnedAchievements.length,
      icon: Trophy,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className={`text-3xl font-bold ${colors.text} mb-2`}>
          Profile 👤
        </h1>
        <p className={colors.textSecondary}>
          Track your progress and achievements
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Info */}
        <div className="lg:col-span-1">
          <div className={`${colors.surface} rounded-xl p-6 border border-white/10 mb-6`}>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">
                  {user?.fullName.charAt(0).toUpperCase()}
                </span>
              </div>
              
              <h2 className={`text-xl font-bold ${colors.text} mb-1`}>
                {user?.fullName}
              </h2>
              
              <p className={`${colors.textSecondary} mb-1`}>
                @{user?.username}
              </p>
              
              <p className={`text-sm ${colors.textSecondary}`}>
                {user?.email}
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2 mt-4 pt-4 border-t border-white/10">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span className={`text-sm ${colors.textSecondary}`}>
                Joined {user?.joinDate ? new Date(user.joinDate).toLocaleDateString() : 'Recently'}
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`${colors.surface} rounded-xl p-6 border border-white/10`}>
            <h3 className={`text-lg font-semibold ${colors.text} mb-4`}>Quick Stats</h3>
            <div className="space-y-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                      <span className={colors.textSecondary}>{stat.label}</span>
                    </div>
                    <span className={`font-bold ${colors.text}`}>{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Level Progress */}
          <div className={`${colors.surface} rounded-xl p-6 border border-white/10`}>
            <h3 className={`text-lg font-semibold ${colors.text} mb-6`}>Level Progress</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {levelStats.map((level, index) => {
                const progressPercentage = level.progress 
                  ? (level.progress.solvedCount / level.progress.totalCount) * 100 
                  : 0;
                
                return (
                  <div key={level.name} className="text-center">
                    <div className="mb-4">
                      <span className="text-3xl">{level.icon}</span>
                    </div>
                    
                    <h4 className={`font-semibold ${colors.text} mb-2`}>
                      {level.name}
                    </h4>
                    
                    <div className="w-20 h-20 mx-auto mb-3">
                      <div className="relative w-full h-full">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="rgb(71 85 105)"
                            strokeWidth="3"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="url(#gradient-1)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray={`${progressPercentage} ${100 - progressPercentage}`}
                          />
                          <defs>
                            <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10B981" />
                              <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {Math.round(progressPercentage)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className={`text-sm ${colors.textSecondary}`}>
                      {level.progress?.solvedCount || 0} / {level.progress?.totalCount || 0}
                    </p>
                    
                    {level.progress?.completed && (
                      <div className="mt-2">
                        <span className="text-yellow-500 text-sm font-medium">
                          🥕 Completed!
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className={`${colors.surface} rounded-xl p-6 border border-white/10`}>
            <h3 className={`text-lg font-semibold ${colors.text} mb-6`}>Achievements</h3>
            
            {earnedAchievements.length > 0 ? (
              <div className="space-y-4">
                <h4 className={`font-medium ${colors.text} mb-3`}>
                  Earned ({earnedAchievements.length})
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {earnedAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg"
                    >
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h5 className={`font-semibold ${colors.text}`}>
                          {achievement.title}
                        </h5>
                        <p className={`text-sm ${colors.textSecondary}`}>
                          {achievement.description}
                        </p>
                        {achievement.earnedDate && (
                          <p className="text-xs text-yellow-500 mt-1">
                            {new Date(achievement.earnedDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {unearnedAchievements.length > 0 && (
                  <>
                    <h4 className={`font-medium ${colors.text} mb-3`}>
                      Not Yet Earned ({unearnedAchievements.length})
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {unearnedAchievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className="flex items-center space-x-4 p-4 bg-slate-700/20 border border-slate-600/30 rounded-lg opacity-60"
                        >
                          <div className="text-2xl grayscale">{achievement.icon}</div>
                          <div className="flex-1">
                            <h5 className={`font-semibold ${colors.text}`}>
                              {achievement.title}
                            </h5>
                            <p className={`text-sm ${colors.textSecondary}`}>
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Award className={`w-12 h-12 ${colors.textSecondary} mx-auto mb-4`} />
                <p className={colors.textSecondary}>
                  No achievements earned yet. Keep solving problems to unlock them!
                </p>
              </div>
            )}
          </div>

          {/* Activity Summary */}
          <div className={`${colors.surface} rounded-xl p-6 border border-white/10`}>
            <h3 className={`text-lg font-semibold ${colors.text} mb-6`}>Activity Summary</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                  {progress?.solvedProblems.length || 0}
                </div>
                <div className={`text-sm ${colors.textSecondary}`}>
                  Problems Solved
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                  {progress?.totalPoints || 0}
                </div>
                <div className={`text-sm ${colors.textSecondary}`}>
                  Total Points
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                  {progress?.currentStreak || 0}
                </div>
                <div className={`text-sm ${colors.textSecondary}`}>
                  Day Streak
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                  {Math.round(((progress?.solvedProblems.length || 0) / 45) * 100)}%
                </div>
                <div className={`text-sm ${colors.textSecondary}`}>
                  Overall Progress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}