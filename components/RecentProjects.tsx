import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useState } from "react";
import VideoModal from "./ui/VideoModal";

const RecentProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenModal = (url: string) => {
    console.log("Opening modal with video URL:", url); 
    if (url) {
      setVideoUrl(url);
      setModalOpen(true); // Open the modal
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setVideoUrl(""); 
  };

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex flex-col justify-between mt-7 mb-3">
                <div
                  className="flex flex-wrap justify-start gap-2"
                  style={{
                    maxWidth: item.iconLinks.length > 20 ? "270px" : "100%",
                  }}
                >
                  {item.iconLinks.map((link, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={link} alt="icon" className="p-2" />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center mt-4">
                  <a
                    href={item.githubLink} 
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Repo
                  </a>
                </div>

                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={() => handleOpenModal(item.videoUrl || "")} 
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    Watch Demo Video
                  </button>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        videoUrl={videoUrl} 
      />
    </div>
  );
};

export default RecentProjects;
