import { useState } from "react";
import { useEffect } from "react";
import Data from "../../data.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../src/App.css";

interface Post {
  detailColor: string;
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

interface Orbits {
  name: string;
  color: string;
}

const orbits: Orbits[] = [
  {
    name: "mercury",
    color: "#def4fc",
  },
  {
    name: "venus",
    color: "#f7cc7f",
  },
  {
    name: "earth",
    color: "#545bfe",
  },
  {
    name: "mars",
    color: "#ff6a45",
  },
  {
    name: "jupiter",
    color: "#ecad7a",
  },
  {
    name: "saturn",
    color: "#fccb6b",
  },
  {
    name: "uranus",
    color: "#65f0d5",
  },
  {
    name: "neptune",
    color: "#497efa",
  },
];

function Mercury() {
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPlanetsData(Data.users);
      } catch (e: any) {
        console.log(e.message);
      }
    };

    fetchData();
  });

  // console.log(params);
  const [name, SetName] = useState<string>("Mercury");
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [planetsData, setPlanetsData] = useState<Post[]>([]);

  const filteredPlanets = planetsData.filter(
    (planet) => planet.name.toLowerCase() === params.planet?.toLowerCase()
  );

  // console.log(filteredPlanets);

  const color = filteredPlanets.map((planet) => planet.detailColor);

  console.log(name);

  const [number, SetNumber] = useState<Number>(1);

  return (
    <div className="w-full min-h-screen box-border bg-cover pb-[30px] flex flex-col bg-[#070724] bg-[url(/public/assets/background-stars.svg)]">
      <div id="container" className="flex flex-col items-center relative">
        <header className="relative w-full h-[80px] bg-[#070724] z-50">
          <div className="flex flex-row p-[16px] justify-between items-center w-full md:flex-col md:gap-[20px] xl:flex-row xl:justify-between">
            <h1 className="w-[109px] h-[36px] text-[28px] text-[white] font-medium  opacity-100 font-[Antonio]  text-nowrap">
              THE PLANETS
            </h1>

            <img
              onClick={() => setIsOpened(!isOpened)}
              src="/assets/icon-hamburger.svg"
              className=" flex md:opacity-0"
              alt=""
            />

            <ul className="md:flex md:flex-row hidden md:justify-between relative  md:w-full md:items-center md:gap-[20px] xl:gap-[33px]  xl:justify-center xl:w-auto text-[#fff]  font-bold mr-[40px] ml-[40px]">
              <div
                style={{ background: color[0] }}
                className={`w-[64px] hidden xl:flex bottom-[40px] left-[-7px] absolute h-[4px] ${
                  name === "venus" ? "left-[70px]" : ""
                } ${name === "earth" ? "left-[140px]" : ""} ${
                  name === "mars" ? "left-[205px]" : ""
                } ${name === "jupiter" ? "left-[275px]" : ""} ${
                  name === "saturn" ? "left-[355px]" : ""
                }
               ${name === "uranus" ? "left-[430px]" : ""} ${
                  name === "neptune" ? "left-[510px]" : ""
                }

                `}
              ></div>
              {orbits.map((orbit, index) => {
                return (
                  <li
                    onClick={() => SetName(orbit.name)}
                    key={index}
                    className={`uppercase text-[11px] opacity-75 h-6 hidden md:flex font-[Spartan League] tracing-[1px]`}
                  >
                    <Link to={`/${orbit.name}`}>{orbit.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full border-b opacity-25"></div>
        </header>

        <section
          id="planets"
          style={{ top: isOpened ? "80px" : "-600px" }}
          className=" w-full px-6 pt-6 pb-12  top-[80px] absolute flex flex-col justify-start items-center gap-[20px] z-[2] ease-in duration-700  bg-[#070724] "
        >
          {orbits.map((planet) => {
            return (
              <div className="">
                <div className="flex flex-row  justify-between items-center  w-full ">
                  <div className="flex gap-6 ">
                    <div
                      style={{ background: planet.color }}
                      id="circle"
                      className={`w-5 h-5 rounded-[50%]`}
                    ></div>
                    <h3
                      onClick={() => setIsOpened(!isOpened)}
                      className="w-[91px] h-6 text-[15px] text-white font-[ League Spartan] font-bold tracking-[1.36px] uppercase"
                    >
                      <Link to={`/${planet.name}`}>{planet.name}</Link>
                    </h3>
                  </div>
                  <img src="/assets/icon-chevron.svg" alt="" />
                </div>
                <div className=" w-[327px] border-b opacity-25 mt-[15px]"></div>
              </div>
            );
          })}
        </section>
      </div>

      <div>
        <div
          id="highlight-mobile"
          className="flex flex-col w-full md:hidden relative"
        >
          <div className="uppercase font-[League Spartan] w-full   pl-6 flex justify-between tracking-[1.36px] font-bold  items-center  flex-row">
            <div
              onClick={() => SetNumber(1)}
              className="w-[80px] h-[10px] text-white opacity-50 text-[9px]"
            >
              overview
            </div>
            <div
              onClick={() => SetNumber(2)}
              className="w-[80px] h-[10px] text-white opacity-50 text-[9px]"
            >
              structure
            </div>
            <div
              onClick={() => SetNumber(3)}
              className="w-[80px] h-[10px] text-white opacity-50 text-[9px]"
            >
              surface
            </div>
          </div>
          <div
            style={{ background: color[0] }}
            className={` w-[80px] h-[4px] absolute top-[18px] left-[11px] ${
              number === 2 ? "left-[150px]" : ""
            } ${number === 3 ? "left-[280px]" : ""} `}
          ></div>
          <div className="w-full border-b opacity-25 pt-[10px]"></div>
        </div>

        <section className="About-planet">
          {filteredPlanets.map((planet, index) => (
            <div
              className="flex flex-col items-center gap-[20px] w-full mt-[35px] md:mt-[120px] xl:mt-[35px]"
              key={index}
            >
              <div className="flex flex-col items-center gap-[50px] xl:flex-row xl:justify-between relative">
                <img
                  id="geology"
                  className={`${
                    number === 3 ? "flex" : "hidden"
                  }   w-[224px] md:w-[369px] xl:w-[500px]`}
                  src={planet.images.geology}
                  // src="https://planets-fact-site-seven-indol.vercel.app/assets/geology-mercury.png"
                  alt=""
                />
                <div className="">
                  <img
                    className={` ${
                      number === 2 ? "hidden" : "flex"
                    } w-[224px] md:w-[369px] xl:w-[500px] `}
                    src={planet.images.planet}
                    alt=""
                  />
                  <img
                    className={` ${
                      number === 2 ? "flex" : "hidden "
                    } w-[224px] md:w-[369px] xl:w-[500px]`}
                    src={planet.images.internal}
                    alt=""
                  />
                </div>

                <div className="md:flex-row md:justify-between md:items-center">
                  <section
                    id="title"
                    className="flex flex-col gap-[16px] items-center text-center xl:ml-[150px]"
                  >
                    <div className="flex flex-col md:flex-row items-center xl:flex-col gap-4 xl:items-start md:mt-[20px]">
                      <div className="flex flex-col items-center gap-4 md:items-start md:text-left  xl:pt-[50px]">
                        <h1 className="w-[132px] h-[52px] text-[40px] text-white font-medium uppercase font-[Antonio] tracking-[1px] xl:w-[209px] xl:text-[80px] xl:h-[104px]">
                          {planet.name}
                        </h1>
                        {number === 1 && (
                          <p className="text-[11px] font-[League Spartan] text-white leading-loose pl-6 pr-6 md:text-left md:w-[339px] md:pl-0 xl:w-[350px] xl:text-[14px]">
                            {planet.overview.content}
                          </p>
                        )}
                        {number === 2 && (
                          <p className="text-[11px] font-[League Spartan] text-white leading-loose pl-6 pr-6 md:text-left md:w-[339px] md:pl-0 xl:w-[350px] xl:text-[14px]">
                            {planet.structure.content}
                          </p>
                        )}
                        {number === 3 && (
                          <p className="text-[11px] font-[League Spartan] text-white leading-loose pl-6 pr-6 md:text-left md:w-[339px] md:pl-0 xl:w-[350px] xl:text-[14px]">
                            {planet.geology.content}
                          </p>
                        )}

                        <div
                          id="source"
                          className="text-white flex items-center justify-center gap-1"
                        >
                          <span className="opacity-50 text-white">Source:</span>

                          {number === 1 && (
                            <a
                              className="text-white opacity-75 underline text-bold"
                              href={`${planet.overview.source}`}
                            >
                              Wikipedia
                            </a>
                          )}
                          {number === 2 && (
                            <a
                              className="text-white opacity-75 underline text-bold"
                              href={`${planet.structure.source}`}
                            >
                              Wikipedia
                            </a>
                          )}
                          {number === 3 && (
                            <a
                              className="text-white opacity-75 underline text-bold"
                              href={`${planet.geology.source}`}
                            >
                              Wikipedia
                            </a>
                          )}
                          <img src="./assets/icon-source.svg" alt="" />
                        </div>
                      </div>

                      <div
                        id="overviews"
                        className="md:flex hidden flex-col gap-4 text-nowrap "
                      >
                        <div
                          onClick={() => SetNumber(1)}
                          className="w-[281px] h-[40px] xl:gap-3 border border-[#FFF] border-solid border-opacity-20 flex flex-row pl-[20px] pt-[10px] cursor-pointer hover:bg-[#d8d8d847] "
                          style={{
                            background: `${
                              number === 1 ? `${planet.detailColor}` : ""
                            }`,
                          }}
                        >
                          <span className="w-[13px] h-[25px] font-[League Spartan] text-[9px] font-bold text-white opacity-50 xl:text-[12px]">
                            01
                          </span>
                          <h3 className="text-white xl:text-[12px]  w-[70px] h-[25px] text-[9px] font-bold tracking-[2px] font-[League Spartan] uppercase">
                            overview
                          </h3>
                        </div>

                        <div
                          className="w-[281px] h-[40px] xl:gap-3 border border-[#FFF] border-solid border-opacity-20 flex flex-row pl-[20px] pt-[10px] cursor-pointer hover:bg-[#d8d8d847] "
                          style={{
                            background: `${
                              number === 2 ? `${planet.detailColor}` : ""
                            }`,
                          }}
                          onClick={() => SetNumber(2)}
                        >
                          <span className="w-[13px] h-[25px] font-[League Spartan] text-[9px] font-bold text-white opacity-50  xl:text-[12px]">
                            02
                          </span>
                          <h3 className="text-white xl:text-[12px]  w-[144px] h-[25px] text-[9px] font-bold tracking-[2px] font-[League Spartan] uppercase">
                            internal structure
                          </h3>
                        </div>
                        <div
                          className="w-[281px] h-[40px] xl:gap-3 border border-[#FFF] border-solid border-opacity-20 flex flex-row pl-[20px] pt-[10px] cursor-pointer hover:bg-[#d8d8d847] "
                          style={{
                            background: `${
                              number === 3 ? `${planet.detailColor}` : ""
                            }`,
                          }}
                          onClick={() => SetNumber(3)}
                        >
                          <span className="w-[13px] h-[25px] font-[League Spartan] text-[9px] font-bold text-white opacity-50 xl:text-[12px]">
                            03
                          </span>
                          <h3 className="text-white  w-[144px] h-[25px] text-[9px] font-bold tracking-[2px] font-[League Spartan] uppercase xl:text-[12px]">
                            surface geology
                          </h3>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div
                id="avg-infos"
                className="flex flex-col gap-[10px] mt-[10px] tracking-[2px] md:flex-row items-center md:mt-[30px]"
              >
                <div className="w-[327px] h-[48px] border border-[#FFF] border-solid border-opacity-20 md:w-[164px] md:h-[88px] xl:w-[255px] xl:h-[128px]">
                  <div className="flex flex-row justify-between items-center pr-[24px] pl-[24px] md:flex-col md:items-start ">
                    <span className="w-[80px] xl:h-[25px] xl:text-[11px] tracking-[2px] md:mt-[10px]  text-nowrap h-[16px] text-[9px] font-bold font-[League Spartan] pt-[5px] text-white opacity-50 uppercase">
                      Rotation Time
                    </span>
                    <h3 className="text-[20px] xl:h-[52px] xl:text-[40px] font-medium md:mt-[10px] md:text-[24px]  text-nowrap text-white font-[Antonio] uppercase pt-[5px]">
                      {planet.rotation}
                    </h3>
                  </div>
                </div>
                <div className="w-[327px] h-[48px] border border-[#FFF] border-solid border-opacity-20 md:w-[164px] md:h-[88px] xl:w-[255px] xl:h-[128px]">
                  <div className="flex flex-row justify-between items-center pr-[24px] pl-[24px] md:flex-col md:items-start">
                    <span className="w-[80px] md:mt-[10px] xl:h-[25px] xl:text-[11px]  text-nowrap h-[16px] text-[9px] font-bold font-[League Spartan] pt-[5px] text-white opacity-50 uppercase">
                      REVOLUTION TIME
                    </span>
                    <h3 className="text-[20px] xl:h-[52px] xl:text-[40px] md:text-[24px]  md:mt-[10px]   text-nowrap text-white font-[Antonio] uppercase pt-[5px]">
                      {planet.revolution}
                    </h3>
                  </div>
                </div>
                <div className="w-[327px] h-[48px] border border-[#FFF] border-solid border-opacity-20 md:w-[164px] md:h-[88px] xl:w-[255px] xl:h-[128px]">
                  <div className="flex flex-row justify-between items-center pr-[24px] pl-[24px] md:flex-col md:items-start">
                    <span className="w-[80px] md:mt-[10px] xl:h-[25px] xl:text-[11px]  text-nowrap h-[16px] text-[9px] font-bold font-[League Spartan] pt-[5px] text-white opacity-50 uppercase">
                      radius
                    </span>
                    <h3 className="text-[20px] xl:h-[52px] xl:text-[40px] md:text-[24px]  md:mt-[10px]   text-nowrap text-white font-[Antonio] uppercase pt-[5px]">
                      {planet.radius}
                    </h3>
                  </div>
                </div>
                <div className="w-[327px] h-[48px] border border-[#FFF] border-solid border-opacity-20 md:w-[164px] md:h-[88px] xl:w-[255px] xl:h-[128px]">
                  <div className="flex flex-row justify-between items-center pr-[24px] pl-[24px] md:flex-col md:items-start">
                    <span className=" md:mt-[10px] xl:h-[25px] xl:text-[11px] text-nowrap h-[16px] text-[9px] font-bold font-[League Spartan] pt-[5px] text-white opacity-50 uppercase">
                      AVERAGE TEMP.
                    </span>
                    <h3 className="text-[20px] xl:h-[52px] xl:text-[40px] md:text-[24px] md:mt-[10px]    text-nowrap text-white font-[Antonio] uppercase pt-[5px]">
                      {planet.temperature}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Mercury;
