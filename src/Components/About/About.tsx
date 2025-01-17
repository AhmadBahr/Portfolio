export const About = () => {
  return (
    <div id="about" className="border-2 border-gray-800 rounded-md bg-gray-800 p-6">
      <h2
        className="text-3xl font-bold text-white text-center relative w-11/12 mx-auto"
        data-aos="fade-up"
      >
        About Me
        <span
          className="block w-3 h-[2px] bg-pink-500 absolute bottom-[-8px] left-1/2 transform -translate-x-1/2"
        ></span>
      </h2>

      <div
        className="flex text-lg leading-relaxed text-white mt-4 justify-center text-justify"
        data-aos="fade-up"
      >
        <p className="w-1/3">
          I am Ahmad Bahr, a Frontend Web Developer with experience delivering impactful solutions
          across diverse projects. I excel at transforming ideas into functional systems,
          prioritizing user experience and performance optimization. Driven by a passion for
          problem-solving and continuous learning, I adapt to evolving technologies and thrive in
          collaborative environments. I look forward to contributing to innovative projects and
          growing alongside dynamic teams.
        </p>
      </div>

      <div className="flex justify-center mt-6" data-aos="fade-up">
        <div className="flex justify-between w-4/5">
          <div className="flex flex-col gap-4">
            <p>
              <strong className="text-pink-500">Email:</strong>{" "}
              <span className="text-white">ahmadbah.r@outlook.com</span>
            </p>
            <p>
              <strong className="text-pink-500">Education:</strong>{" "}
              <span className="text-white">Computer & Applied Sciences</span>
            </p>
            <p>
              <strong className="text-pink-500">Degree:</strong>{" "}
              <span className="text-white">BSc. Level 6 Extended Diploma</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-28" data-aos="fade-up">
        <hr className="w-1/3 border-t-4 border-gray-900" />
        <div className="flex bg-gray-900 border-2 border-gray-800 rounded-md w-11/12 p-8 justify-around">
          <div className="text-center">
            <p className="text-6xl font-extrabold text-pink-500">2</p>
            <div className="text-lg font-medium text-white">Year of Experience</div>
          </div>
          <div className="text-center">
            <p className="text-6xl font-extrabold text-pink-500">20</p>
            <div className="text-lg font-medium text-white">Completed Projects</div>
          </div>
        </div>
        <hr className="w-1/3 border-t-4 border-gray-900 mt-6" />
      </div>
    </div>
  );
};
