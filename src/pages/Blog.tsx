import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blog1 from "@/assets/blog1.jpg";
import hockeyPortrait from "@/assets/hockey-portrait.jpg";
import { Button } from "@/components/ui/button";
import TextPressure from "@/components/ui/shadcn-io/text-pressure";
import { WritingText } from "@/components/ui/shadcn-io/writing-text";
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarsSpinner } from "@/components/ui/barspinner";
import VariableProximity from "@/components/ui/shadcn-io/variable-proximity";
import g4 from "@/assets/g4.png"
import g2 from "@/assets/g2.png"
import g5 from "@/assets/g5.png"
import g10 from "@/assets/g10.jpg"

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  // In your component function
  const containerRef = useRef(null);

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    // ask home page to show a quick home loader
    try {
      sessionStorage.setItem("showHomeLoader", "true");
    } catch { }
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <BarsSpinner size="lg" className="mb-4" />
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Red Top Strip */}
      <div className="h-4 bg-primary mt-16 lg:mt-20"></div>

      {/* Hero Quote Section  */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        >
          <img
            src={blog1}
            alt="Justin Abdelkader hockey action"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-12 mx-auto">
            <TextPressure
              text="BEFORE I DIE, I WANT TO"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="white"
              minFontSize={20}
              className="text-xl md:text-1xl text-white/90 font-light max-w-1xl mx-auto leading-relaxed"
            />
            <TextPressure
              text="MAKE SOMETHING BETTER:"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="white"
              minFontSize={20}
              className="text-xl md:text-1xl text-white/90 font-light max-w-1xl mx-auto leading-relaxed"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight ">
            <span className="hover:text-primary transition-colors duration-200">UNIQUE,</span>
            <span className="hover:text-primary transition-colors duration-200"> SOME</span>
            <span className="hover:text-primary transition-colors duration-200"> THINGS</span>
            <span className="hover:text-primary transition-colors duration-200"> THAT</span>
            <span className="hover:text-primary transition-colors duration-200"> HAVE</span>
            <span className="hover:text-primary transition-colors duration-200"> A</span>
            <span className="hover:text-primary transition-colors duration-200"> GREAT</span>
            <span className="hover:text-primary transition-colors duration-200"> IMPACT</span>
          </h1>
        </div>

      </section >

      {/* Section 1: Data Introduction  */}
      < section className="py-20 md:py-28 bg-white" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  WHY DATA MATTERS <br />IN MODERN SPORT
                </h2>
                <div className="w-24 h-1 bg-red-600 mb-6"></div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The role of data in sport has shifted from a supportive tool to a central part of decision-making.
                  Coaches and managers can now track passing networks, recovery times, and even mental resilience to guide both training and match-day strategies.
                  This shift ensures that talent is not just identified but developed with precision.
                </p>
                <p>
                  For young athletes, this shift is a game-changer. Real-time data allows them to see their strengths and weaknesses instantly,
                  instead of waiting seasons to understand their progress. It’s like having a personal roadmap for improvement,
                  where every session becomes a chance to fine-tune skills,
                  sharpen decision-making, and accelerate growth in ways that were impossible a decade ago.
                </p>
                <p>
                  But the influence of data stretches beyond the pitch. Injury risks can be predicted before they strike,
                  financial investments are guided by evidence instead of hype, and boardroom strategies are shaped by patterns invisible to the naked eye.
                  From protecting health to maximizing budgets, the smartest teams now treat data as their most valuable player — one that never tires, never ages,
                  and always delivers clarity when it matters most
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={g10}
                alt="Hockey Player"
                className="w-full h-auto shadow-2xl"
              />
              {/* <div className="image-container">
              <div className="image-wrapper">
                <img
                  src={gemini}
                  alt="Hockey Player"
                  className="responsive-image"
                />
              </div>*/}
            </div>
          </div>
        </div>
      </section >





      {/* Section 3: Injury Prevention Section */}
      {/* < section className="py-20 md:py-28 bg-gray-50" >

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hockey Action"
                className="w-full h-auto shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  INJURY PREVENTION<br />THROUGH DATA
                </h2>
                <div className="w-24 h-1 bg-red-600 mb-6"></div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  One of the most promising uses of sports technology lies in injury prevention. By tracking workloads, movement patterns, and recovery cycles, early warning signs of injuries such as ACL tears can be detected before they become serious. This proactive approach can extend careers and protect athletes during their most crucial development years.
                </p>
                <p>
                  Prevention is more than just avoiding setbacks; it is about building resilience. When players learn to listen to their data, they develop healthier habits that contribute to both performance and longevity in sport.
                </p>
                <p>
                  Justin's commitment to excellence extends beyond individual performance. He's known for his
                  team-first mentality and willingness to do whatever it takes to help his team succeed, whether
                  that means blocking shots, winning battles in the corners, or mentoring younger players.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section > */}



      {/* Section 2:  LEARNING FROM DATA-DRIVEN - Dark Background */}
      <section className="py-20 md:py-28 bg-[#141414]">
        {/* <section className="py-24 lg:py-32 xl:py-40 bg-[#141414]"> */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src={g2}
                alt="Hockey Action"
                className="w-full h-auto shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  LEARNING FROM DATA-DRIVEN<br /> ACADEMY MODELS

                </h2>
                <div className="w-24 h-1 bg-red-600 mb-6"></div>
              </div>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  Some clubs have effectively utilized a data-driven approach in football. Brighton has become a benchmark for how structured,
                  analytics-driven academies can compete with bigger clubs. By tracking player development, performance metrics, and potential,
                  they create clear pathways for young talent.
                  Clubs like Brentford use similar models to identify undervalued players and optimize training.
                </p>
                <p>
                  Compared to Premier League clubs that spend millions on transfers
                  , Brighton and Brentford show that smart use of data can reduce costs while still producing top-level talent. By focusing on measurable growth, scouting insigh
                  ts, and performance analytics, these clubs build sustainable pipelines of players.
                </p>
                <p>
                  This approach highlights a key lesson: with the right data, smaller clubs can maximize outcomes and develop players efficiently.
                  It proves that intelligence and strategy can outweigh sheer financial power in modern football.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section 3: Injury Prevention Section */}
      < section className="py-20 md:py-28 bg-white" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  INJURY PREVENTION<br />THROUGH DATA
                </h2>
                <div className="w-24 h-1 bg-red-600 mb-6"></div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  One of the most promising uses of sports technology lies in injury prevention. By tracking workloads, movement patterns,
                  and recovery cycles, early warning signs of injuries such as ACL tears can be detected before they become serious.
                  This proactive approach can extend careers and protect athletes during their most crucial development years.
                </p>
                <p>
                  Prevention is more than just avoiding setbacks; it is about building resilience. When players learn to listen
                  to their data, they develop healthier habits that contribute to both performance and longevity in sport.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={g4}
                alt="Hockey Player"
                className="w-full h-auto shadow-2xl"
              />
              {/* <div className="image-container">
              <div className="image-wrapper">
                <img
                  src={gemini}
                  alt="Hockey Player"
                  className="responsive-image"
                />
              </div>*/}
            </div>
          </div>
        </div>
      </section >

      {/*Section 4: Qoute Promo Section - Red/Dark Background */}
      < section
        className="py-20 md:py-28 text-white bg-cover bg-center relative"
        style={{
          backgroundColor: 'rgba(175, 24, 54, 1)',
          backgroundBlendMode: 'multiply'
        }}
      >

        < div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <WritingText
              text="TURNING DATA INTO PERFORMANCE"
              inView={true}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 2,
                delay: 0.3
              }}
            />
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Using real-time analytics and performance metrics, I explore how data can improve training, track growth, and identify talent.
            This research helps athletes and coaches make smarter
            decisions and achieve measurable results on and off the field.
          </p>
          {/* <a
            href="#book"
            className="inline-block px-8 py-3 bg-white text-red-600 font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors duration-300 mb-7"
          >
            GET THE BOOK
          </a> */}
        </div >

      </section >


      {/*Section 5: Formula 1 Section */}
      <section className="py-24 lg:py-32 xl:py-40 bg-[#141414]">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Portrait Image - Left Side */}
            <div className="relative">
              <div className="order-2 md:order-1 relative">
                <img
                  src={g5}
                  alt="Hockey Action"
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>

            {/* Story Content - Right Side */}
            <div className="space-y-6 lg:px-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
                  WHAT FORMULA 1 TEACHES US<br /> ABOUT DATA
                </h2>
                <div className="w-24 h-1 bg-red-600 mb-6"></div>
              </div>

              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  Formula 1 is one of the most data-driven sports in the world.
                  Every car is equipped with hundreds of sensors that monitor tire temperature, fuel efficiency, engine performance, and
                  even the smallest aerodynamic changes. Teams collect millions of data points during each race and practice session, transforming
                  raw numbers into insights that can decide victory or defeat.
                </p>
                <p>
                  The use of data in F1 goes beyond cars — it influences strategy,
                  pit stops, and driver performance. Split-second decisions are made based on live analytics,
                  predicting weather conditions, tire wear, or the exact lap when a driver should push harder.
                  This precision shows how data can turn uncertainty into controlled strategy.
                </p>
                <p>
                  For sports like football, F1 offers an important lesson: data isn't just for analysis after the fact — it
                  can be a real-time decision-making tool. Just as teams optimize cars and drivers, academies and clubs can optimize players,
                  training intensity, and even recovery patterns. Formula 1 proves that in the modern era, the smartest use of
                  data often beats the biggest budget.
                </p>
              </div>
              <div className="pt-4">
                {/* <a
                  href="https://www.nhl.com/player/justin-abdelkader-8471716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase text-white bg-transparent border-2 border-white rounded hover:bg-white hover:text-black transition-all duration-300"
                >
                  SEE JUSTIN'S NHL STATS
                </a> */}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      < section className="py-12 bg-white" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold text-sm tracking-wide hover:bg-gray-800 transition-colors duration-300"
          >
            BACK TO HOME
          </a>
        </div>
      </section >
      {/* </section > */}

      <Footer />
    </div >
  );
};

export default Blog;
