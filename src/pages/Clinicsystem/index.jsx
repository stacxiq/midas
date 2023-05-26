import React from "react";

import { Button, Img, Line, Text } from "components";

const ClinicsystemPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col items-center justify-start mx-auto pb-[99px] shadow-bs2 w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <header className="flex flex-col font-poppins items-center justify-center md:px-5 w-full">
            <div className="flex flex-col gap-3 items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[94%] md:w-full">
                <Img
                  src="images/img_asset1sh1.png"
                  className="h-[91px] md:h-auto object-cover"
                  alt="asset1shOne"
                />
                <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between md:mt-0 mt-10 w-3/5 md:w-full">
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
                  <div className="flex flex-row font-tajawal items-start justify-between md:mt-0 mt-1 w-[13%] md:w-full">
                    <Text
                      className="mt-[5px] text-center text-gray_50"
                      variant="body10"
                    >
                      العربية
                    </Text>
                    <Img
                      src="images/img_vector.svg"
                      className="h-0.5"
                      alt="vector"
                    />
                    <Img
                      src="images/img_materialsymbolslanguage.svg"
                      className="h-[21px] w-[21px]"
                      alt="materialsymbols"
                    />
                  </div>
                </div>
              </div>
              <Line className="bg-amber_700 h-[5px] rounded-sm w-full" />
            </div>
          </header>
          <Text
            className="font-tajawal mt-[58px] text-white_A700"
            as="h5"
            variant="h5"
          >
            Clinic system
          </Text>
          <div className="flex md:flex-col flex-row font-tajawal gap-3 items-end justify-between mt-[27px] w-full">
            <Img
              src="images/img_ellipse3_5.png"
              className="h-[558px] md:h-auto mb-1 md:mt-0 mt-[1218px] object-cover"
              alt="ellipseThree"
            />
            <div className="flex flex-col items-center justify-start md:px-5">
              <Text
                className="font-normal text-center text-white_A700 w-3/4 sm:w-full"
                variant="body4"
              >
                We are excited to introduce our comprehensive clinic management
                system that is designed to streamline operations, enhance
                efficiency, and optimize patient care in healthcare facilities.
                Our clinic management software provides a range of features and
                functionalities to effectively manage various aspects of your
                clinic operations
              </Text>
              <Text
                className="mt-5 text-center text-white_A700"
                as="h5"
                variant="h5"
              >
                Medical Billing and Insurance Integration
              </Text>
              <div className="flex flex-col items-start justify-start mt-[47px] w-[99%] md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-[53px] items-end justify-between w-full">
                  <Text
                    className="font-normal sm:mt-0 mt-3 text-center text-white_A700"
                    variant="body4"
                  >
                    Our clinic management system seamlessly integrates with
                    medical billing and insurance systems. It organize billing
                    processes, generates accurate invoices, and tracks payments.
                    Integration with insurance systems enables streamlined
                    claims processing, reducing administrative burden and
                    enhancing revenue management.
                  </Text>
                  <Img
                    src="images/img_image11.png"
                    className="h-[218px] md:h-auto object-cover rounded-lg"
                    alt="imageEleven"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[378px] mt-[100px] text-center text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  Reporting and Analytics
                </Text>
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[39px] w-full">
                  <Img
                    src="images/img_screenshot41.png"
                    className="h-[247px] md:h-auto object-cover rounded-lg"
                    alt="screenshotFortyOne"
                  />
                  <Text
                    className="font-normal sm:mt-0 mt-8 text-center text-white_A700"
                    variant="body4"
                  >
                    {" "}
                    Our clinic management system offers robust reporting and
                    analytics capabilities. It generates comprehensive reports
                    on key metrics such as patient demographics, appointment
                    statistics, revenue, and more. These insights enable
                    data-driven decision-making, process optimization, and
                    improved patient outcomes.
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[331px] mt-[97px] text-center text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  Staff and Resource Management
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[34px] items-center justify-between mt-[57px] w-full">
                <Text
                  className="font-normal text-center text-white_A700"
                  variant="body4"
                >
                  Our system helps streamline staff and resource management
                  within the clinic. It allows administrators to schedule and
                  assign staff members, manage shifts, and track attendance. It
                  also helps allocate resources such as medical equipment and
                  rooms, ensuring efficient utilization and reducing downtime.
                </Text>
                <Img
                  src="images/img_image10.png"
                  className="h-[259px] md:h-auto object-cover rounded-lg"
                  alt="imageTen"
                />
              </div>
              <div className="flex flex-col items-center justify-start mt-[263px] w-[91%] md:w-full">
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
                    To provide all the services that the customer needs in the
                    field of technology, media and marketing.
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
                  <Text
                    className="font-normal mb-0.5 text-gray_50"
                    variant="body5"
                  >
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
              </div>
            </div>
            <Img
              src="images/img_ellipse2_6.png"
              className="h-[558px] md:h-auto mb-[1093px] md:mt-0 mt-[129px] object-cover"
              alt="ellipseTwo"
            />
          </div>
          <div className="flex flex-row font-tajawal gap-2 items-start justify-start mt-3.5 md:px-5 w-[21%] md:w-full">
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
          <Line className="bg-blue_gray_100_0f h-px max-w-[1273px] mt-[70px] mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default ClinicsystemPage;
