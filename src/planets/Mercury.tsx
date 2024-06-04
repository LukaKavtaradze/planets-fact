import { useState } from "react";

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setPlanetsData(Data.users);
  //     } catch (e: any) {
  //       console.log(e.message);
  //     }
  //   };

  //   fetchData();
  // });

  console.log(params);

  const [name, SetName] = useState<string>("mercury");
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [planetsData] = useState<Post[]>([{
    "detailColor": "#419ebb",
    "name": "mercury",
    "overview": {
      "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
    },
    "structure": {
      "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
    },
    "geology": {
      "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
    },
    "rotation": "58.6 Days",
    "revolution": "87.97 Days",
    "radius": "2,439.7 KM",
    "temperature": "430°c",
    "images": {
      "planet": "./assets/planet-mercury.svg",
      "internal": "./assets/planet-mercury-internal.svg",
      "geology": "./assets/geology-mercury.png"
    }
  },
  {
    "detailColor": "#f7cc7f",
    "name": "venus",
    "overview": {
      "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      "source": "https://en.wikipedia.org/wiki/Venus"
    },
    "structure": {
      "content": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
    },
    "geology": {
      "content": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
    },
    "rotation": "243 Days",
    "revolution": "224.7 Days",
    "radius": "6,051.8 KM",
    "temperature": "471°c",
    "images": {
      "planet": "./assets/planet-venus.svg",
      "internal": "./assets/planet-venus-internal.svg",
      "geology": "./assets/geology-venus.png"
    }
  },
  {
    "detailColor": "#545bfe",
    "name": "earth",
    "overview": {
      "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      "source": "https://en.wikipedia.org/wiki/Earth"
    },
    "structure": {
      "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
    },
    "geology": {
      "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
      "source": "https://en.wikipedia.org/wiki/Earth#Surface"
    },
    "rotation": "0.99 Days",
    "revolution": "365.26 Days",
    "radius": "6,371 KM",
    "temperature": "16°c",
    "images": {
      "planet": "./assets/planet-earth.svg",
      "internal": "./assets/planet-earth-internal.svg",
      "geology": "./assets/geology-earth.png"
    }
  },
  {"detailColor": "#ff6a45",
    "name": "mars",
    "overview": {
      "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
      "source": "https://en.wikipedia.org/wiki/Mars"
    },
    "structure": {
      "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
    },
    "geology": {
      "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
    },
    "rotation": "1.03 Days",
    "revolution": "1.88 Years",
    "radius": "3,389.5 KM",
    "temperature": "-28°c",
    "images": {
      "planet": "./assets/planet-mars.svg",
      "internal": "./assets/planet-mars-internal.svg",
      "geology": "./assets/geology-mars.png"
    }
  },
  {"detailColor": "#ecad7a",
    "name": "jupiter",
    "overview": {
      "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      "source": "https://en.wikipedia.org/wiki/Jupiter"
    },
    "structure": {
      "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
    },
    "geology": {
      "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
    },
    "rotation": "9.93 Hours",
    "revolution": "11.86 Years",
    "radius": "69,911 KM",
    "temperature": "-108°c",
    "images": {
      "planet": "./assets/planet-jupiter.svg",
      "internal": "./assets/planet-jupiter-internal.svg",
      "geology": "./assets/geology-jupiter.png"
    }
  },
  {
    "detailColor": "#fccb6b",
    "name": "saturn",
    "overview": {
      "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
      "source": "https://en.wikipedia.org/wiki/Saturn"
    },
    "structure": {
      "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
      "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
    },
    "geology": {
      "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
    },
    "rotation": "10.8 Hours",
    "revolution": "29.46 Years",
    "radius": "58,232 KM",
    "temperature": "-138°c",
    "images": {
      "planet": "./assets/planet-saturn.svg",
      "internal": "./assets/planet-saturn-internal.svg",
      "geology": "./assets/geology-saturn.png"
    }
  },
  {
    "detailColor": "#65f0d5",
    "name": "uranus",
    "overview": {
      "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      "source": "https://en.wikipedia.org/wiki/Uranus"
    },
    "structure": {
      "content": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
    },
    "geology": {
      "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
    },
    "rotation": "17.2 Hours",
    "revolution": "84 Years",
    "radius": "25,362 KM",
    "temperature": "-195°c",
    "images": {
      "planet": "./assets/planet-uranus.svg",
      "internal": "./assets/planet-uranus-internal.svg",
      "geology": "./assets/geology-uranus.png"
    }
  },
  {
    "detailColor": "#497efa",
    "name": "neptune",
    "overview": {
      "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
      "source": "https://en.wikipedia.org/wiki/Neptune"
    },
    "structure": {
      "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
    },
    "geology": {
      "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
    },
    "rotation": "16.08 Hours",
    "revolution": "164.79 Years",
    "radius": "24,622 KM",
    "temperature": "-201°c",
    "images": {
      "planet": "./assets/planet-neptune.svg",
      "internal": "./assets/planet-neptune-internal.svg",
      "geology": "./assets/geology-neptune.png"
    }
  }]);

  const filteredPlanets = planetsData.filter(
    (planet) => planet.name === name
  );

  // console.log(filteredPlanets);

  const color = filteredPlanets.map((planet) => planet.detailColor);



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
                className={`w-[64px] hidden xl:flex bottom-[40px] left-[-7px] absolute h-[4px]
                ${
                  name === "mercury" ? "left-[-7px]" : ""
                }
                ${
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
