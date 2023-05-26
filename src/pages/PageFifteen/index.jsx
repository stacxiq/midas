import React from "react";

import { Button, Img, Line, Text } from "components";

const PageFifteen = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col items-center justify-start mx-auto pb-[101px] shadow-bs2 w-full">
        <div className="flex flex-col justify-start w-full">
          <header className="flex md:flex-col font-poppins md:gap-5 items-center justify-center ml-0.5 md:ml-[0] md:px-5 w-full">
            <Img
              src="images/img_asset1sh1.png"
              className="md:flex-1 h-[91px] sm:h-auto mb-5 ml-11 md:ml-[0] mr-[1092px] object-cover w-[9%] md:w-full"
              alt="asset1shOne"
            />
            <div className="md:h-[139px] h-[71px] md:mt-0 mt-10 relative w-full">
              <Line className="absolute bg-amber_700 bottom-[4%] h-[5px] left-[0] rounded-sm w-[48%]" />
              <div className="absolute flex md:flex-col flex-row gap-[34px] h-full inset-y-[0] items-start justify-between my-auto right-[0] w-[58%]">
                <ul className="flex flex-row sm:hidden items-center justify-between w-[82%] md:w-full common-row-list">
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
          </header>
          <div className="flex md:flex-col flex-row font-tajawal md:gap-10 items-center justify-between max-w-[1166px] mt-[70px] mx-auto md:px-5 w-full">
            <div className="flex flex-col relative w-[53%] md:w-full">
              <div className="flex md:h-[114px] h-[213px] justify-end mx-auto pt-[98px] w-full">
                <Text
                  className="leading-[62.00px] mt-auto mx-auto text-amber_700"
                  as="h2"
                  variant="h2"
                >
                  <span className="md:text-[46px] sm:text-[40px] text-amber_700 text-[50px] font-tajawal text-left font-bold">
                    Creative{" "}
                  </span>
                  <span className="md:text-[46px] sm:text-[40px] text-lime_50 text-[50px] font-tajawal text-left font-bold">
                    marketing
                  </span>
                  <span className="md:text-[46px] sm:text-[40px] text-lime_50 text-[50px] font-tajawal text-left font-bold">
                    <>
                      {" "}
                      <br />
                    </>
                  </span>
                  <span className="md:text-[46px] sm:text-[40px] text-white_A700 text-[50px] font-tajawal text-left font-bold">
                    agency
                  </span>
                  <span className="md:text-[46px] sm:text-[40px] text-amber_700 text-[50px] font-tajawal text-left font-bold">
                    {" "}
                    in Iraq
                  </span>
                </Text>
                <Text
                  className="absolute bottom-[8%] left-[0] text-white_A700 w-[69%] sm:w-full"
                  variant="body6"
                >
                  To provide all the services that the customer needs in the
                  field of technology, media and marketing.
                </Text>
              </div>
              <div className="flex flex-row gap-[26px] items-center justify-between mt-[-16px] w-[57%] z-[1]">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[160px] text-base text-center text-gray_900"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineAmber700"
                >
                  Our services
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[160px] text-amber_700 text-base text-center"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineAmber700_1"
                >
                  Contact us{" "}
                </Button>
              </div>
            </div>
            <div className="border-[3px] border-amber_700 border-dashed flex sm:flex-1 flex-col h-[494px] sm:h-auto items-center justify-start p-[13px] rounded-[50%] w-[494px] sm:w-full">
              <Img
                src="images/img_ellipse5.png"
                className="h-[468px] md:h-auto object-cover rounded-[234px] w-[98%]"
                alt="ellipseFive"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between mt-[61px] w-full">
            <div className="h-[697px] md:px-5 relative w-[53%] md:w-full">
              <Img
                src="images/img_rectangle146.png"
                className="absolute h-[697px] inset-y-[0] left-[0] my-auto object-cover w-[72%]"
                alt="rectangle146"
              />
              <Img
                src="images/img_smilingportrai.png"
                className="absolute bottom-[13%] h-[421px] object-cover right-[0] w-[94%]"
                alt="smilingportrai"
              />
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[88px] justify-start md:mt-0 mt-[83px] md:px-5 w-[45%] md:w-full">
              <Img
                src="images/img_rectangle148.png"
                className="h-[167px] md:h-auto md:ml-[0] ml-[147px] object-cover w-[74%]"
                alt="rectangle148"
              />
              <div className="md:h-[117px] h-[178px] mr-[43px] relative w-[93%] sm:w-full">
                <Text
                  className="absolute font-tajawal inset-x-[0] leading-[55.00px] mx-auto text-amber_700_01 text-center top-[0] w-[99%] sm:w-full"
                  as="h5"
                  variant="h5"
                >
                  Market your work in the right place
                </Text>
                <Text
                  className="absolute bottom-[0] font-normal font-poppins inset-x-[0] mx-auto text-center text-white_A700_c1 w-full"
                  variant="body4"
                >
                  {" "}
                  We provide distinguished and comprehensive services to
                  companies wishing to improve and develop their work in the
                  field of marketing
                </Text>
              </div>
            </div>
          </div>
          <Img
            src="images/img_rectangle149.png"
            className="h-[19px] sm:h-auto md:ml-[0] ml-[317px] mt-[90px] object-cover w-[76%] md:w-full"
            alt="rectangle149"
          />
          <div className="flex md:flex-col flex-row font-tajawal md:gap-[49px] items-start justify-between max-w-[1216px] mt-[102px] mx-auto md:px-5 w-full">
            <div className="md:h-[366px] h-[484px] relative w-[51%] md:w-full">
              <Img
                src="images/img_doutes.svg"
                className="absolute bottom-[0] h-[279px] right-[0]"
                alt="doutes"
              />
              <Img
                src="images/img_studentscollab.png"
                className="absolute h-[366px] left-[0] object-cover top-[0] w-[89%]"
                alt="studentscollab"
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start md:mt-0 mt-[102px]">
              <Text
                className="text-amber_700_01 text-center"
                as="h5"
                variant="h5"
              >
                Who are we?
              </Text>
              <Text
                className="font-normal text-center text-white_A700_c1 w-full"
                variant="body4"
              >
                A company managed by several young people and provides diverse
                and comprehensive services to companies that want to improve and
                develop their work in the field of marketing, content industry,
                software and any service needed by the client{" "}
              </Text>
            </div>
          </div>
          <Text
            className="font-tajawal md:ml-[0] ml-[354px] mt-[73px] text-amber_700 text-center"
            as="h5"
            variant="h5"
          >
            Meet our creative team members
          </Text>
          <div className="font-poppins mt-[55px] overflow-x-auto w-full">
            <div className="h-[1165px] sm:h-[772px] md:h-[866px] overflow-auto md:px-5 relative w-full">
              <div className="absolute bottom-[0] h-[1091px] sm:h-[772px] md:h-[866px] inset-x-[0] mx-auto w-full">
                <div className="absolute bottom-[16%] flex flex-col md:gap-10 gap-[105px] justify-start left-[0] w-[92%]">
                  <Img
                    src="images/img_rectangle151.png"
                    className="h-[42px] md:h-auto object-cover w-[24%]"
                    alt="rectangle151"
                  />
                  <div className="bg-amber_700 h-[37px] md:ml-[0] ml-[805px] w-[32%]"></div>
                </div>
                <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[107px] justify-start left-[2%] w-[82%]">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[59px] w-[95%] md:w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start mb-0.5">
                      <Text
                        className="font-semibold text-white_A700"
                        variant="body5"
                      >
                        Simon Árpád
                      </Text>
                      <Text
                        className="font-normal text-white_A700"
                        variant="body5"
                      >
                        Team Consultant
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[228px] md:mt-0 mt-[7px]">
                      <Text
                        className="font-semibold text-white_A700"
                        variant="body5"
                      >
                        Mezei Ágnes
                      </Text>
                      <Text
                        className="font-normal text-white_A700"
                        variant="body5"
                      >
                        Financial Analyst
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[232px]">
                      <Text
                        className="font-semibold text-white_A700"
                        variant="body5"
                      >
                        Farkas Ágnes
                      </Text>
                      <Text
                        className="font-normal mt-0.5 text-white_A700"
                        variant="body5"
                      >
                        Web Developer IV
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_smilingportrai_597x895.png"
                    className="h-[597px] md:h-auto md:ml-[0] ml-[145px] object-cover w-[87%]"
                    alt="smilingportrai_One"
                  />
                </div>
                <Text
                  className="absolute font-normal right-[0] text-white_A700 top-[32%]"
                  variant="body5"
                >
                  Financial Analyst
                </Text>
                <Text
                  className="absolute font-semibold right-[0] text-white_A700 top-[29%]"
                  variant="body5"
                >
                  Mezei Ágnes
                </Text>
                <a
                  href="javascript:"
                  className="absolute font-normal right-[2%] text-white_A700 top-[38%]"
                >
                  <Text variant="body5">View more</Text>
                </a>
                <Img
                  src="images/img_ellipse2.png"
                  className="absolute h-[558px] object-cover right-[0] top-[0] w-[11%]"
                  alt="ellipseTwo"
                />
              </div>
              <Img
                src="images/img_rectangle133.png"
                className="absolute h-[378px] left-[2%] object-cover top-[0] w-[30%]"
                alt="rectangle133"
              />
              <Img
                src="images/img_rectangle135.png"
                className="absolute h-[378px] object-cover right-[6%] top-[0] w-[30%]"
                alt="rectangle135"
              />
              <Img
                src="images/img_rectangle134.png"
                className="absolute h-[378px] inset-x-[0] mx-auto object-cover top-[0] w-[30%]"
                alt="rectangle134"
              />
              <Img
                src="images/img_rectangle135.png"
                className="absolute h-[378px] object-cover right-[0] top-[0] w-[30%]"
                alt="rectangle147"
              />
            </div>
          </div>
          <div className="h-4 md:h-[37px] md:ml-[0] ml-[602px] mt-[21px] md:px-5 relative w-[3%]">
            <Img
              src="images/img_contrast.svg"
              className="absolute h-4 inset-y-[0] my-auto right-[0]"
              alt="contrast"
            />
            <div className="absolute bg-blue_gray_100_68 bottom-[13%] h-2 left-[0] rounded-[50%] w-2"></div>
          </div>
          <Text
            className="font-tajawal md:ml-[0] ml-[537px] mt-[53px] text-amber_700 text-center"
            as="h2"
            variant="h2"
          >
            Our goal
          </Text>
          <Text
            className="font-normal font-tajawal md:ml-[0] ml-[165px] mt-[19px] text-center text-white_A700_c1 w-3/4 sm:w-full"
            variant="body4"
          >
            We strive to achieve joint success with our customers by providing
            them with the best solutions, services and continuous technical
            support. We also aim to achieve leadership in our field and provide
            innovative and advanced solutions that meet the needs of our
            customers and are characterized by quality and reliability.
          </Text>
          <Text
            className="font-tajawal md:ml-[0] ml-[501px] text-amber_700"
            as="h2"
            variant="h2"
          >
            Our services
          </Text>
          <div className="flex md:flex-col flex-row font-tajawal md:gap-10 items-start justify-between max-w-[1163px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="bg-gradient  mb-[13px] md:mt-0 md:w-full mt-0.5 p-px rounded-[10px] sm:mt-0 sm:w-full w-[30%] ">
              <div className="bg-gray_900 border-solid flex flex-col gap-[29px] justify-start p-[15px] rounded-[10px] shadow-bs3">
                <Text
                  className="ml-3 md:ml-[0] mt-1 text-white_A700"
                  variant="body2"
                >
                  Software
                </Text>
                <Text
                  className="font-normal mb-[75px] md:ml-[0] ml-[3px] text-shadow-ts text-white_A700_e5"
                  variant="body5"
                >
                  <>
                    we are keen to develop and create corporate programs,
                    improve them and add more features and features that meet
                    the needs of customers.
                    <br />
                  </>
                </Text>
              </div>
            </div>
            <div className="md:h-[253px] h-[270px] relative w-[30%] md:w-full">
              <div className="absolute bg-gradient1  p-px rounded-[10px] w-full ">
                <div className="absolute bg-gray_900 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-[27px] sm:px-5 rounded-[10px] shadow-bs3 top-[0]">
                  <Text className="mb-[167px] text-white_A700" variant="body2">
                    Marketing
                  </Text>
                </div>
              </div>
              <Text
                className="absolute bottom-[0] font-normal inset-x-[0] mx-auto text-shadow-ts text-white_A700_e5 w-[94%] sm:w-full"
                variant="body5"
              >
                we provide distinguished and innovative services that include
                content marketing, content management, graphic design and other
                services that help companies increase{" "}
              </Text>
            </div>
            <div className="bg-gradient2  mb-[13px] md:mt-0 md:w-full mt-0.5 p-px rounded-[10px] sm:mt-0 sm:w-full w-[30%] ">
              <div className="bg-gray_900 border-solid flex flex-col gap-[23px] justify-center p-4 rounded-[10px] shadow-bs3">
                <Text
                  className="md:ml-[0] ml-[11px] mr-[102px] mt-[9px] text-white_A700"
                  variant="body2"
                >
                  Content creation
                </Text>
                <Text
                  className="font-normal mb-[74px] text-shadow-ts text-white_A700_e5 w-full"
                  variant="body5"
                >
                  we are keen to provide high-quality and diverse content to
                  companies wishing to enrich their websites and social accounts
                  and improve the level of interaction with the audience.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-tajawal md:gap-10 gap-[68px] items-start justify-start md:ml-[0] ml-[61px] mt-1.5 md:px-5 w-[59%] md:w-full">
            <div className="md:h-[253px] h-[271px] relative w-[46%] md:w-full">
              <div className="absolute bg-gradient2  p-px rounded-[10px] w-full ">
                <div className="absolute bg-gray_900 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-[9px] rounded-[10px] shadow-bs3 top-[0]">
                  <Text
                    className="mb-[203px] md:ml-[0] ml-[15px] text-white_A700"
                    variant="body2"
                  >
                    Courses
                  </Text>
                </div>
              </div>
              <Text
                className="absolute bottom-[0] font-normal inset-x-[0] mx-auto text-shadow-ts text-white_A700_e5 w-[91%] sm:w-full"
                variant="body5"
              >
                <span className="text-white_A700_e5 text-xl font-tajawal text-left">
                  Unlock your potential with our comprehensive courses on
                  [insert relevant topic]. Designed to provide practical
                  knowledge and real-world skills, our courses offer a
                  personalized ....
                </span>
                <span className="text-white_A700_e5 text-xl font-tajawal text-left font-bold">
                  read more
                </span>
              </Text>
            </div>
            <div className="bg-gradient  mb-4 md:w-full p-px rounded-[10px] sm:w-full w-[46%] ">
              <div className="bg-gray_900 border-solid flex flex-col gap-3.5 justify-end p-[5px] rounded-[10px] shadow-bs3">
                <Text
                  className="ml-8 md:ml-[0] mr-52 mt-2.5 text-white_A700"
                  variant="body2"
                >
                  Podcast
                </Text>
                <Text
                  className="font-normal mb-[5px] md:ml-[0] ml-[23px] text-shadow-ts text-white_A700_e5 w-[94%] sm:w-full"
                  variant="body5"
                >
                  <span className="text-white_A700_e5 text-xl font-tajawal text-left">
                    Listen in and gain new insights with our thought-provoking
                    podcast, featuring engaging discussions. Tune in for expert
                    opinions, inspiring stories, and informative conversations
                    ...{" "}
                  </span>
                  <span className="text-white_A700_e5 text-xl font-tajawal text-left font-bold">
                    read more
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-tajawal md:gap-5 items-end justify-start max-w-[1049px] mt-72 mx-auto md:px-5 w-full">
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
              src="images/img_gmail3.png"
              className="md:flex-1 h-[22px] sm:h-auto mb-[17px] md:ml-[0] ml-[18px] md:mt-0 mt-[43px] object-cover w-[3%] md:w-full"
              alt="gmailTwo"
            />
          </div>
          <Line className="bg-amber_700_70 h-px max-w-[1051px] mt-1 mx-auto w-full" />
          <div className="flex md:flex-col flex-row font-tajawal md:gap-5 items-start justify-start max-w-[1049px] mt-[19px] mx-auto md:px-5 w-full">
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
          <div className="flex flex-row font-tajawal gap-2 items-start justify-start md:ml-[0] ml-[114px] mt-3.5 md:px-5 w-[21%] md:w-full">
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
          <Line className="bg-blue_gray_100_0f h-px mt-[70px] w-full" />
        </div>
      </div>
    </>
  );
};

export default PageFifteen;
