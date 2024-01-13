import React from "react";

import { Button, Img, Text } from "components";

const DetailPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-jost items-start justify-end mx-auto p-[25px] sm:px-5 w-full">
        <div className="flex flex-col justify-start md:ml-[0] ml-[59px] mt-[21px] md:px-5 w-[85%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[65%] md:w-full">
            <div className="h-[85px] relative w-[13%] md:w-full">
              <div className="bg-gradient  h-[57px] ml-0.5 my-auto rounded-[28px] w-[57px]"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto sm:text-[44.24px] md:text-[50.24px] text-[58.24px] text-center text-white-A700 tracking-[-1.75px] uppercase w-max"
                size="txtJostRomanMedium5824"
              >
                <a href="/">Asa</a>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[587px] text-base text-center text-white-A700 tracking-[-0.48px] uppercase"
              size="txtJostRomanMedium16"
            >
              home
            </Text>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[119px] ml-14 md:ml-[0] text-base text-center tracking-[-0.48px] uppercase whitespace-nowrap"
              shape="round"
              color="white_A700"
            >
              more detail
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[247px] items-start justify-end md:ml-[0] ml-[194px] mt-[97px] w-[87%] md:w-full">
            <Text
              className="capitalize text-center text-white-A700 text-xl"
              size="txtJostRomanMedium20"
            >
              the Model takes a video as input (can be real-time)
            </Text>
            <Text
              className="capitalize leading-[151.50%] text-center text-white-A700 text-xl w-[41%] sm:w-full"
              size="txtJostRomanMedium20"
            >
              Each frame is processed and eventually shows bounding boxes around
              detected objects/obstacles using yolov8n model
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[214px] mt-[34px] w-[83%] md:w-full">
            <Img
              className="h-[260px] md:h-auto object-cover"
              src="images/img_screenshot20240112_260x439.png"
              alt="screenshot20240"
            />
            <Img
              className="h-[260px] md:h-auto object-cover"
              src="images/img_screenshot20240112_1.png"
              alt="screenshot20240_One"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[182px] mt-[77px] w-[88%] md:w-full">
            <Text
              className="capitalize leading-[151.50%] text-center text-white-A700 text-xl"
              size="txtJostRomanMedium20"
            >
              If the obstacles enter the “protected area”, an instruction is
              shown in text as well as sound (pyttsx3)
            </Text>
            <Text
              className="capitalize leading-[151.50%] text-center text-white-A700 text-xl"
              size="txtJostRomanMedium20"
            >
              Utilizing this model helps safeguard blind people about potential
              obstacles in their daily lives
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[214px] mt-8 w-[83%] md:w-full">
            <Img
              className="h-[260px] md:h-auto object-cover"
              src="images/img_screenshot20240111.png"
              alt="screenshot20240_Two"
            />
            <div className="bg-blue_gray-100 h-[260px] w-[38%]"></div>
          </div>
          <Text
            className="capitalize md:ml-[0] ml-[1104px] mt-[17px] text-center text-white-A700 text-xl"
            size="txtJostRomanMedium20"
          >
            Original video
          </Text>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
