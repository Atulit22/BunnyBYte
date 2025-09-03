import React from 'react';
import { useUserProgress } from '../contexts/UserProgressContext';
import { useTheme } from '../contexts/ThemeContext';
import { Code, Trophy, Target, Zap, ChevronRight, Star } from 'lucide-react';

interface DashboardProps {
  setCurrentView: (view: 'dashboard' | 'learn' | 'profile' | 'leaderboard') => void;
}

export default function Dashboard({ setCurrentView }: DashboardProps) {
  const { progress } = useUserProgress();
  const { colors } = useTheme();

  const stats = [
    {
      label: 'Problems Solved',
      value: progress?.solvedProblems.length || 0,
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Total Points',
      value: progress?.totalPoints || 0,
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      label: 'Current Streak',
      value: progress?.currentStreak || 0,
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Achievements',
      value: progress?.achievements.filter(a => a.earned).length || 0,
      icon: Trophy,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const levels = [
    {
      name: 'Easy',
      progress: progress?.levelProgress.easy,
      color: 'from-green-500 to-emerald-500',
      description: '10 foundational JavaScript problems'
    },
    {
      name: 'Intermediate',
      progress: progress?.levelProgress.intermediate,
      color: 'from-yellow-500 to-orange-500',
      description: '15 intermediate JavaScript concepts'
    },
    {
      name: 'Advanced',
      progress: progress?.levelProgress.advanced,
      color: 'from-red-500 to-pink-500',
      description: '20 complex JavaScript challenges'
    }
  ];

  const recentAchievements = progress?.achievements.filter(a => a.earned).slice(-3) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className={`text-3xl font-bold ${colors.text} mb-2`}>
          Welcome back! 🐰
        </h1>
        <p className={colors.textSecondary}>
          Ready to continue your JavaScript journey?
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`${colors.surface} rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                {stat.value}
              </div>
              <div className={`text-sm ${colors.textSecondary}`}>
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Level Progress */}
        <div className={`${colors.surface} rounded-xl p-6 border border-white/10`}>
          <h2 className={`text-xl font-bold ${colors.text} mb-6`}>Learning Progress</h2>
          <div className="space-y-4">
            {levels.map((level, index) => {
              const progressPercentage = level.progress 
                ? (level.progress.solvedCount / level.progress.totalCount) * 100 
                : 0;
              
              return (
                <div key={level.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${level.color}`}></div>
                      <span className={`font-semibold ${colors.text}`}>{level.name}</span>
                    </div>
                    <span className={colors.textSecondary}>
                      {level.progress?.solvedCount || 0}/{level.progress?.totalCount || 0}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${level.color} transition-all duration-500`}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <p className={`text-sm ${colors.textSecondary} mb-3`}>
                    {level.description}
                  </p>
                  {level.progress?.completed && (
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-yellow-500 text-sm font-medium">
                        Level Completed! 🥕
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <button
            onClick={() => setCurrentView('learn')}
            className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
          >
            <span>Continue Learning</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Recent Achievements */}
        <div className={`${colors.surface} rounded-xl p-6 border border-white/10`}>
          <h2 className={`text-xl font-bold ${colors.text} mb-6`}>Recent Achievements</h2>
          
          {recentAchievements.length > 0 ? (
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${colors.text}`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-sm ${colors.textSecondary}`}>
                      {achievement.description}
                    </p>
                    {achievement.earnedDate && (
                      <p className="text-xs text-yellow-500 mt-1">
                        Earned {new Date(achievement.earnedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              
              <button
                onClick={() => setCurrentView('profile')}
                className="w-full py-2 px-4 text-center text-pink-400 hover:text-pink-300 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View All Achievements</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <Trophy className={`w-12 h-12 ${colors.textSecondary} mx-auto mb-4`} />
              <p className={colors.textSecondary}>
                Solve your first problem to earn achievements!
              </p>
              <button
                onClick={() => setCurrentView('learn')}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-medium rounded-lg transition-all duration-200"
              >
                Start Learning
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`${colors.surface} rounded-xl p-6 border border-white/10 mt-8`}>
        <h2 className={`text-xl font-bold ${colors.text} mb-6`}>Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => setCurrentView('learn')}
            className="p-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-lg transition-all duration-200 text-left"
          >
            <Code className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className={`font-semibold ${colors.text}`}>Practice Problems</h3>
            <p className={`text-sm ${colors.textSecondary}`}>
              Solve coding challenges
            </p>
          </button>
          
          <button
            onClick={() => setCurrentView('leaderboard')}
            className="p-4 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg transition-all duration-200 text-left"
          >
            <Trophy className="w-8 h-8 text-purple-400 mb-2" />
            <h3 className={`font-semibold ${colors.text}`}>View Rankings</h3>
            <p className={`text-sm ${colors.textSecondary}`}>
              Check your position
            </p>
          </button>
          
          <button
            onClick={() => setCurrentView('profile')}
            className="p-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 rounded-lg transition-all duration-200 text-left"
          >
            <Target className="w-8 h-8 text-green-400 mb-2" />
            <h3 className={`font-semibold ${colors.text}`}>Track Progress</h3>
            <p className={`text-sm ${colors.textSecondary}`}>
              View detailed stats
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}