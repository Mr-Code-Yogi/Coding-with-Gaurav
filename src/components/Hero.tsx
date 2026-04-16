

// import { Mail, Download, ArrowRight, Briefcase, Sparkles } from "lucide-react";
// import { motion } from "framer-motion";

// // Import your photo
// import ProfileImg from "/src/assets/Gaurav Kumar.jpeg";

// const Hero = () => {
//   return (
//     <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
//       {/* Enhanced Animated Background Orbs */}
//       <div className="absolute inset-0 opacity-30 pointer-events-none">
//         <motion.div
//           animate={{ x: [0, 120, 0], y: [0, -60, 0] }}
//           transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
//           className="absolute top-12 left-12 w-[420px] h-[420px] bg-amber-500/70 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
//           transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-24 right-16 w-[360px] h-[360px] bg-blue-500/70 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

//           {/* ==================== PREMIUM IMAGE CARD (with floating badge) ==================== */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
//           >
//             <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md group">
//               {/* Outer glow ring */}
//               <div className="absolute -inset-6 bg-gradient-to-br from-amber-400/30 via-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-700" />

//               <div className="relative backdrop-blur-3xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">

//                 {/* ==================== PREMIUM FLOATING FREELANCE BADGE ==================== */}
//                   <motion.div
//                     initial={{ opacity: 0, y: -20, scale: 0.8 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 120 }}
//                     whileHover={{ scale: 1.05, y: -4 }}
//                     className="absolute -right-0 z-50"
//                   >
//                     <div className="relative group/badge">
                    
//                       <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 rounded-3xl blur-xl opacity-60 group-hover/badge:opacity-90 transition-all duration-500" />

//                       <div className="
//                         relative flex items-center gap-2.5 
//                         bg-gradient-to-r from-emerald-600 to-teal-600 
//                         backdrop-blur-2xl border border-emerald-300/50
//                         px-6 py-2 rounded-3xl shadow-2xl shadow-emerald-900/50
//                         text-white font-semibold text-sm tracking-[0.5px] uppercase
//                         hover:shadow-emerald-500/30 transition-all duration-300
//                       ">
                      
//                         <div className="relative flex h-3 w-3">
//                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
//                           <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300" />
//                         </div>

//                         <Briefcase className="w-4 h-4" />
//                         <span className="font-medium">Open for Freelance</span>

                        
//                         <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
//                       </div>

                    
//                       <div className="absolute -top-2 -left-3 text-[10px] font-bold tracking-widest bg-white/10 backdrop-blur-md text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-300/30">
//                         NOW
//                       </div>
//                     </div>
//                   </motion.div>

//                 {/* Profile Image Container */}
//                 <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/70 overflow-hidden">
//                   <div className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden ring-4 ring-offset-4 ring-offset-slate-900 ring-amber-400/80 shadow-2xl transition-all duration-700 group-hover:ring-amber-300 group-hover:scale-105">
//                     <img
//                       src={ProfileImg}
//                       alt="Gaurav Kumar"
//                       className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
//                     />
//                   </div>

//                   {/* Title block */}
//                   <div className="mt-8 text-center space-y-1">
//                     <p className="text-xl font-semibold text-amber-400 tracking-wide">Junior Research Fellow</p>
//                     <p className="text-slate-400 text-sm">Institute of Artificial Intelligence (IAI)</p>
//                     <p className="text-xs text-slate-500">Dev Sanskriti Vishwavidyalaya, Haridwar</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* ==================== TEXT CONTENT (unchanged except minor polish) ==================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="order-2 lg:order-1 max-w-2xl text-center lg:text-left space-y-9"
//           >
//             <div className="space-y-3">
//               <h1 className="text-[3.1rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[5rem] font-black tracking-[-3.5px] leading-none bg-gradient-to-br from-white via-amber-100 to-white bg-clip-text text-transparent">
//                 Gaurav Kumar
//               </h1>
//               <p className="text-2xl md:text-3xl font-medium text-amber-400 tracking-wide">
//                 AI Researcher • Full-Stack Web &amp; Mobile App Engineer • Trainer &amp; Project Guide
//               </p>
//             </div>

//             <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
//               Building production-grade web &amp; mobile solutions (React • Flutter • React Native • LLMs) 
//               that fuse ancient Indian wisdom with cutting-edge artificial intelligence. 
//               Currently <span className="font-semibold text-emerald-400">open for freelance collaborations</span>, 
//               corporate workshops, and academic mentorship.
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
//               <motion.a
//                 href="#contact"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="group flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50"
//               >
//                 <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//                 Let’s Discuss Your Project
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
//               </motion.a>

//               <motion.a
//                 href="https://drive.google.com/uc?export=download&id=1BN0zKGiuN2-FL7qnMwlRTdU30oCO5FKX"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="group flex items-center justify-center gap-3 border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-950 text-amber-400 font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300"
//               >
//                 <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
//                 Download CV
//               </motion.a>
//             </div>

//             {/* Contact line */}
//             <div className="flex items-center justify-center lg:justify-start gap-8 text-sm pt-4">
//               <a
//                 href="mailto:tech_gaurav@outlook.com"
//                 className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors group"
//               >
//                 <Mail className="w-5 h-5 group-hover:scale-110 transition" />
//                 <span className="font-medium">tech_gaurav@outlook.com</span>
//               </a>
//               {/* <div className="hidden sm:block w-px h-4 bg-slate-600" /> */}
//               {/* <p className="text-slate-400 font-medium">Available worldwide • Training • Mentorship</p> */}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import { Mail, Download, ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Import your photo
// import ProfileImg from "/src/assets/Passport Image.png";
import ProfileImg from "/src/assets/Professional Passport Photo - Gaurav.png";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Animated Background Orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-12 left-12 w-[420px] h-[420px] bg-amber-500/70 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-24 right-16 w-[360px] h-[360px] bg-blue-500/70 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* ==================== PREMIUM IMAGE CARD (with floating badge) ==================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 relative pt-6 sm:pt-6 md:pt-8 lg:pt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md group">
              {/* Outer glow ring */}
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-400/30 via-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative backdrop-blur-3xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">

                {/* ==================== PREMIUM FLOATING FREELANCE BADGE ==================== */}
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 120 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="absolute -right-0 z-50"
                >
                  <div className="relative group/badge">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 rounded-3xl blur-xl opacity-60 group-hover/badge:opacity-90 transition-all duration-500" />

                    <div className="
                      relative flex items-center gap-2.5 
                      bg-gradient-to-r from-emerald-600 to-teal-600 
                      backdrop-blur-2xl border border-emerald-300/50
                      px-6 py-2 rounded-3xl shadow-2xl shadow-emerald-900/50
                      text-white font-semibold text-sm tracking-[0.5px] uppercase
                      hover:shadow-emerald-500/30 transition-all duration-300
                    ">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300" />
                      </div>

                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">Open for Freelance</span>
                      <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                    </div>

                    <div className="absolute -top-2 -left-3 text-[10px] font-bold tracking-widest bg-white/10 backdrop-blur-md text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-300/30">
                      NOW
                    </div>
                  </div>
                </motion.div>

                {/* Profile Image Container */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/70 overflow-hidden">
                  <div className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden ring-4 ring-offset-4 ring-offset-slate-900 ring-amber-400/80 shadow-2xl transition-all duration-700 group-hover:ring-amber-300 group-hover:scale-105">
                    <img
                      src={ProfileImg}
                      alt="Gaurav Kumar"
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>

                  {/* Title block */}
                  <div className="mt-8 text-center space-y-1">
                    <p className="text-xl font-semibold text-amber-400 tracking-wide">Junior Research Fellow</p>
                    <p className="text-slate-400 text-sm">Institute of Artificial Intelligence (IAI)</p>
                    <p className="text-xs text-slate-500">Dev Sanskriti Vishwavidyalaya, Haridwar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================== TEXT CONTENT ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-2 lg:order-1 max-w-2xl text-center lg:text-left space-y-9 pt-6 sm:pt-8 lg:pt-0"
          >
            <div className="space-y-3">
              <h1 className="text-[3.1rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[5rem] font-black tracking-[-3.5px] leading-none bg-gradient-to-br from-white via-amber-100 to-white bg-clip-text text-transparent">
                Gaurav Kumar
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-amber-400 tracking-wide text-left">
                AI Researcher • Full-Stack Web &amp; Mobile App Developer • Trainer &amp; Project Guide
              </p>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify">
              Building production-grade web &amp; mobile solutions (React • Flutter • React Native • LLMs) 
              that fuse ancient Indian wisdom with cutting-edge artificial intelligence. 
              Currently <span className="font-semibold text-emerald-400">open for freelance collaborations</span>, 
              corporate workshops, and academic mentorship.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-semibold text-lg px-4 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Let’s Discuss Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </motion.a>

              <motion.a
                href="https://drive.google.com/uc?export=download&id=1BN0zKGiuN2-FL7qnMwlRTdU30oCO5FKX"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-3 border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-950 text-amber-400 font-semibold text-lg px-4 py-4 rounded-2xl transition-all duration-300"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </motion.a>
            </div>

            {/* Contact line */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm pt-4">
              <a
                href="mailto:tech_gaurav@outlook.com"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition" />
                <span className="font-medium">tech_gaurav@outlook.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;