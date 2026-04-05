import { motion } from 'motion/react';
import { Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           
            alt="Cinematic Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-xs font-bold tracking-wider uppercase mb-4 border border-brand-500/20">
              Featured Content
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Experience the <span className="text-brand-500">Unseen.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Discover a curated collection of high-impact video clips, from breathtaking landscapes to intense action sequences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/videos" 
                className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-brand-500/20"
              >
                <Play className="w-5 h-5 fill-current" />
                Browse Clips
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Latest Clips</h2>
          <Link to="/videos" className="text-brand-500 hover:text-brand-400 font-medium flex items-center gap-1 group">
            View all <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 'helicopter-crash', title: 'Helicopter Crash', duration: '1:05' },
            { id: 'gang-incident', title: 'Man gets killed by gang member', duration: '2:15' },
            { id: 'building-collapse', title: 'Building collapses from walls collapsing', duration: '1:30' },
            { id: 'oakridge-rescue', title: 'Firefighters rescuing people from Oakridge Center collapsing', duration: '3:45' },
          ].map((video) => (
            <Link to="/videos" key={video.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-900 border border-slate-800 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase">
                  {video.duration}
                </div>
              </div>
              <h4 className="text-white font-bold group-hover:text-brand-500 transition-colors">{video.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
