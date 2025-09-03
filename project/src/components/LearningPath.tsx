import React from 'react';
import { useUserProgress } from '../contexts/UserProgressContext';
import { useTheme } from '../contexts/ThemeContext';
import { getProblemsByLevel } from '../data/problems';
import { CheckCircle, Lock, Star, Trophy } from 'lucide-react';

interface LearningPathProps {
  onProblemSelect: (problemId: string) => void;
  onLevelSelect: (level: 'easy' | 'intermediate' | 'advanced') => void;
  selectedLevel: 'easy' | 'intermediate' | 'advanced';
}

export default function LearningPath({ onProblemSelect, onLevelSelect, selectedLevel }: LearningPathProps) {
  const { progress } = useUserProgress();
  const { colors } = useTheme();

  const levels = [
    {
      id: 'easy' as const,
      name: 'Easy',
      description: 'Master the fundamentals of JavaScript',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20',
      icon: '🌱',
      totalProblems: 10
    },
    {
      id: 'intermediate' as const,
      name: 'Intermediate',
      description: 'Dive deeper into JavaScript concepts',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/20',
      icon: '🔥',
      totalProblems: 15
    },
    {
      id: 'advanced' as const,
      name: 'Advanced',
      description: 'Challenge yourself with complex problems',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-500/10 to-pink-500/10',
      borderColor: 'border-red-500/20',
      icon: '⚡',
      totalProblems: 20
    }
  ];

  const problems = getProblemsByLevel(selectedLevel);
  const levelProgress = progress?.levelProgress[selectedLevel];
  const solvedProblems = progress?.solvedProblems || [];

  const currentLevel = levels.find(l => l.id === selectedLevel)!;
  const rabbitPosition = levelProgress?.rabbitPosition || 0;
  const maxPosition = currentLevel.totalProblems;

  // Calculate if previous levels are completed for unlocking
  const isEasyCompleted = progress?.levelProgress.easy.completed || false;
  const isIntermediateUnlocked = selectedLevel === 'easy' || isEasyCompleted;
  const isAdvancedUnlocked = selectedLevel === 'advanced' ? 
    (progress?.levelProgress.intermediate.completed || false) : true;

  const renderRabbitTrail = () => {
    const positions = [];
    for (let i = 0; i <= maxPosition; i++) {
      const isRabbitHere = i === rabbitPosition;
      const isCarrot = i === maxPosition;
      const isPassed = i < rabbitPosition;
      
      positions.push(
        <div key={i} className="relative">
          {/* Trail dot */}
          <div className={`w-4 h-4 rounded-full border-2 ${
            isPassed ? `bg-gradient-to-r ${currentLevel.color}` :
            isCarrot ? 'bg-orange-500' :
            'bg-slate-600 border-slate-500'
          }`} />
          
          {/* Rabbit */}
          {isRabbitHere && (
            <div className="absolute -top-6 -left-2 text-2xl animate-bounce">
              🐰
            </div>
          )}
          
          {/* Carrot */}
          {isCarrot && (
            <div className="absolute -top-6 -left-2 text-2xl">
              🥕
            </div>
          )}
          
          {/* Mega Carrot if level completed */}
          {isCarrot && levelProgress?.megaCarrotEarned && (
            <div className="absolute -top-10 -left-3 text-3xl animate-pulse">
              🥕✨
            </div>
          )}
          
          {/* Trail line */}
          {i < maxPosition && (
            <div className={`absolute top-2 left-4 w-16 h-0.5 ${
              isPassed ? `bg-gradient-to-r ${currentLevel.color}` : 'bg-slate-600'
            }`} />
          )}
        </div>
      );
    }
    
    return (
      <div className="flex items-center space-x-12 overflow-x-auto pb-4 mb-8">
        {positions}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className={`text-3xl font-bold ${colors.text} mb-2`}>
          Learning Path 🎯
        </h1>
        <p className={colors.textSecondary}>
          Choose your difficulty level and start solving problems to help the rabbit reach the carrot!
        </p>
      </div>

      {/* Level Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {levels.map((level) => {
          const levelProg = progress?.levelProgress[level.id];
          const solvedCount = levelProg?.solvedCount || 0;
          const isCompleted = levelProg?.completed || false;
          const isSelected = selectedLevel === level.id;
          
          const isUnlocked = level.id === 'easy' || 
                           (level.id === 'intermediate' && isEasyCompleted) ||
                           (level.id === 'advanced' && progress?.levelProgress.intermediate.completed);

          return (
            <button
              key={level.id}
              onClick={() => isUnlocked && onLevelSelect(level.id)}
              disabled={!isUnlocked}
              className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                isSelected 
                  ? `bg-gradient-to-br ${level.bgColor} ${level.borderColor} border-2`
                  : isUnlocked
                    ? `${colors.surface} border-white/10 hover:border-white/20`
                    : `${colors.surface} border-slate-600/50 opacity-50 cursor-not-allowed`
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{level.icon}</span>
                {isCompleted && <Trophy className="w-6 h-6 text-yellow-500" />}
                {!isUnlocked && <Lock className="w-6 h-6 text-slate-500" />}
              </div>
              
              <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                {level.name}
              </h3>
              
              <p className={`${colors.textSecondary} text-sm mb-4`}>
                {level.description}
              </p>
              
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm ${colors.textSecondary}`}>Progress</span>
                <span className={`text-sm ${colors.text} font-medium`}>
                  {solvedCount}/{level.totalProblems}
                </span>
              </div>
              
              <div className="w-full bg-slate-700/50 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${level.color} transition-all duration-500`}
                  style={{ width: `${(solvedCount / level.totalProblems) * 100}%` }}
                />
              </div>
              
              {isCompleted && (
                <div className="mt-3 text-yellow-500 text-sm font-medium">
                  🥕 Mega Carrot Earned!
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Level Details */}
      <div className={`${colors.surface} rounded-xl p-6 border border-white/10`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${colors.text} flex items-center space-x-3`}>
            <span>{currentLevel.icon}</span>
            <span>{currentLevel.name} Level</span>
            {levelProgress?.completed && <Trophy className="w-6 h-6 text-yellow-500" />}
          </h2>
          
          <div className={`text-right ${colors.textSecondary}`}>
            <div>Progress: {rabbitPosition}/{maxPosition}</div>
            <div className="text-xs">Help the rabbit reach the carrot!</div>
          </div>
        </div>

        {/* Rabbit Trail */}
        <div className="mb-8">
          <h3 className={`text-lg font-semibold ${colors.text} mb-4`}>Rabbit's Journey</h3>
          {renderRabbitTrail()}
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => {
            const isSolved = solvedProblems.includes(problem.id);
            const isUnlocked = index === 0 || solvedProblems.includes(problems[index - 1].id);
            
            return (
              <button
                key={problem.id}
                onClick={() => isUnlocked && onProblemSelect(problem.id)}
                disabled={!isUnlocked}
                className={`p-4 rounded-lg border text-left transition-all duration-200 transform hover:scale-105 ${
                  isSolved
                    ? 'bg-green-500/10 border-green-500/30'
                    : isUnlocked
                      ? `${colors.surface} border-white/20 hover:border-white/30`
                      : `${colors.surface} border-slate-600/30 opacity-50 cursor-not-allowed`
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className={`font-semibold ${colors.text} text-sm`}>
                    {index + 1}. {problem.title}
                  </h4>
                  <div className="flex items-center space-x-1">
                    {isSolved ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : !isUnlocked ? (
                      <Lock className="w-5 h-5 text-slate-500" />
                    ) : null}
                  </div>
                </div>
                
                <p className={`${colors.textSecondary} text-xs mb-3 line-clamp-2`}>
                  {problem.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className={`text-xs ${colors.textSecondary}`}>
                      {problem.points} pts
                    </span>
                  </div>
                  
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    problem.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                    problem.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bonus Problem */}
        {levelProgress?.megaCarrotEarned && (
          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl">
            <h3 className={`text-lg font-bold ${colors.text} mb-2 flex items-center space-x-2`}>
              <span>🏆</span>
              <span>Bonus Challenge Unlocked!</span>
            </h3>
            <p className={`${colors.textSecondary} mb-4`}>
              You've completed all problems in this level! Take on the bonus challenge for extra points.
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-200">
              Start Bonus Challenge
            </button>
          </div>
        )}
      </div>
    </div>
  );
}