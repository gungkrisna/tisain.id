import Image from "next/image";
import { Container } from "./Container";

interface JoinUsSectionProps {
    className?: string;
}

const FreelanceSection = ({ className }: JoinUsSectionProps) => {
    return (
        <Container className={`${className} my-8`}>
            <div className="shadow-2xl">
                <div className="relative py-12 overflow-hidden bg-tisain rounded-xl sm:py-16 lg:py-20">
                    <div className="absolute inset-0">
                        <Image
                            className="object-contain object-right w-full h-full transform scale-125"
                            src="/images/vector/background-pattern-2.svg"
                            alt=""
                            layout="fill"
                        />
                    </div>

                    <div className="relative px-4 mx-auto sm:px-6 lg:px-14">
                        <div className="relative">
                            <div className="absolute"></div>

                            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
                                <div className="flex flex-col justify-between lg:col-span-3">
                                    <div>
                                        <h1 className="text-4xl font-bold text-white sm:text-5xl leading-[4.5rem]">
                                            Our top {" "}
                                            <span className="relative inline">
                                                <Image
                                                    className="absolute top-0 w-auto h-8 -right-8"
                                                    src="/images/vector/design-element.svg"
                                                    alt=""
                                                    width={50}
                                                    height={50}
                                                />
                                                talent {" "}
                                            </span>
                                            <br />
                                            love to work with Tisain.
                                        </h1>
                                        <p className="mt-6 text-sm font-normal font-regular leading-[1.85rem] text-white text-opacity-80 max-w-[70%]">
                                            Tisain is an exclusive network of the top talent. Become one of our freelancers and get the chance to work with top companies and accelerate your career.
                                        </p>
                                    </div>

                                    <div className="mt-8 lg:mt-auto">
                                        <div className="flex -space-x-2">
                                            <Image
                                                className="object-cover inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg"
                                                alt=""
                                                width={56}
                                                height={56}
                                            />
                                            <Image
                                                className="object-cover inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg"
                                                alt=""
                                                width={56}
                                                height={56}
                                            />
                                            <Image
                                                className="object-cover inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg"
                                                alt=""
                                                width={56}
                                                height={56}
                                            />
                                            <Image
                                                className="object-cover inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg"
                                                alt=""
                                                width={56}
                                                height={56}
                                            />
                                            <Image
                                                className="object-cover inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg"
                                                alt=""
                                                width={56}
                                                height={56}
                                            />
                                            <Image
                                                className="object-cover inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg"
                                                alt=""
                                                width={56}
                                                height={56}
                                            />
                                            <Image
                                                className="object-cover inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg"
                                                alt=""
                                                width={56}
                                                height={56}
                                            />
                                        </div>
                                        <p className="mt-4 text-sm font-regular text-white">
                                            Join other 250+ talent, worldwide.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:col-span-2">
                                    <p className="text-lg font-nunino font-medium text-white">
                                        Apply for screening
                                    </p>
                                    <form
                                        action="#"
                                        method="POST"
                                        className="mt-4 space-y-4"
                                    >
                                        <div>
                                            <label htmlFor="" className="sr-only">
                                                {" "}
                                                Full name{" "}
                                            </label>
                                            <div className="">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="block w-full px-4 py-3 text-base font-regular sm:py-3.5 sm:text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="sr-only">
                                                {" "}
                                                Email address{" "}
                                            </label>
                                            <div className="">
                                                <input
                                                    type="email"
                                                    name=""
                                                    id=""
                                                    className="block w-full px-4 py-3 text-base font-regular sm:py-3.5 sm:text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="sr-only">
                                                {" "}
                                                Portfolio/LinkedIn URL{" "}
                                            </label>
                                            <div className="">
                                                <input
                                                    type="url"
                                                    name=""
                                                    id=""
                                                    className="block w-full px-4 py-3 text-base font-regular sm:py-3.5 sm:text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                                                    placeholder="Portfolio/LinkedIn URL"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                                            <button
                                                type="submit"
                                                className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent"
                                            >
                                                Send request
                                            </button>
                                        </div>
                                    </form>

                                    <div className="mt-8 sm:mt-12">
                                        <p className="text-xs font-bold font-strong tracking-widest text-white uppercase text-opacity-70">Featured on</p>
                                        <div className="inline-grid grid-cols-2 gap-8 mt-8 lg:gap-x-12">
                                            <Image
                                                className="object-contain w-auto"
                                                src="/images/bali-startup-camp.png"
                                                alt="Bali Startup Camp"
                                                width={600}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default FreelanceSection;

