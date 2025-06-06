import logo from '../assets/logo.png'

export default function HeroSection() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Hi there!, I'm Bouzagui
                            <br className="hidden lg:inline-block" />I love building amazing
                            apps.
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            I'm a software developer with a passion for creating innovative
                            solutions that make a difference. With expertise in various
                            technologies, I bring a unique perspective to every project.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Contact Me
                            </a>
                            <a
                                href='/assets/Resume.pdf'
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Resume
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded-full"
                            alt="hero"
                            src={logo}                        />
                    </div>
                </div>
            </section>
        </div>
    );
}