import React from "react";

const MainContents = () => {
  return (
    <main>
      <section id="about" className="py-12 md:py-24 bg-[#071B3D] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/placeholder.svg"
                alt="John Doe"
                width="400"
                height="400"
                className="rounded-full mx-auto"
                // style="aspect-ratio: 400 / 400; object-fit: cover;"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-[#94A3B8]">
                Hi, I'm John Doe, a passionate web developer with a keen eye for
                design. I have been creating beautiful and functional websites
                for over 5 years, and I'm always eager to take on new
                challenges.
              </p>
              <p className="text-[#94A3B8]">
                In my free time, I enjoy exploring new technologies, reading
                books, and hiking in the great outdoors. I'm a strong believer
                in continuous learning and I'm always striving to improve my
                skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-12 md:py-24 bg-[#071B3D] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">My Skills</h2>
            <p className="text-[#94A3B8]">
              Here are some of the technologies I'm proficient in:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-[#071B3D] p-4 rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-8 w-8 mx-auto"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <h3 className="text-lg font-bold mt-2">HTML</h3>
            </div>
            <div className="bg-[#071B3D] p-4 rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-8 w-8 mx-auto"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" x2="12" y1="8" y2="8"></line>
                <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
              </svg>
              <h3 className="text-lg font-bold mt-2">CSS</h3>
            </div>
            <div className="bg-[#071B3D] p-4 rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-8 w-8 mx-auto"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" x2="12" y1="22" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" x2="12" y1="2" y2="8.5"></line>
              </svg>
              <h3 className="text-lg font-bold mt-2">JavaScript</h3>
            </div>
            <div className="bg-[#071B3D] p-4 rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-8 w-8 mx-auto"
              >
                <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
              </svg>
              <h3 className="text-lg font-bold mt-2">React</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="py-12 md:py-24 bg-[#071B3D] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">My Work</h2>
            <p className="text-[#94A3B8]">
              Check out some of my recent projects:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Project 1
                </h3>
                <p className="text-sm text-muted-foreground">
                  A modern e-commerce website
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg"
                  alt="Project 1"
                  width="400"
                  height="225"
                  className="rounded-lg"
                  // style="aspect-ratio: 400 / 225; object-fit: cover;"
                />
              </div>
              <div className="flex items-center p-6">
                <a className="text-[#2563EB] hover:underline" href="#">
                  View Project
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Project 2
                </h3>
                <p className="text-sm text-muted-foreground">
                  A responsive blog template
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg"
                  alt="Project 2"
                  width="400"
                  height="225"
                  className="rounded-lg"
                  // style="aspect-ratio: 400 / 225; object-fit: cover;"
                />
              </div>
              <div className="flex items-center p-6">
                <a className="text-[#2563EB] hover:underline" href="#">
                  View Project
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Project 3
                </h3>
                <p className="text-sm text-muted-foreground">
                  A SaaS landing page
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg"
                  alt="Project 3"
                  width="400"
                  height="225"
                  className="rounded-lg"
                  // style="aspect-ratio: 400 / 225; object-fit: cover;"
                />
              </div>
              <div className="flex items-center p-6">
                <a className="text-[#2563EB] hover:underline" href="#">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-12 md:py-24 bg-[#071B3D] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-[#94A3B8]">
              Feel free to reach out to me for any inquiries or opportunities.
            </p>
          </div>
          <div className="max-w-md mx-auto mt-8">
            <form className="space-y-4">
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                  // for="name"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="John Doe"
                  // required=""
                  type="text"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                  // for="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="john@example.com"
                  // required=""
                  type="email"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                  // for="message"
                >
                  Message
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  // rows="5"
                  placeholder="Your message"
                  // required=""
                ></textarea>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContents;
