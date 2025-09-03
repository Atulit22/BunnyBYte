export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  joinDate: string;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  example: string;
  expectedOutput: string;
  starterCode: string;
  testCases: TestCase[];
  hints: string[];
  difficulty: 'easy' | 'intermediate' | 'advanced';
  points: number;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

export interface UserProgress {
  userId: string;
  solvedProblems: string[];
  currentStreak: number;
  totalPoints: number;
  achievements: Achievement[];
  levelProgress: {
    easy: LevelProgress;
    intermediate: LevelProgress;
    advanced: LevelProgress;
  };
}

export interface LevelProgress {
  completed: boolean;
  solvedCount: number;
  totalCount: number;
  rabbitPosition: number;
  megaCarrotEarned: boolean;
  bonusProblemSolved: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  content: string;
  timestamp: string;
  upvotes: number;
  replies: Comment[];
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  fullName: string;
  avatar?: string;
  totalPoints: number;
  problemsSolved: number;
  averageTime: number;
  streak: number;
  rank: number;
  previousRank?: number;
}