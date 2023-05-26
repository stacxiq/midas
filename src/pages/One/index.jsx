import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const OnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-tajawal items-center justify-start mx-auto py-[5px] shadow-bs2 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex h-[1244px] sm:h-[1256px] md:h-[2177px] justify-end mt-[74px] md:px-5 relative w-full">
          <div className="absolute bg-amber_700 flex flex-col items-center justify-end left-[17%] p-[9px] rounded-[10px] shadow-bs top-[24%]">
            <a href="javascript:" className="text-gray_50">
              <Text variant="body6">Read More</Text>
            </a>
          </div>
          <div className="bg-amber_700 flex flex-col h-full items-center justify-end mb-[186px] ml-auto mr-[295px] mt-auto p-[9px] rounded-[10px] shadow-bs">
            <a href="javascript:" className="text-gray_50">
              <Text variant="body6">Read More</Text>
            </a>
          </div>
          <div className="absolute sm:h-[1182px] h-[1244px] md:h-[2103px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[97%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[136px] w-[36%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[118px] text-center text-white_A700"
                    as="h3"
                    variant="h3"
                  >
                    POS system
                  </Text>
                  <Text
                    className="font-normal ml-3 md:ml-[0] mt-[21px] text-center text-white_A700 w-[98%] sm:w-full"
                    variant="body4"
                  >
                    <>
                      &quot;قم بإدارة أعمالك دون عناء باستخدام نظام البيع الخاص
                      بنا &quot;
                    </>
                  </Text>
                  <div className="border border-amber_700 border-solid h-[449px] mt-[437px] rounded-lg w-[97%]"></div>
                </div>
                <div className="flex md:flex-1 flex-col justify-start w-[58%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-between w-full">
                    <div className="border border-amber_700 border-solid h-[395px] rounded-lg w-[91%]"></div>
                    <Img
                      src="images/img_ellipse2_1.png"
                      className="h-[558px] md:h-auto sm:mt-0 mt-[181px] object-cover"
                      alt="ellipseTwo"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[174px] mt-[100px] text-center text-white_A700"
                    as="h3"
                    variant="h3"
                  >
                    {" "}
                    E-commerce app
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[69px] mt-[17px] text-center text-white_A700 w-[85%] sm:w-full"
                    variant="body4"
                  >
                    {" "}
                    مصمم لتعزيز تجربة التسوق عبر الإنترنت. يجمع تطبيق التجارة
                    الإلكترونية الخاص بنا بين واجهة سلسة لتزويدك بطريقة ممتعة
                    وخالية من المتاعب للتسوق لمنتجاتك المفضلة
                  </Text>
                </div>
              </div>
            </div>
            <Img
              src="images/img_image7.png"
              className="absolute h-[457px] object-cover right-[4%] rounded-lg top-[2%] w-[49%]"
              alt="imageSeven"
            />
            <Line className="absolute bg-amber_700_3d h-px left-[0] top-[46%] w-[79%]" />
            <Img
              src="images/img_image8.png"
              className="absolute bottom-[0] h-[485px] left-[5%] object-cover rounded-lg w-[36%]"
              alt="imageEight"
            />
            <Line className="absolute bg-amber_700_3d bottom-[44%] h-px right-[0] w-[24%]" />
          </div>
        </div>
        <div className="flex h-[558px] sm:h-[584px] md:h-[997px] justify-end mt-[26px] md:px-5 relative w-full">
          <Button
            className="cursor-pointer font-normal leading-[normal] mb-[127px] min-w-[140px] ml-auto mr-[243px] mt-auto text-base text-center text-gray_50"
            shape="RoundedBorder10"
            size="md"
            variant="OutlineBlack9003f"
          >
            Read More
          </Button>
          <div className="absolute h-[558px] md:h-[971px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  src="images/img_ellipse3_558x37.png"
                  className="md:flex-1 h-[558px] sm:h-auto object-cover w-[3%] md:w-full"
                  alt="ellipseThree"
                />
                <div className="border border-amber_700 border-solid h-[242px] md:mt-0 mt-[204px] rounded-lg w-[49%]"></div>
                <div className="flex flex-col justify-start md:ml-[0] ml-[63px] md:mt-0 mt-[251px]">
                  <Text
                    className="md:ml-[0] ml-[133px] text-center text-white_A700"
                    as="h3"
                    variant="h3"
                  >
                    Midas clinic
                  </Text>
                  <Text
                    className="font-normal mt-1 text-center text-white_A700 w-full"
                    variant="body4"
                  >
                    نظام إدارة العيادة المصمم لتبسيط العمليات وتعزيز الكفاءة
                    وتحسين رعاية المرضى في مرافق الرعاية الصحية.
                  </Text>
                </div>
              </div>
            </div>
            <Line className="absolute bg-amber_700_3d h-px left-[0] top-[11%] w-[72%]" />
            <Line className="absolute bg-amber_700_3d h-px right-[0] top-[33%] w-[30%]" />
            <Img
              src="images/img_screenshot41.png"
              className="absolute bottom-[9%] h-[290px] left-[4%] object-cover rounded-lg w-[48%]"
              alt="screenshotFortyOne"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[71px] items-center justify-start mb-20 mt-[246px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[1051px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <Img
                src="images/img_asset1sh1.png"
                className="md:flex-1 h-[70px] sm:h-auto mb-3 object-cover w-[8%] md:w-full"
                alt="asset1shTwo"
              />
              <Text
                className="sm:flex-1 md:ml-[0] ml-[274px] md:mt-0 mt-[35px] text-center text-white_A700 w-[34%] sm:w-full"
                variant="body7"
              >
                To provide all the services that the customer needs in the field
                of technology, media and marketing.
              </Text>
              <Img
                src="images/img_instagram1.png"
                className="h-[22px] md:h-auto mb-[17px] md:ml-[0] ml-[281px] md:mt-0 mt-[43px] object-cover w-[22px]"
                alt="instagramOne"
              />
              <Img
                src="images/img_gmail1.png"
                className="h-[22px] md:h-auto mb-[17px] md:ml-[0] ml-[22px] md:mt-0 mt-[43px] object-cover w-[22px]"
                alt="gmailOne"
              />
            </div>
            <Line className="bg-amber_700_70 h-px mt-1 w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[19px] w-full">
              <Text className="font-normal mb-0.5 text-gray_50" variant="body5">
                Email
              </Text>
              <Text
                className="ml-2.5 md:ml-[0] md:mt-0 mt-1 text-center text-white_A700"
                variant="body6"
              >
                midas@gmail.com
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[620px] text-gray_50"
                variant="body5"
              >
                Adress
              </Text>
              <Img
                src="images/img_materialsymbol.svg"
                className="h-[15px] ml-0.5 md:ml-[0] md:mt-0 mt-[7px] w-[15px]"
                alt="materialsymbol"
              />
              <Text
                className="md:ml-[0] ml-[11px] md:mt-0 mt-1.5 text-center text-white_A700"
                variant="body6"
              >
                Iraq, Baghdad, Al-Saydiah
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start mt-3.5 w-1/4 md:w-full">
              <Text className="font-normal text-gray_50" variant="body5">
                Phone number
              </Text>
              <Text
                className="mt-[3px] text-center text-white_A700"
                variant="body6"
              >
                +694 772 788 0505
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray_100_0f h-px w-full" />
        </div>
      </div>
    </>
  );
};

export default OnePage;
