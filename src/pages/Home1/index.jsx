import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-jost items-end justify-end mx-auto sm:pl-5 pl-[35px] pt-[35px] w-full">
        <div className="flex flex-col md:gap-10 gap-[77px] justify-end md:px-5 w-[97%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[697px] w-[58%] md:w-full">
            <div className="h-[85px] relative w-[12%] md:w-full">
              <div className="bg-gradient  h-[57px] my-auto rounded-[28px] w-[57px]"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto sm:text-[44.24px] md:text-[50.24px] text-[58.24px] text-center text-white-A700 tracking-[-1.75px] uppercase w-max"
                size="txtJostRomanMedium5824"
              >
                ASA
              </Text>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[119px] md:ml-[0] ml-[585px] md:mt-0 mt-[37px] text-base text-center tracking-[-0.48px] uppercase"
              shape="round"
              color="white_A700"
            >
              home
            </Button>
            <Text
              className="md:ml-[0] ml-[31px] md:mt-0 mt-[42px] text-base text-center text-white-A700 tracking-[-0.48px] uppercase whitespace-nowrap"
              size="txtJostRomanMedium16"
            >
              more DETAIL
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[51px] w-[97%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[190px] items-start justify-start md:mt-0 mt-[104px] w-[32%] md:w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                <div className="md:h-[139px] h-[169px] relative w-[66%]">
                  <Text
                    className="absolute capitalize inset-x-[0] mx-auto text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl top-[0] tracking-[1.44px] w-max"
                    size="txtJostRomanRegular24"
                  >
                    artificial sensory assistance
                  </Text>
                  <Text
                    className="absolute bottom-[0] left-[0] md:text-5xl text-8xl text-center text-white-A700 tracking-[-4.32px] uppercase"
                    size="txtJostRomanBold96"
                  >
                    asa
                  </Text>
                </div>
                <Text
                  className="capitalize leading-[151.50%] md:ml-[0] ml-[3px] sm:text-[19px] md:text-[21px] text-[23px] text-justify text-white-A700 tracking-[0.23px] w-full"
                  size="txtJostRomanRegular23"
                >
                  Utilizing the cutting-edge YOLOv8 technology combined with the
                  powerful pyttsx3 library, our product detects objects and
                  safeguards blind people about potential obstacles in their
                  daily lives.{" "}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] w-[58%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-medium h-[61px] leading-[normal] rounded-[9px] text-center text-lg tracking-[0.36px] w-[287px]"
                  onClick={() => navigate("/detail")}
                  size="sm"
                  variant="gradient"
                  color="red_900_red_A700_00"
                >
                  Access our model
                </Button>
              </div>
            </div>
            <div className="h-[1032px] relative w-[64%] md:w-full">
              <div className="h-[1032px] m-auto w-full">
                <Img
                  className="h-[1032px] m-auto object-cover w-full"
                  src="images/img_ellipse21.png"
                  alt="ellipseTwentyOne"
                />
                <Img
                  className="absolute h-[516px] inset-y-[0] my-auto object-cover right-[16%] rounded-[30px] w-[63%]"
                  src="images/img_screenshot20240112.png"
                  alt="screenshot20240"
                />
              </div>
              <Img
                className="absolute bottom-[21%] h-[295px] object-cover right-[12%] rounded-[30px] w-[295px]"
                src="images/img_image1.png"
                alt="imageOne"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
