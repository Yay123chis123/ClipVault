import { motion, AnimatePresence } from 'motion/react';
import { Play, AlertTriangle, X, Info } from 'lucide-react';
import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  category: string;
}

const VIDEOS: Video[] = [
  {
    id: 'helicopter-crash',
    title: 'Helicopter Crash',
    description: 'Intense footage of a helicopter incident captured on camera.',
    embedUrl: 'https://drive.google.com/file/d/1SqBYONw0Nad-U5WlLBJ9Z7i70C6OyTFW/preview',
    category: 'Action'
  },
  {
    id: 'gang-incident',
    title: 'Man gets killed by gang member',
    description: 'Documentary footage of a street incident.',
    embedUrl: 'https://drive.google.com/file/d/1WA25b0XYu-B_kgeBaB2hwqZew62l83KY/preview',
    category: 'Documentary'
  },
  {
    id: 'building-collapse',
    title: 'Building collapses from walls collapsing',
    description: 'Dramatic footage of a structural failure and building collapse.',
    embedUrl: 'https://drive.google.com/file/d/1xSzYUuuxVSLbR6JYPD9icQMRZ-KDPabP/preview',
    category: 'Disaster'
  },
  {
    id: 'oakridge-rescue',
    title: 'Firefighters rescuing people from Oakridge Center collapsing',
    description: 'Emergency response and rescue operations at the Oakridge Center collapse.',
    embedUrl: 'https://drive.google.com/file/d/1ADGsqTXHtspa7Zdr2s70RjAjRXVY7P4e/preview',
    category: 'Rescue'
  }
];

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">Video Library</h1>
        <p className="text-slate-400 max-w-2xl">
          Explore our collection of high-quality clips. Click on any title to view the full video.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {VIDEOS.map((video) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group flex flex-col"
          >
            <div 
              className="relative aspect-video cursor-pointer overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="w-14 h-14 bg-brand-500/10 border border-brand-500/20 rounded-full flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                <Play className="w-6 h-6 text-brand-500 group-hover:text-white fill-current" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 bg-slate-950/60 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                  {video.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <button
                onClick={() => setSelectedVideo(video)}
                className="text-xl font-bold text-white mb-2 hover:text-brand-500 transition-colors text-left"
              >
                {video.title}
              </button>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                {video.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="text-brand-500 font-bold text-sm hover:underline"
                >
                  {video.title === 'Helicopter Crash' ? ' Helicopter Crash ' : 'Watch Clip'}
                </button>
                <div className="flex items-center gap-1 text-slate-500">
                  <Info className="w-4 h-4" />
                  <span className="text-xs">HD Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="p-0 sm:p-6">
                {selectedVideo.embedUrl ? (
                  <div className="video-container rounded-xl overflow-hidden bg-black shadow-inner">
                    <iframe 
                      src={selectedVideo.embedUrl} 
                      width="640" 
                      height="480" 
                      allow="autoplay"
                      className="border-0"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-slate-800 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700">
                    <AlertTriangle className="w-12 h-12 text-slate-600 mb-4" />
                    <p className="text-slate-500 font-medium">Preview not available for this clip</p>
                  </div>
                )}
              </div>

              <div className="p-6 bg-slate-900/50">
                <p className="text-slate-300 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
