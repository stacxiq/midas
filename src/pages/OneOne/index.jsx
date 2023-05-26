import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";

const OneOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-end justify-end w-full">
          <div className="h-[111px] md:h-[139px] sm:h-[91px] md:px-5 relative w-full">
            <Line className="absolute bg-black_900_21 bottom-[10%] h-px inset-x-[0] mx-auto w-full" />
            <div className="absolute h-[111px] md:h-[139px] sm:h-[91px] inset-[0] justify-center m-auto w-[97%] md:w-full">
              <Img
                src="images/img_asset1sh1.png"
                className="absolute h-[91px] left-[4%] object-cover top-[0] w-[9%]"
                alt="asset1shOne"
              />
              <div className="absolute bottom-[0] md:h-[139px] h-[71px] inset-x-[0] mx-auto w-full">
                <Line className="absolute bg-amber_700 bottom-[4%] h-[5px] left-[0] rounded-sm w-[48%]" />
                <div className="absolute flex md:flex-col flex-row gap-[34px] h-full inset-y-[0] items-start justify-between my-auto right-[0] w-[58%]">
                  <div className="flex flex-row items-center justify-between w-[82%] md:w-full">
                    <Text className="text-gray_50" variant="body6">
                      Home
                    </Text>
                    <Text className="text-gray_50" variant="body6">
                      About us{" "}
                    </Text>
                    <Text className="text-gray_50" variant="body6">
                      Service
                    </Text>
                    <Text className="text-gray_50" variant="body6">
                      Courses
                    </Text>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[121px] text-base text-center text-gray_50"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="OutlineBlack9003f"
                    >
                      Contact us{" "}
                    </Button>
                  </div>
                  <div className="flex flex-col font-tajawal items-center justify-start md:mt-0 mt-[5px] w-[14%] md:w-full">
                    <div className="flex flex-col gap-[18px] justify-start w-full">
                      <div className="flex flex-row items-start justify-end ml-3 md:ml-[0] w-[87%] md:w-full">
                        <Text
                          className="mt-1 text-center text-gray_50"
                          variant="body10"
                        >
                          العربية
                        </Text>
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[7px] ml-[3px] mt-2"
                          alt="checkmark"
                        />
                        <Img
                          src="images/img_materialsymbolslanguage.svg"
                          className="h-[21px] ml-[18px] w-[21px]"
                          alt="materialsymbols"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-normal leading-[normal] min-w-[67px] mr-8 text-center text-gray_50 text-xs"
                        size="sm"
                        variant="FillAmber700"
                      >
                        English
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-tajawal md:gap-11 items-start justify-between max-w-[1246px] mt-10 mx-auto md:px-5 w-full">
            <div className="flex md:h-[370px] sm:h-[586px] h-[788px] justify-end relative w-[32%] md:w-full">
              <div className="bg-blue_gray_100_01 h-px mb-[204px] ml-[68px] mt-auto w-px"></div>
              <div className="absolute bg-gray_200_2d border border-amber_700 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded-tr-[69px] w-full">
                <div className="flex flex-col md:gap-10 gap-64 items-center justify-start mb-[15px] mt-[66px] w-full">
                  <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
                    <Img
                      src="images/img_asset1sh1.png"
                      className="h-[58px] md:h-auto object-cover w-1/5 sm:w-full"
                      alt="asset1shTwo"
                    />
                    <Text
                      className="md:ml-[0] ml-[140px] mt-8 text-right text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      تواصل معنا{" "}
                    </Text>
                    <List
                      className="flex-col gap-6 grid items-center mt-[37px] w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700 border border-amber_700 border-solid flex flex-1 flex-row gap-[17px] items-center justify-center p-5 rounded-[10px] w-full">
                        <div className="h-[30px] ml-[35px] relative w-[26%]">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-between w-full">
                              <Img
                                src="images/img_ellipse76.png"
                                className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                                alt="ellipseSeventySix"
                              />
                              <Img
                                src="images/img_ellipse75.png"
                                className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                                alt="ellipseSeventyFive"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_ellipse74.png"
                            className="absolute h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"
                            alt="ellipseSeventyFour"
                          />
                        </div>
                        <CheckBox
                          className="font-normal leading-[normal] mr-[5px] my-1.5 sm:pr-5 text-[12.6px] text-gray_900 text-right"
                          inputClassName="h-[17px] mr-[5px] w-[17px]"
                          name="type"
                          id="type"
                          label="انا صانع محتوى"
                          size="sm"
                          variant="FillAmber700"
                        ></CheckBox>
                      </div>
                      <div className="bg-white_A700 border border-amber_700 border-solid flex flex-1 flex-row gap-[27px] items-end justify-center p-[17px] rounded-[10px] w-full">
                        <div className="md:h-9 h-[30px] ml-[38px] mt-1.5 relative w-[26%]">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-between w-full">
                              <Img
                                src="images/img_ellipse76.png"
                                className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                                alt="ellipseSeventySeven"
                              />
                              <Img
                                src="images/img_ellipse75.png"
                                className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                                alt="ellipseSeventyEight"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_ellipse74.png"
                            className="absolute h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"
                            alt="ellipseSeventyNine"
                          />
                        </div>
                        <Text
                          className="mb-1 mr-[91px] mt-[15px] text-gray_900 text-right"
                          variant="body9"
                        >
                          نحن شركة{" "}
                        </Text>
                      </div>
                    </List>
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[315px] mt-[35px] text-base text-center text-white_A700"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineGray7003f"
                    >
                      استمرار
                    </Button>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between w-full">
                    <div className="bg-amber_700 h-[7px] rounded-[3px] w-[49%]"></div>
                    <div className="bg-white_A700 h-[7px] rounded-[3px] w-[49%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-poppins h-[1761px] relative w-[65%] md:w-full">
              <div className="font-tajawal md:h-[582px] h-[792px] mb-[-210px] ml-0.5 w-[96%] md:w-full z-[1]">
                <Img
                  src="images/img_rectangle176.png"
                  className="h-[792px] m-auto object-cover rounded-bl-[100px] w-full"
                  alt="rectangle176"
                />
                <div className="absolute bg-gradient7  bottom-[2%] mb-[15px] p-0.5 rounded-bl-[100px] w-[97%] ">
                  <div className="absolute bg-gradient6  bg-gray_900 border-solid bottom-[0] flex flex-col gap-[23px] inset-x-[0] items-end justify-start mx-auto p-[13px] rounded-bl-[100px]">
                    <Text
                      className="font-bold leading-[43.00px] mt-2 text-gray_900 text-right w-[96%] sm:w-full"
                      variant="body1"
                    >
                      سنكون بإنتضاركم بسعادة لمساعدتكم والرد على جميع اسألتكم
                    </Text>
                    <Text
                      className="font-normal mb-[21px] text-gray_900"
                      variant="body5"
                    >
                      -فريق العمل
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[1179px] md:h-[529px] mt-auto mx-auto w-full">
                <Img
                  src="images/img_ellipse2_8.png"
                  className="absolute h-[529px] object-cover right-[0] top-[15%] w-[14%]"
                  alt="ellipseTwo"
                />
                <Img
                  src="images/img_ellipse73_1.png"
                  className="absolute bottom-[0] h-[529px] object-cover right-[0] w-[15%]"
                  alt="ellipseSeventyThree"
                />
                <div className="absolute bg-gradient7  p-0.5 rounded-bl-[100px] w-[93%] ">
                  <div className="absolute bg-gradient6  bg-gray_900 border-solid flex flex-col gap-2.5 items-start justify-center left-[0] p-[13px] rounded-bl-[100px] top-[0]">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] mt-2 text-gray_900 w-[96%] sm:w-full"
                      variant="body1"
                    >
                      We will be waiting for you happily to help you with your
                      bussiness
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
          <div className="flex flex-col gap-[18px] items-start justify-start mr-[89px] mt-[3064px] md:px-5 w-[10%] md:w-full">
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

export default OneOnePage;
