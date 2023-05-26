import React from "react";

import { Button, Img, Line, Text } from "components";

const Page = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-poppins items-center justify-start mx-auto pb-[85px] shadow-bs2 w-full">
        <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            src="images/img_asset1sh1.png"
            className="md:flex-1 h-[91px] sm:h-auto mb-5 ml-11 md:ml-[0] mr-[1092px] object-cover w-[9%] md:w-full"
            alt="asset1shOne"
          />
          <div className="md:h-40 h-[87px] md:mt-0 mt-[23px] relative w-full">
            <Line className="absolute bg-amber_700 bottom-[3%] h-[5px] left-[0] rounded-sm w-[48%]" />
            <div className="absolute flex md:flex-col flex-row gap-[34px] h-full inset-y-[0] items-start justify-between my-auto right-[0] w-[58%]">
              <ul className="flex flex-row sm:hidden items-center justify-between md:mt-0 mt-4 w-[82%] md:w-full common-row-list">
                <li>
                  <a href="javascript:" className="text-gray_50">
                    <Text variant="body6">Home</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-gray_50">
                    <Text variant="body6">About us </Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-gray_50">
                    <Text variant="body6">Service</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-gray_50">
                    <Text variant="body6">Courses</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-base text-center text-gray_50"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="OutlineBlack9003f"
                    >
                      Contact us{" "}
                    </Button>
                  </a>
                </li>
              </ul>
              <div className="flex flex-col font-tajawal items-center justify-start w-[14%] md:w-full">
                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                  <Img
                    src="images/img_vector.svg"
                    className="h-[3px]"
                    alt="vector"
                  />
                  <div className="flex flex-row gap-8 items-start justify-end w-[87%] md:w-full">
                    <Text
                      className="mt-1 text-center text-gray_50"
                      variant="body10"
                    >
                      العربية
                    </Text>
                    <Img
                      src="images/img_materialsymbolslanguage.svg"
                      className="h-[21px] w-[21px]"
                      alt="materialsymbols"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[67px] text-center text-gray_50 text-xs"
                    size="sm"
                    variant="FillAmber700"
                  >
                    English
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex font-tajawal md:h-[1045px] h-[1244px] sm:h-[818px] justify-end mt-[79px] md:px-5 relative w-full">
          <div className="absolute md:h-20 h-[108px] left-[4%] top-[17%] w-[33%] sm:w-full">
            <div className="absolute bg-amber_700 bottom-[0] flex flex-col items-center justify-end left-[0] p-[9px] rounded-[10px] shadow-bs">
              <a href="javascript:" className="text-gray_50">
                <Text variant="body6">Read More</Text>
              </a>
            </div>
            <Text
              className="absolute font-normal inset-x-[0] mx-auto text-white_A700 top-[0] w-full"
              variant="body4"
            >
              <>
                &quot;Effortlessly manage your business with our powerful POS
                system.&quot;
              </>
            </Text>
          </div>
          <div className="flex h-56 md:h-[331px] justify-end mb-[107px] ml-auto mr-[55px] mt-auto w-[45%] sm:w-full">
            <div className="bg-amber_700 flex flex-col h-full items-center justify-end mb-[52px] ml-[195px] mt-auto p-[9px] rounded-[10px] shadow-bs">
              <a href="javascript:" className="text-gray_50">
                <Text variant="body6">Read More</Text>
              </a>
            </div>
            <Text
              className="absolute font-normal h-full inset-[0] justify-center m-auto text-center text-white_A700 w-full"
              variant="body4"
            >
              {" "}
              designed to enhance your online shopping experience. Our
              e-commerce app combines seamless interface to provide you with a
              hassle-free and enjoyable way to shop for your favorite products
            </Text>
          </div>
          <div className="absolute h-[1244px] sm:h-[739px] md:h-[966px] inset-[0] justify-center m-auto w-full">
            <div className="absolute h-[1182px] sm:h-[739px] md:h-[966px] inset-x-[0] mx-auto top-[0] w-[97%] md:w-full">
              <div className="h-[1182px] sm:h-[739px] md:h-[966px] m-auto w-full">
                <div className="absolute flex md:flex-col flex-row gap-[13px] items-start justify-between right-[0] top-[0] w-[58%]">
                  <div className="border border-amber_700 border-solid h-[395px] rounded-lg w-[91%]"></div>
                  <Img
                    src="images/img_ellipse2_558x52.png"
                    className="h-[558px] md:h-auto md:mt-0 mt-[181px] object-cover"
                    alt="ellipseTwo"
                  />
                </div>
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-start justify-between left-[0] w-[86%]">
                  <div className="border border-amber_700 border-solid h-[449px] rounded-lg w-2/5"></div>
                  <Text
                    className="md:mt-0 mt-[106px] text-center text-white_A700"
                    as="h3"
                    variant="h3"
                  >
                    {" "}
                    E-commerce app
                  </Text>
                </div>
              </div>
              <Text
                className="absolute left-[1%] text-white_A700 top-[12%]"
                as="h3"
                variant="h3"
              >
                POS system
              </Text>
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
        <div className="flex font-tajawal h-[558px] md:h-[584px] sm:h-[924px] justify-end mt-[26px] md:px-5 relative w-full">
          <div className="h-[147px] md:h-[205px] mb-[93px] ml-auto mr-[69px] mt-auto w-[38%] sm:w-full">
            <div className="absolute bg-amber_700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[9px] rounded-[10px] shadow-bs">
              <a href="javascript:" className="text-gray_50">
                <Text variant="body6">Read More</Text>
              </a>
            </div>
            <Text
              className="absolute font-normal inset-x-[0] mx-auto text-center text-white_A700 top-[0] w-full"
              variant="body4"
            >
              clinic management system that is designed to streamline
              operations, enhance efficiency, and optimize patient care in
              healthcare facilities.
            </Text>
          </div>
          <div className="absolute h-[558px] sm:h-[898px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[86%]">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Img
                  src="images/img_ellipse3.png"
                  className="sm:flex-1 h-[558px] md:h-auto object-cover w-[4%] sm:w-full"
                  alt="ellipseThree"
                />
                <div className="border border-amber_700 border-solid h-[242px] sm:mt-0 mt-[204px] rounded-lg w-[57%]"></div>
                <Text
                  className="sm:ml-[0] ml-[196px] sm:mt-0 mt-[251px] text-center text-white_A700"
                  as="h3"
                  variant="h3"
                >
                  Midas clinic
                </Text>
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
        <div className="flex flex-col font-tajawal md:gap-10 gap-[71px] items-center justify-start mt-[246px] w-full">
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

export default Page;
