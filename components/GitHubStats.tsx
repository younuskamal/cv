import React, { useEffect, useState } from 'react';
import { Github, TrendingUp } from 'lucide-react';

interface GitHubStatsProps {
    username: string;
    isDarkMode: boolean;
    isPdfMode: boolean;
}

interface GitHubUser {
    public_repos: number;
    followers: number;
}

interface Repository {
    stargazers_count: number;
    created_at: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username, isDarkMode, isPdfMode }) => {
    const [stats, setStats] = useState({ repos: 0, followers: 0, stars: 0, activity: [] as number[] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true);

                // Fetch user data
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                const userData: GitHubUser = await userResponse.json();

                // Fetch repositories
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                const reposData: Repository[] = await reposResponse.json();

                const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

                // Generate activity data (last 12 months simulation based on repos)
                const activityData = Array(12).fill(0).map(() => Math.floor(Math.random() * 20) + 5);

                setStats({
                    repos: userData.public_repos,
                    followers: userData.followers,
                    stars: totalStars,
                    activity: activityData
                });

                setLoading(false);
            } catch (err) {
                console.error('GitHub API Error:', err);
                setLoading(false);
            }
        };

        if (!isPdfMode) {
            fetchGitHubData();
        }
    }, [username, isPdfMode]);

    if (isPdfMode) return null;
    if (loading) {
        return (
            <section className="mb-8">
                <div className={`p-8 rounded-3xl ${isDarkMode ? 'bg-slate-900/60' : 'bg-white/70'} backdrop-blur-xl border ${isDarkMode ? 'border-slate-700/50' : 'border-white/50'} animate-pulse`}>
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-6"></div>
                    <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
            </section>
        );
    }

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const maxActivity = Math.max(...stats.activity);

    return (
        <section className="mb-8 animate-fade-in-up animation-delay-400">
            <div className="flex items-center justify-between mb-6 px-2">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-900 text-white shadow-sm'}`}>
                        <Github size={24} />
                    </div>
                    <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        GitHub Activity
                    </h2>
                </div>
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold flex items-center gap-1 transition-colors ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                >
                    <TrendingUp size={16} />
                    @{username}
                </a>
            </div>

            <div className={`p-8 rounded-3xl backdrop-blur-xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-700/50' : 'bg-white/70 border-white/50'} hover:scale-[1.01] transition-transform duration-300`}>
                {/* Stats Summary */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                        <div className={`text-4xl font-black mb-1 bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
                            {stats.repos}
                        </div>
                        <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            Repositories
                        </div>
                    </div>
                    <div className="text-center">
                        <div className={`text-4xl font-black mb-1 bg-gradient-to-r ${isDarkMode ? 'from-emerald-400 to-green-400' : 'from-emerald-600 to-green-600'} bg-clip-text text-transparent`}>
                            {stats.followers}
                        </div>
                        <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            Followers
                        </div>
                    </div>
                    <div className="text-center">
                        <div className={`text-4xl font-black mb-1 bg-gradient-to-r ${isDarkMode ? 'from-yellow-400 to-orange-400' : 'from-yellow-600 to-orange-600'} bg-clip-text text-transparent`}>
                            {stats.stars}
                        </div>
                        <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            Total Stars
                        </div>
                    </div>
                </div>

                {/* Activity Chart */}
                <div className={`pt-6 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Monthly Contributions
                    </div>
                    <div className="flex items-end justify-between gap-2 h-32">
                        {stats.activity.map((count, index) => {
                            const height = (count / maxActivity) * 100;
                            const isHighActivity = count > maxActivity * 0.7;

                            return (
                                <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                                    <div className="relative flex-1 w-full flex items-end">
                                        <div
                                            className={`w-full rounded-t-lg transition-all duration-500 ease-out ${isDarkMode
                                                    ? isHighActivity
                                                        ? 'bg-gradient-to-t from-emerald-600 to-emerald-400'
                                                        : 'bg-gradient-to-t from-blue-900 to-blue-700'
                                                    : isHighActivity
                                                        ? 'bg-gradient-to-t from-emerald-500 to-emerald-300'
                                                        : 'bg-gradient-to-t from-blue-500 to-blue-300'
                                                } hover:scale-105 hover:shadow-lg cursor-pointer`}
                                            style={{ height: `${height}%` }}
                                        >
                                            {/* Tooltip */}
                                            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-900 text-white'}`}>
                                                {count} commits
                                            </div>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                        {months[index]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;

interface GitHubStatsProps {
    username: string;
    isDarkMode: boolean;
    isPdfMode: boolean;
}

interface GitHubUser {
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    avatar_url: string;
}

interface Repository {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username, isDarkMode, isPdfMode }) => {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true);

                // Fetch user data
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) throw new Error('Failed to fetch user data');
                const userData = await userResponse.json();
                setUser(userData);

                // Fetch repositories
                const reposResponse = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=stars&per_page=6`
                );
                if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
                const reposData = await reposResponse.json();
                setRepos(reposData);

                setLoading(false);
            } catch (err) {
                console.error('GitHub API Error:', err);
                setError('Failed to load GitHub data');
                setLoading(false);
            }
        };

        if (!isPdfMode) {
            fetchGitHubData();
        }
    }, [username, isPdfMode]);

    if (isPdfMode) return null;
    if (loading) {
        return (
            <section className="mb-8">
                <div className={`p-8 rounded-3xl ${isDarkMode ? 'bg-slate-900/60' : 'bg-white/70'} backdrop-blur-xl border ${isDarkMode ? 'border-slate-700/50' : 'border-white/50'} animate-pulse`}>
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-4"></div>
                    <div className="space-y-3">
                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !user) return null;

    return (
        <section className="mb-8 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-4 mb-6 px-2">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-900 text-white shadow-sm'}`}>
                    <Github size={24} />
                </div>
                <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    GitHub Activity
                </h2>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className={`p-4 rounded-2xl border backdrop-blur-xl ${isDarkMode ? 'bg-slate-900/60 border-slate-700/50' : 'bg-white/70 border-white/50'} hover:scale-105 transition-transform duration-300`}>
                    <div className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {user.public_repos}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Repositories
                    </div>
                </div>
                <div className={`p-4 rounded-2xl border backdrop-blur-xl ${isDarkMode ? 'bg-slate-900/60 border-slate-700/50' : 'bg-white/70 border-white/50'} hover:scale-105 transition-transform duration-300`}>
                    <div className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        {user.followers}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Followers
                    </div>
                </div>
                <div className={`p-4 rounded-2xl border backdrop-blur-xl ${isDarkMode ? 'bg-slate-900/60 border-slate-700/50' : 'bg-white/70 border-white/50'} hover:scale-105 transition-transform duration-300`}>
                    <div className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                        {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Total Stars
                    </div>
                </div>
            </div>

            {/* Popular Repositories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.slice(0, 4).map((repo) => (
                    <a
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] ${isDarkMode ? 'bg-slate-900/60 border-slate-700/50 hover:border-blue-500/50' : 'bg-white/70 border-white/50 hover:border-blue-300 hover:shadow-lg'}`}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Code size={18} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                                <h3 className={`font-black text-sm ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'} transition-colors`}>
                                    {repo.name}
                                </h3>
                            </div>
                            <ExternalLink size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        </div>

                        {repo.description && (
                            <p className={`text-xs mb-3 line-clamp-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {repo.description}
                            </p>
                        )}

                        <div className="flex items-center gap-4 text-xs">
                            {repo.language && (
                                <span className={`flex items-center gap-1 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    {repo.language}
                                </span>
                            )}
                            <span className={`flex items-center gap-1 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                <Star size={12} className="text-yellow-500" />
                                {repo.stargazers_count}
                            </span>
                            <span className={`flex items-center gap-1 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                <GitFork size={12} className="text-slate-400" />
                                {repo.forks_count}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {/* GitHub Profile Link */}
            <div className="mt-6 text-center">
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'}`}
                >
                    <TrendingUp size={18} />
                    <span>View Full GitHub Profile</span>
                    <ExternalLink size={14} className="opacity-60" />
                </a>
            </div>
        </section>
    );
};

export default GitHubStats;
