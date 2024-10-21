// @flow strict
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from '/public/lottie/achievements.json';
import { achievementsData } from "@/utils/data/achievements";

function Achievements() {
    return (
        <div id="achievements" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            {/* Background Image */}
            <Image
                src="/section.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />

            {/* Section Title */}
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Achievements
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            {/* Content */}
            <div className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Lottie Animation */}
                    <div className="flex justify-center items-start">
                        <div className="w-full lg:w-3/4 h-full lg:h-3/4">
                            <AnimationLottie animationPath={lottieFile} />
                        </div>
                    </div>

                    {/* Achievements Timeline */}
                    <div className="relative lg:ml-10">
                        {achievementsData.map((achievement, index) => (
                            <div key={index} className="mb-10 ml-10 relative">
                                {/* Achievement Icon */}
                                <div className="absolute -left-12 top-2.5 w-10 h-10 bg-[#16f2b3] text-white rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>

                                {/* Achievement Text */}
                                <div className="bg-[#1a1443] p-4 rounded-lg shadow-lg">
                                    <h3 className="text-white text-base lg:text-lg font-semibold">
                                        {achievement}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;