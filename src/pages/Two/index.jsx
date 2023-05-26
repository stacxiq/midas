import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const TwoPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-tajawal items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[1976px] justify-end w-full">
          <div className="flex flex-col items-center justify-start pb-[1088px] w-full">
            <div className="flex flex-col gap-[34px] items-center justify-start w-full">
              <div className="h-[111px] md:px-5 relative w-full">
                <Header className="absolute flex flex-col inset-[0] items-center justify-center m-auto w-full" />
                <Line className="absolute bg-black_900_21 bottom-[10%] h-px inset-x-[0] mx-auto w-full" />
              </div>
              <div className="flex md:flex-col flex-row font-poppins gap-[31px] items-start justify-between max-w-[1246px] mx-auto md:px-5 w-full">
                <div className="flex md:h-[610px] sm:h-[783px] h-[788px] justify-end relative w-[32%] md:w-full">
                  <div className="bg-blue_gray_100_01 h-px mb-[198px] ml-[68px] mt-auto w-px"></div>
                  <div className="absolute bg-gray_200_2d border border-amber_700 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-2 rounded-tr-[69px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[213px] justify-start mb-[19px] mt-20 w-[95%] md:w-full">
                      <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[90%] md:w-full">
                        <Img
                          src="images/img_asset1sh1.png"
                          className="h-[58px] md:h-auto object-cover w-1/5 sm:w-full"
                          alt="asset1shTwo"
                        />
                        <Text
                          className="mt-[55px] text-white_A700"
                          as="h6"
                          variant="h6"
                        >
                          Get in touch
                        </Text>
                        <Text
                          className="mt-[30px] text-white_A700"
                          variant="body10"
                        >
                          Your name
                        </Text>
                        <Line className="bg-white_A700 h-px mt-1.5 w-full" />
                        <Input
                          wrapClassName="mt-[33px] pr-[35px] w-full"
                          className="font-normal leading-[normal] p-0 placeholder:text-white_A700 sm:pr-5 text-left text-white_A700 text-xs w-full"
                          type="email"
                          name="groupSixtySix"
                          placeholder="Your email"
                          size="sm"
                          variant="UnderLineWhiteA700"
                        ></Input>
                        <Text
                          className="mt-[35px] text-white_A700"
                          variant="body10"
                        >
                          How can we help ?
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-[9px] w-4/5 md:w-full">
                          <div className="bg-white_A700 border border-blue_gray_100_02 border-solid h-[13px] rounded-[3px] w-[6%]"></div>
                          <Text
                            className="ml-[7px] text-white_A700"
                            as="h1"
                            variant="h1"
                          >
                            Programming services
                          </Text>
                          <div className="bg-white_A700 border border-blue_gray_100_02 border-solid h-[13px] ml-[34px] rounded-[3px] w-[6%]"></div>
                          <Text
                            className="ml-[11px] text-white_A700"
                            as="h1"
                            variant="h1"
                          >
                            Collaberation with us
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-4 w-[61%] md:w-full">
                          <div className="bg-white_A700 border border-blue_gray_100_02 border-solid h-[13px] mb-[3px] rounded-[3px] w-[8%]"></div>
                          <Text
                            className="ml-[7px] text-white_A700"
                            as="h1"
                            variant="h1"
                          >
                            Marketing services
                          </Text>
                          <div className="bg-white_A700 border border-blue_gray_100_02 border-solid h-[13px] mb-[3px] ml-[50px] rounded-[3px] w-[8%]"></div>
                          <Text
                            className="ml-[11px] mt-1 text-white_A700"
                            as="h1"
                            variant="h1"
                          >
                            Other
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-normal leading-[normal] min-w-[315px] mt-6 text-base text-center text-white_A700"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="OutlineGray7003f"
                        >
                          Send
                        </Button>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <div className="bg-white_A700 h-[7px] rounded-[3px] w-[49%]"></div>
                        <div className="bg-amber_700 h-[7px] rounded-[3px] w-[49%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1767px] md:h-[792px] relative w-[66%] md:w-full">
                  <Img
                    src="images/img_ellipse2_529x149.png"
                    className="absolute bottom-[29%] h-[529px] object-cover right-[0] w-[19%]"
                    alt="ellipseTwo"
                  />
                  <Img
                    src="images/img_ellipse73_529x113.png"
                    className="absolute bottom-[0] h-[529px] object-cover right-[0] w-[14%]"
                    alt="ellipseSeventyThree"
                  />
                  <div className="absolute h-[792px] left-[0] top-[0] w-[94%] md:w-full">
                    <Img
                      src="images/img_rectangle166.png"
                      className="h-[792px] m-auto object-cover w-full"
                      alt="rectangle166"
                    />
                    <div className="absolute bg-gradient7  bottom-[2%] mb-[15px] p-0.5 w-[97%] ">
                      <div className="absolute bg-gradient6  bg-gray_900 border-solid bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-center mx-auto p-[13px]">
                        <Text
                          className="font-normal md:ml-[0] ml-[31px] mt-2 text-gray_900 w-[96%] sm:w-full"
                          variant="body1"
                        >
                          We will be waiting for you happily to help you with
                          your bussiness
                        </Text>
                        <Text
                          className="font-normal mb-[18px] md:ml-[0] ml-[31px] text-gray_900"
                          variant="body5"
                        >
                          -Team company
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[1070px] mr-[89px] md:px-5 w-[10%] md:w-full">
            <div className="flex flex-row gap-3 items-end justify-start w-[93%] md:w-full">
              <Img
                src="images/img_iconsaxlinearinstagram_white_a700.svg"
                className="h-[25px] w-[25px]"
                alt="iconsaxlinearin"
              />
              <Img
                src="images/img_signal.svg"
                className="h-4 mt-[7px]"
                alt="signal"
              />
            </div>
            <div className="flex flex-row gap-3 items-end justify-between w-full">
              <Img
                src="images/img_iconsaxlinearfacebook_white_a700.svg"
                className="h-[25px] w-[25px]"
                alt="iconsaxlinearfa"
              />
              <Img
                src="images/img_signal_white_a700.svg"
                className="h-4 mt-[9px]"
                alt="signal_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoPage;
