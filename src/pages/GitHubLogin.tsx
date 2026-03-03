/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Zap, ArrowRight, Lock, Check, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GitHubLogin = () => {
  const navigate = useNavigate();
  const [isAuthorizing, setIsAuthorizing] = useState(false);

  const handleAuthorize = () => {
    setIsAuthorizing(true);
    setTimeout(() => {
      navigate('/get-started', { state: { oauthSuccess: true, provider: 'GitHub' } });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[480px]">
        {/* Header */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <Github className="w-12 h-12 text-white" />
          <div className="h-px w-8 bg-[#30363d]"></div>
          <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Zap className="w-7 h-7 text-black fill-current" />
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
          <div className="p-6 border-b border-[#30363d]">
            <h1 className="text-xl font-semibold text-white text-center">
              Authorize <span className="text-emerald-400">Lumina</span>
            </h1>
            <p className="text-sm text-[#8b949e] text-center mt-1">
              Lumina by <span className="text-white font-medium">Lumina Technologies Inc.</span>
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Check className="w-5 h-5 text-[#3fb950]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Personal user data</p>
                <p className="text-xs text-[#8b949e]">Full control of repository webhooks and services.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#8b949e]">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Repositories</p>
                <p className="text-xs text-[#8b949e]">Public and private repositories (read-only).</p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-4 flex items-center gap-3">
              <Lock className="w-4 h-4 text-[#8b949e]" />
              <p className="text-xs text-[#8b949e]">
                Lumina will be redirected to <span className="text-[#58a6ff]">https://lumina.ai/auth/callback</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAuthorize}
                disabled={isAuthorizing}
                className="w-full py-2.5 bg-[#238636] hover:bg-[#2ea043] text-white font-semibold rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isAuthorizing ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  'Authorize Lumina'
                )}
              </button>
              <button
                onClick={() => navigate('/get-started')}
                className="w-full py-2.5 bg-transparent hover:bg-[#30363d] text-[#58a6ff] font-semibold rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="p-4 bg-[#0d1117] border-t border-[#30363d] text-center">
            <p className="text-xs text-[#8b949e]">
              Authorizing will redirect to <span className="text-[#58a6ff]">Lumina</span>.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-[#8b949e]">
          <a href="#" className="hover:text-[#58a6ff]">Terms</a>
          <a href="#" className="hover:text-[#58a6ff]">Privacy</a>
          <a href="#" className="hover:text-[#58a6ff]">Security</a>
          <a href="#" className="hover:text-[#58a6ff]">Contact GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default GitHubLogin;
