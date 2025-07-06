import React from 'react';

export default function Temp() {
  return (
    <main className="min-h-screen flex flex-col w-full max-w-[1440px] mx-auto" style={{ minHeight: '802px', opacity: 1 }}>
      {/* Hero Section */}
      <section
        className="relative w-full flex flex-col md:flex-row items-center justify-between min-h-[600px] px-8 py-16"
        style={{
          backgroundImage: "linear-gradient(rgba(10,30,40,0.7),rgba(10,30,40,0.7)), url('/images/bg_image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Left: Headline and CTA */}
        <div className="flex-1 flex flex-col justify-center max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            LAND YOUR <br />
            <span className="text-[#94BB32]">DREAM JOB!</span>
          </h1>
          <p className="text-white text-base md:text-lg mb-6 mt-2 max-w-md">OUR EXPERTS PROVIDE EVERYTHING YOU NEED TO SUCCEED...</p>
          <div className="bg-black bg-opacity-50 rounded-lg p-6 mb-6 max-w-md">
            <div className="text-white text-xl font-bold mb-1">TRANSFORM YOUR CAREER<br />WITH <span className="text-[#94BB32]">EXPERT COACHING</span></div>
            <div className="text-[#94BB32] text-sm font-semibold mb-4">INTERVIEW GUARANTEE PROGRAM</div>
            <button className="bg-[#94BB32] text-black font-bold px-8 py-3 rounded-md shadow hover:bg-[#7fa82a] transition">BOOK A FREE SESSION NOW</button>
          </div>
        </div>
        {/* Right: Feature Grid */}
        <div className="flex-1 flex flex-col items-center md:items-end z-10 mt-10 md:mt-0">
          <div className="bg-black bg-opacity-40 rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg border border-white border-opacity-20">
            {/* Feature Items */}
            {[
              'JOB SEARCH STRATEGY',
              'ATS-OPTIMIZED RESUME',
              'INTRO TO RECRUITERS IN YOUR DOMAIN',
              'RESUMES THAT SHOW VALUE',
              'WE FIND JOBS AND APPLY FOR YOU',
              'JOB INTERVIEW COACHING',
              'LINKEDIN OPTIMIZATION',
              'MOCK INTERVIEWS',
              'PROFESSIONAL RESUME WRITING',
              'SALARY NEGOTIATIONS',
              'CAREER TRANSFORMATION',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center bg-white bg-opacity-90 rounded-lg px-4 py-2 text-black font-medium text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" fill="#94BB32" />
                  <path d="M8 12.5l2 2 4-4" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="ml-2">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Trusted By Logos */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
          <div className="bg-black bg-opacity-60 rounded-full px-6 py-2 text-white text-xs tracking-widest mb-2">TRUSTED BY PEOPLE AT</div>
          <div className="flex space-x-8">
            <img src="/images/nbc.png" alt="NBC" className="h-8" />
            <img src="/images/abc.png" alt="ABC" className="h-8" />
            <img src="/images/fox.png" alt="FOX" className="h-7" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="min-h-screen flex flex-col w-full max-w-[1440px] mx-auto bg-gradient-to-b from-[#e6f2f3] to-[#b2d8db]">
        {/* Decorative Radial Gradient Background - Top Left */}
        <div
          style={{
            position: 'absolute',
            width: '280px',
            height: '180px',
            top: '-40px',
            left: '-80px',
            opacity: 1,
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(33, 143, 154, 0.3) 0%, rgba(0, 102, 112, 0.3) 100%)',
            filter: 'blur(60px)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        {/* Decorative Radial Gradient Background - Bottom Right */}
        <div
          style={{
            position: 'absolute',
            width: '280px',
            height: '180px',
            bottom: '-40px',
            right: '-80px',
            opacity: 1,
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(33, 143, 154, 0.3) 0%, rgba(0, 102, 112, 0.3) 100%)',
            filter: 'blur(60px)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        {/* About Me Section */}
        <section className="flex flex-col md:flex-row bg-white rounded shadow-lg mt-16 mx-4 md:mx-auto max-w-4xl relative z-10">
          {/* Left: Text Content */}
          <div className="flex-1 p-8 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-bold mb-6">ABOUT ME</h2>
            <p className="mb-4 text-gray-700 w-full text-left max-w-xl">
              I'm <span className="font-bold">Maureen Boehm</span>, founder and president of <span className="font-bold">Empower Your Career</span>, Inc., based in the Austin, Texas area. I help ambitious professionals and executives transform their careers through <span className="font-bold">resume writing, LinkedIn optimization</span>, and <span className="font-bold">interview coaching</span>.
            </p>
            <p className="mb-4 text-gray-700 w-full text-left max-w-xl">
              From overcoming polio at age seven to advancing from AT&T programmer to <span className="font-bold">district manager</span>, then <span className="font-bold">COO</span>, I learned resilience and strategy firsthand. I spent <span className="font-bold">15 years</span> as an award-winning recruiter, earning President's Club four times in seven years.
            </p>
            <p className="mb-4 text-gray-700 w-full text-left max-w-xl">
              I hold a <span className="font-bold">Master's from Pace University</span> and a <span className="font-bold">Bachelor's from Rutgers</span>. With <span className="font-bold">20+ years</span> of corporate leadership, I've helped <span className="font-bold">1,000+ clients</span> with a <span className="font-bold">98% satisfaction rate</span> and crafted <span className="font-bold">50,000+ resumes</span>.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded shadow hover:bg-teal-700 transition text-sm font-semibold"
            >
              CONNECT FOR A FREE CONSULTATION
            </a>
          </div>
          {/* Right: Profile Image and Name */}
          <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#e6f2f3] to-[#b2d8db] rounded-b md:rounded-r md:rounded-bl-none relative">
            <img
              src="/images/about_section_lady.png"
              alt="Profile"
              className="w-64 h-64 rounded-lg object-cover mb-4 border-4 border-white shadow-md md:-ml-12 -mt-8 z-20"
            />
            <div className="text-center">
              <div className="font-bold text-lg">Maureen Boehm</div>
              <div className="bg-white text-gray-700 text-xs px-2 py-1 rounded shadow mt-1 inline-block">Helping Professionals Land Dream Jobs</div>
            </div>
          </div>
        </section>
        {/* Stats/Info Bar */}
        <section className="flex flex-col items-center justify-center mt-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-4xl bg-teal-700 rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">20+ Years</span>
              <span className="text-teal-100 text-xs mt-1 text-center">Corporate Leadership Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">15+ Years</span>
              <span className="text-teal-100 text-xs mt-1 text-center">Executive Recruiting and Placement</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">50K+</span>
              <span className="text-teal-100 text-xs mt-1 text-center">Resume Written</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">98%</span>
              <span className="text-teal-100 text-xs mt-1 text-center">Client Satisfaction Rate</span>
            </div>
          </div>
        </section>
      </section>

      {/* Video CTA Section */}
      <section
        className="flex flex-col md:flex-row items-center justify-center relative overflow-hidden mx-auto"
        style={{
          width: '100%',
          height: '458px',
          paddingTop: '60px',
          paddingBottom: '60px',
          opacity: 1,
          background: 'radial-gradient(ellipse at 40% 40%, #2196f3 0%, #006670 100%)',
        }}
      >
        {/* Decorative Dots */}
        <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-lime-300 opacity-80 z-0" />
        <div className="absolute top-4 left-1/3 w-2 h-2 rounded-full bg-lime-200 opacity-70 z-0" />
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-blue-200 opacity-60 z-0" />
        <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-blue-400 opacity-70 z-0" />
        <div className="absolute bottom-4 right-1/3 w-2 h-2 rounded-full bg-blue-300 opacity-60 z-0" />
        <div className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-lime-200 opacity-50 z-0" />
        {/* Video Thumbnail */}
        <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-xl border border-white border-opacity-30 p-4 md:mr-8 mb-8 md:mb-0" style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)' }}>
          <div className="relative w-72 h-44 md:w-96 md:h-56 rounded-lg overflow-hidden">
            <img
              src="/images/youtube.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Play Button Overlay */}
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-red-600 rounded-full p-4 shadow-lg">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.8" />
                  <polygon points="13,10 24,16 13,22" fill="#E53E3E" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* Call to Action Box */}
        <div className="flex flex-col justify-center bg-white bg-opacity-10 rounded-xl border border-white border-opacity-30 p-6 min-w-[300px] max-w-md w-full" style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Learn more in the <span className="text-black text-opacity-80">video</span></h2>
          <p className="text-white text-opacity-90 mb-6"><span className="font-bold text-white">Still unsure?</span> Talk with me about your job search journey.</p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg shadow hover:bg-lime-500 transition text-base"
          >
            <svg className="mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m-4 4l4 4" /></svg>
            Book a Call
          </a>
        </div>
      </section>

      {/* Empower Program Section */}
      <section
        className="relative flex flex-col items-center justify-center w-full min-h-[600px] py-16"
        style={{
          backgroundImage: "linear-gradient(rgba(10,30,40,0.7),rgba(10,30,40,0.7)), url('/images/Empower.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What is the <span className="text-[#94BB32]">Empower Your Career©</span> Program
          </h2>
          <p className="text-white text-opacity-90 text-base md:text-lg font-normal">
            It is a <span className="font-bold">90-day program</span> designed to help you secure the right job at the right salary. It empowers you to get responses from real decision-makers. We guarantee that you will receive <span className="font-bold">interview requests/job offers within 90 days</span>, or we will work with you until you do.
          </p>
        </div>
        <div className="relative flex flex-col items-center w-full max-w-4xl">
          {/* Bordered Box */}
          <div className="w-full rounded-xl border border-white border-opacity-60 bg-black bg-opacity-0 px-6 py-10 md:py-14 md:px-12 flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">You will learn:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full">
              <div className="flex items-start gap-3">
                <svg className="mt-1 flex-shrink-0" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#94BB32"/><path d="M8 12.5l2.5 2.5 5-5" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white text-base md:text-lg">THE IMPORTANCE OF AN ATS-FRIENDLY RESUME</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="mt-1 flex-shrink-0" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#94BB32"/><path d="M8 12.5l2.5 2.5 5-5" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white text-base md:text-lg">HOW TO PREPARE FOR A JOB INTERVIEW</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="mt-1 flex-shrink-0" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#94BB32"/><path d="M8 12.5l2.5 2.5 5-5" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white text-base md:text-lg">HOW TO AVOID COMMON MISTAKES ON A LINKEDIN PROFILE</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="mt-1 flex-shrink-0" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#94BB32"/><path d="M8 12.5l2.5 2.5 5-5" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white text-base md:text-lg">RESUME TIPS FOR CAREER CHANGERS</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="mt-1 flex-shrink-0" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#94BB32"/><path d="M8 12.5l2.5 2.5 5-5" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white text-base md:text-lg">HOW TO USE THE STAR METHOD FOR INTERVIEWS AND YOUR RESUME</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="mt-1 flex-shrink-0" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#94BB32"/><path d="M8 12.5l2.5 2.5 5-5" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white text-base md:text-lg">PROVEN CAREER ADVANCEMENT STRATEGIES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-gradient-to-r from-[#218F9A] from-[-9.21%] to-[#FFFFFF] to-[111.38%] p-5 flex flex-col items-center">
        <h1 className="text-black text-center text-4xl font-bold uppercase tracking-wide mt-10">HOW DOES THE <span className="text-white">PROGRAM</span> WORK?</h1>
        <img src="/images/roadmap.jpg" alt="Roadmap" className="pt-10 w-[70vw] rounded-md" />
        
        <div className="flex flex-wrap justify-center gap-2.5 mt-16">
          <div className="bg-[#218F9A] text-white p-2.5 px-5 rounded-2xl text-lg font-medium flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#218F9A" />
              <path d="M7 11L10 14L16 8" stroke="#94BB32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ml-2">Build your confidence with mock interviews</span>
          </div>
          <div className="bg-[#218F9A] text-white p-2.5 px-5 rounded-2xl text-lg font-medium flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#218F9A" />
              <path d="M7 11L10 14L16 8" stroke="#94BB32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ml-2">Target your dream job with a clear job search strategy</span>
          </div>
          <div className="bg-[#218F9A] text-white p-2.5 px-5 rounded-2xl text-lg font-medium flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#218F9A" />
              <path d="M7 11L10 14L16 8" stroke="#94BB32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ml-2">Attract recruiters with a great LinkedIn Profile</span>
          </div>
          <div className="bg-[#218F9A] text-white p-2.5 px-5 rounded-2xl text-lg font-medium flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#218F9A" />
              <path d="M7 11L10 14L16 8" stroke="#94BB32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ml-2">Showcase your value with an ATS-friendly Resume</span>
          </div>
          <div className="bg-[#218F9A] text-white p-2.5 px-5 rounded-2xl text-lg font-medium flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#218F9A" />
              <path d="M7 11L10 14L16 8" stroke="#94BB32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ml-2">Differentiate yourself with job interview coaching using the STAR model</span>
          </div>
        </div>
        <p className="text-black text-center mt-5 text-base leading-6 max-w-[1000px] mb-20">
          An ATS-optimized resume is essential, but your accomplishments make you stand out when your resume gets into human hands. Your achievements make you unique, not only the tasks associated with your job. We ask you specific questions to highlight your accomplishments so our resume writers can create a powerful resume for you that will get you interviews.
        </p>
      </section>

      {/* Review Section */}
      <section
        className="p-10 text-center font-[Segoe_UI_Variable]"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(33,143,154,0.5) 0%, rgba(0,102,112,0.5) 100%)',
          backdropFilter: 'blur(372px)',
          backgroundSize: '50% 50%',
          padding: '40px 20px',
        }}
      >
        <h2 className="text-[#111827] text-4xl mb-2 font-bold">WHAT OUR CLIENTS SAY</h2>
        <p className="text-[#4B5563] text-lg mb-8">Real success stories from real professionals</p>
        <div className="bg-white border-2 border-black rounded-lg inline-block p-5 text-left max-w-3xl">
          <div className="flex flex-row items-start">
            <div className="mr-5 max-w-80">
              <img src="/images/review.png" alt="Kim S." className="w-80 h-80 rounded-none object-cover mb-2" />
              <p className="text-[#444343] text-base mt-2">
                Kim S.<br />Financial Services Operations and Technology Executive - Customer Focused, Strategic Leadership, C-Suite Relationship Management
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#FACC15] text-base font-bold leading-[25.4px] text-justify mb-2">★★★★★</p>
              <p className="text-[#444343] text-base mb-2">
                Maureen helped me improve my resume by changing the approach from task-driven to highlighting my accomplishments and value. She also provided me with job interview coaching. Including two mock interviews. Immediately after the first mock interview, Maureen coached me on the areas I needed to address. She gave me a different perspective to improve my delivery, pace using the STAR model and EQ to showcase my achievements and successes. For the second mock interview, Maureen used additional questions, and I could see how much I improved! We currently also discuss strategy and approaches to specific key interviewers. As a result, I am now confident and optimistic going into job interviews with prospective employers.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className="w-12 h-12 rounded-full bg-transparent border-2 border-gray-700 flex items-center justify-center text-gray-700 text-2xl mr-5">
            ←
          </button>
          <div className="flex space-x-2">
            <span className="w-2.5 h-2.5 bg-teal-600 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
          </div>
          <button className="w-12 h-12 rounded-full bg-transparent border-2 border-gray-700 flex items-center justify-center text-gray-700 text-2xl ml-5">
            →
          </button>
        </div>
      </section>

      {/* Achievements & Accolades Section */}
      <section className="p-40">
        <section className="w-full text-center py-12 px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#135258]"></div>
            <span className="px-4 py-1 text-sm uppercase tracking-widest font-medium text-white bg-[#135258]">
              RECOGNITION
            </span>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[#135258]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            ACHIEVEMENTS & ACCOLADES
          </h2>
          <p className="inline-block px-4 py-2 text-gray-100 text-base bg-[#333333] rounded-md">
            Recognition of excellence in career coaching and professional development services
          </p>
        </section>

        <section className="relative w-full min-h-screen overflow-hidden">
          <div className="bg-white rounded-3xl border-8 border-white p-8 md:p-12" style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='skyGradient' gradientTransform='rotate(256.77)'><stop offset='4.45%' stop-color='%2386D3F5'/><stop offset='77.58%' stop-color='%234EB0DC'/><stop offset='90.88%' stop-color='%230073B0'/></linearGradient></defs><rect width='1200' height='800' fill='url(%23skyGradient)' rx='40'/><path d='M0 400 Q 300 350 600 400 T 1200 400 L1200 800 L0 800 Z' fill='%2394B839'/><path d='M0 500 Q 300 470 600 500 T 1200 500 L1200 800 L0 800 Z' fill='%23218F9A'/></svg>")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
            <div className="w-full flex items-center justify-center px-4 py-16 min-h-screen">
              {/* Badge Image */}
              <div className="flex-1 flex justify-center items-center">
                <img
                  src="/images/badge.png"
                  alt="Top Career Coach Badge"
                  className="w-64 md:w-80"
                />
              </div>

              {/* Info Card */}
              <div className="flex-1 flex justify-center items-center">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 max-w-md w-full space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 text-green-700 flex items-center justify-center rounded-full">
                      🏆
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      Top Career Coaches in Austin in 2025
                    </h2>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      <span className="font-semibold text-green-700">Issued by:</span> InfluenceDigital Media
                    </li>
                    <li>
                      <span className="font-semibold text-green-700">Date:</span> Jun 2024
                    </li>
                    <li>
                      <span className="font-semibold text-green-700">Organization:</span> Empower You Career, Inc.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm">
                    The honor is awarded to career coaches who positively impact their clients' lives and careers.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full w-fit">
                    ✅ Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* E-Book Promo Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-4" style={{
        background: 'linear-gradient(68.56deg, #218F9A 6.12%, #FFFFFF 99.72%)',
      }}>
        {/* Book Image */}
        <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
          <img src="/images/thought.png" alt="From Setback to Success Book" className="w-72 md:w-96 shadow-xl rounded-lg" />
        </div>
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl md:pl-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-6 leading-tight">FROM SETBACK TO SUCCESS: RESILIENCE STRATEGIES FOR YOUR CAREER</h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg text-left">
            Discover how <span className="font-bold">Maureen Boehm</span> transformed <span className="font-bold">paralysis into power</span> - and learn practical strategies to overcome any obstacle in your career journey.<br/>
            Unleash your resilience, <span className="font-bold">rewrite your professional story</span>, and stand out in today's competitive job market.
          </p>
          <a href="#" className="inline-flex items-center px-6 py-3 bg-[#218F9A] text-white font-semibold rounded shadow hover:bg-[#135258] transition text-base">
            <svg className="mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Download Free E-Book
          </a>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 px-4 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(20,40,60,0.6),rgba(20,40,60,0.6)), url('/images/end.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Transform Your Career?</h2>
          <p className="text-white text-lg mb-8">Take the first step towards your dream career. Book a free consultation call today.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-3 rounded font-semibold text-white shadow-md text-base"
              style={{
                background: 'linear-gradient(90deg, #1E3A8A 0%, #0E7490 100%)',
              }}
            >
              Book Free Consultation
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded font-semibold text-white border border-white bg-transparent text-base hover:bg-white hover:text-[#1E3A8A] transition"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Optional: Overlay for extra darkening if needed */}
        <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />
      </section>
      <section
  className="text-white px-6 py-12"
  style={{
    background:
      "linear-gradient(93.06deg, #01535B 4.59%, #0D6972 20.31%, #0F6D76 42.84%, #13747E 52.71%, #167A84 70.91%, #218F9A 89.71%)",
  }}
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start mr-32 ml-32">
    {/* Logo & Description */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left ml-10 min-w-80">
      <div className="flex items-center gap-8">
        <img src="/images/footer_path.png" alt="Logo" className="w-20" />
        <div className="max-w-md">
          <h3 className="font-semibold text-lg text-[#D0FF00]">
            Empower Your <span className="block">Career</span>
          </h3>
        </div>
      </div>

      <p className="text-sm max-w-lg mt-4">
        Professional Resume Writing services dedicated to helping you achieve your career goals with expertly crafted resumes and career guidance.
      </p>

      <div className="flex gap-3 mt-4">
        {["linkedin", "facebook", "instagram", "youtube"].map((icon) => (
          <a href="#" key={icon}>
            <div className="w-8 h-8 rounded-full ring-1 ring-gray-300 flex items-center justify-center">
              <img src={`/images/${icon}.svg`} alt={icon} className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* Quick Links */}
    <div className="text-center md:text-left ml-20">
      <h4 className="font-semibold text-[#D0FF00] mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">How It Works</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">Podcast</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="text-center md:text-left">
      <h4 className="font-semibold text-[#D0FF00] mb-3">Contact Info</h4>
      <ul className="space-y-2 text-sm">
        <li className="flex items-start gap-2">
          📍 150 Klattenhoff Ln., Ste. 2108<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hutto, Texas 78634, US
        </li>
        <li className="flex items-center gap-2">
          📧 support@empoweryourcareer.net
        </li>
        <li className="flex items-center gap-2">
          📹 Professional Resume Writing
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white/70">
    © 2025, Professional Resume Writing | Empower Your Career. All Rights Reserved.
  </div>
</section>

    </main>
  );
}