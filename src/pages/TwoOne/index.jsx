import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const TwoOnePage = () => {
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
              <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between max-w-[1236px] mx-auto md:px-5 w-full">
                <div className="flex md:h-[674px] sm:h-[782px] h-[788px] justify-end md:mt-0 mt-1 relative w-[33%] md:w-full">
                  <div className="bg-blue_gray_100_01 h-px mb-[202px] ml-[58px] mt-auto w-px"></div>
                  <div className="absolute bg-gray_200_2d border border-amber_700 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded-tr-[69px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[148px] justify-start mb-[13px] mt-[70px] w-full">
                      <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[90%] md:w-full">
                        <Img
                          src="images/img_asset1sh1.png"
                          className="h-[58px] md:h-auto object-cover w-1/5 sm:w-full"
                          alt="asset1shTwo"
                        />
                        <Text
                          className="font-tajawal md:ml-[0] ml-[147px] mt-[53px] text-right text-white_A700"
                          as="h6"
                          variant="h6"
                        >
                          تواصل معنا{" "}
                        </Text>
                        <Text
                          className="font-tajawal md:ml-[0] ml-[275px] mt-9 text-right text-white_A700"
                          variant="body6"
                        >
                          الاسم{" "}
                        </Text>
                        <Line className="bg-white_A700 h-px mt-[5px] w-full" />
                        <Text
                          className="font-tajawal md:ml-[0] ml-[269px] mt-8 text-right text-white_A700"
                          variant="body6"
                        >
                          الايميل{" "}
                        </Text>
                        <Line className="bg-white_A700 h-px mt-[5px] w-full" />
                        <Text
                          className="font-poppins md:ml-[0] ml-[164px] mt-[58px] text-white_A700"
                          variant="body6"
                        >
                          كيف يمكننا مساعدتك ؟
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-5 w-[99%] md:w-full">
                          <div className="flex flex-col gap-[38px] items-end justify-start w-full">
                            <div className="flex flex-col font-tajawal gap-[19px] items-center justify-start w-[72%] md:w-full">
                              <div className="flex flex-row items-start justify-start w-full">
                                <div className="bg-white_A700 border border-blue_gray_100_02 border-solid h-[13px] mb-[3px] rounded-[3px] w-[7%]"></div>
                                <Text
                                  className="ml-7 text-white_A700"
                                  variant="body8"
                                >
                                  تعاون{" "}
                                </Text>
                                <div className="bg-white_A700 border border-blue_gray_100_02 border-solid h-[13px] mb-[3px] ml-[62px] rounded-[3px] w-[7%]"></div>
                                <Text
                                  className="ml-[27px] text-white_A700"
                                  variant="body8"
                                >
                                  برمجيات{" "}
                                </Text>
                              </div>
                              <div className="flex flex-row items-start justify-start w-full">
                                <div className="bg-white_A700 border border-blue_gray_100_02 border-solid h-[13px] my-[3px] rounded-[3px] w-[7%]"></div>
                                <Text
                                  className="ml-[34px] mt-[3px] text-white_A700"
                                  variant="body8"
                                >
                                  اخرى{" "}
                                </Text>
                                <div className="bg-white_A700 border border-blue_gray_100_02 border-solid h-[13px] ml-[62px] my-[3px] rounded-[3px] w-[7%]"></div>
                                <Text
                                  className="mb-[3px] ml-8 text-white_A700"
                                  variant="body8"
                                >
                                  تسويق{" "}
                                </Text>
                              </div>
                            </div>
                            <Button
                              className="cursor-pointer font-normal font-poppins leading-[normal] min-w-[315px] mr-0.5 text-base text-center text-white_A700"
                              shape="RoundedBorder10"
                              size="sm"
                              variant="OutlineGray7003f"
                            >
                              Send
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <div className="bg-white_A700 h-[7px] rounded-[3px] w-[49%]"></div>
                        <div className="bg-amber_700 h-[7px] rounded-[3px] w-[49%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1767px] md:h-[792px] relative w-[67%] md:w-full">
                  <Img
                    src="images/img_ellipse2_9.png"
                    className="absolute bottom-[29%] h-[529px] object-cover right-[0] w-[19%]"
                    alt="ellipseTwo"
                  />
                  <Img
                    src="images/img_ellipse73_2.png"
                    className="absolute bottom-[0] h-[529px] object-cover right-[0] w-[14%]"
                    alt="ellipseSeventyThree"
                  />
                  <div className="absolute h-[792px] left-[0] top-[0] w-[94%] md:w-full">
                    <Img
                      src="images/img_rectangle176.png"
                      className="h-[792px] m-auto object-cover rounded-bl-[100px] w-full"
                      alt="rectangle166"
                    />
                    <div className="absolute bg-gradient7  bottom-[2%] mb-[15px] p-0.5 rounded-bl-[100px] w-[97%] ">
                      <div className="absolute bg-gradient6  bg-gray_900 border-solid bottom-[0] flex flex-col gap-3.5 inset-x-[0] justify-center mx-auto p-7 sm:px-5 rounded-bl-[100px]">
                        <Text
                          className="font-bold leading-[43.00px] mt-1 text-gray_900 text-right w-full"
                          variant="body1"
                        >
                          سنكون بإنتضاركم بسعادة لمساعدتكم والرد على جميع
                          اسألتكم
                        </Text>
                        <Text
                          className="font-normal mb-1 md:ml-[0] ml-[576px] mr-1.5 text-gray_900"
                          variant="body5"
                        >
                          -فريق العمل
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

export default TwoOnePage;
