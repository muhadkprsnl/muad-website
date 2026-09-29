import { Button } from "@/components/ui/button";
import doingimg1 from "@/assets/doingimg1.jpg";
import doingimg2 from "@/assets/doingimg2.webp";
import doingimg3 from "@/assets/doingimg3.png";




const Doingnow = () => {
    return (
        <section id="philanthropy">
            {/* Philanthropy Section */}
            <section id="philanthropy" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <img
                                src={doingimg3}
                                alt="Community Support"
                                className="w-full h-auto shadow-2xl"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                                    WHAT I AM<br />DOING NOW<br />
                                </h2>
                                <div className="w-16 sm:w-20 md:w-24 h-1 bg-red-600 mb-4 sm:mb-6"></div>
                            </div>
                            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                                <p>
                                    I'm currently focused on building Dartle, a platform that helps sports academies track player development, support coaches, and keep parents engaged.
                                </p>
                                <p>
                                    Alongside this, I'm exploring machine learning for talent identification — researching algorithms that can recognize player strengths and match them to the right positions.
                                </p>
                                <p>
                                    Beyond projects, I'm sharpening my skills in data science, automation, and sport-tech innovation, preparing to create solutions that can shape how the next generation of athletes are developed.

                                    At the core, my work is about one thing: using sport and technology together to create impact that lasts.
                                </p>
                            </div>
                            <div className="pt-3 sm:pt-4">
                                {/* <a
                                    href="#contact"
                                    className="inline-block px-6 sm:px-8 py-2.5 sm:py-4 bg-red-600 text-white font-semibold text-xs sm:text-sm tracking-wide hover:bg-red-700 transition-colors duration-300"
                                >
                                    CASE STUDY
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Doingnow;