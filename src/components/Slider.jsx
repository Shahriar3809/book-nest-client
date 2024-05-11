import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  
  return (
    <div className="z-10">
      <div></div>

      <Swiper
        navigation={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
        }}
      >
        <SwiperSlide>
          <div className="bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/d6MNQKM/pexels-suzyhazelwood-1098601.jpg')] text-white flex justify-center h-[500px] md:h-[700px] w-full lg:h-[700px] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-2 md:space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className=" ">
                <p
                  className="text-5xl md:text-7xl text-center font-bold"
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  Multimedia{" "}
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Resources",
                        "Resources",
                        "Resources",
                        "Resources!",
                      ]}
                      loop={50}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </span>
                </p>
              </h1>
              <p className=" md:text-2xl text-center">
                Explore beyond the written word with our multimedia resources,
                including DVDs, CDs, and digital subscriptions to magazines and
                newspapers.
              </p>
              <button className="text-base md:text-xl font-bold bg-violet-700 py-2 md:py-4 px-3 md:px-6 text-white rounded-lg">
                <Link to="/all-books">View All Books</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/fF6dCZM/pexels-maltelu-1848924.jpg')]  text-white flex justify-center h-[500px] md:h-[700px] w-full lg:h-[700px] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-2 md:space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">
                <p
                  className="text-5xl md:text-7xl text-center font-bold"
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  Quiet{" "}
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Retreat", "Retreat", "Retreat", "Retreat!"]}
                      loop={50}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </span>
                </p>
              </h1>
              <p className=" md:text-2xl text-center">
                Escape the hustle and bustle of daily life and find solace in
                the serene atmosphere of our library, perfect for quiet study or
                contemplation.
              </p>
              <button className="text-base md:text-xl font-bold bg-violet-700 py-2 md:py-4 px-3 md:px-6 text-white">
                <Link to="/all-books">View All Books</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/z4MVcL0/pexels-atomlaborblog-1090941.jpg')]   text-white flex justify-center h-[500px] md:h-[700px] w-full lg:h-[700px] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-2 md:space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">
                <p
                  className="text-5xl md:text-7xl text-center font-bold"
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  Curated{" "}
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Collections",
                        "Collections",
                        "Collections",
                        "Collections!",
                      ]}
                      loop={50}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </span>
                </p>
              </h1>
              <p className=" md:text-2xl text-center">
                Journey through curated collections tailored to your interests,
                including fiction, non-fiction, history, science, and more.
              </p>
              <button className="text-base md:text-xl font-bold bg-violet-700 py-2 md:py-4 px-3 md:px-6 text-white rounded-lg">
                <Link to="/all-books">View All Books</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/tPffyvW/pexels-pixabay-256541.jpg')]  text-white flex justify-center h-[500px] md:h-[700px] w-full lg:h-[700px] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-2 md:space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">
                <p
                  className="text-5xl md:text-7xl text-center font-bold"
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  Vast{" "}
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Collection",
                        "Collection",
                        "Collection",
                        "Collection!",
                      ]}
                      loop={50}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </span>
                </p>
              </h1>
              <p className=" md:text-2xl text-center">
                Dive into a diverse array of books covering every genre
                imaginable, from classic literature to contemporary bestsellers.
              </p>
              <button className="text-base md:text-xl font-bold bg-violet-700 py-2 md:py-4 px-3 md:px-6 text-white rounded-lg">
                <Link to="/all-books">View All Books</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/nMpMNKS/pexels-tania-3490856.jpg')]  text-white flex justify-center h-[500px] md:h-[700px] w-full lg:h-[700px] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-2 md:space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">
                <p
                  className="text-5xl md:text-7xl text-center font-bold"
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  Digital{" "}
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Resources",
                        "Resources",
                        "Resources",
                        "Resources!",
                      ]}
                      loop={50}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </span>
                </p>
              </h1>
              <p className=" md:text-2xl text-center">
                Access a wealth of online databases, e-books, and audiobooks
                from anywhere, anytime with our digital library services.
              </p>
              <button className="text-base md:text-xl font-bold bg-violet-700 py-2 md:py-4 px-3 md:px-6 text-white rounded-lg">
                <Link to="/all-books">View All Books</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
