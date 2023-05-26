import React from "react";

import { Button, Img, Line, Text } from "components";

const PosOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col items-center justify-start mx-auto pb-[66px] shadow-bs2 w-full">
        <div className="flex flex-col justify-start w-full">
          <header className="flex flex-col font-poppins items-center justify-center md:px-5 w-full">
            <div className="flex flex-col gap-3 items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[94%] md:w-full">
                <Img
                  src="images/img_asset1sh1.png"
                  className="h-[91px] md:h-auto object-cover"
                  alt="asset1shOne"
                />
                <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between md:mt-0 mt-[26px] w-3/5 md:w-full">
                  <ul className="flex flex-row sm:hidden items-center justify-between md:mt-0 mt-[13px] w-[82%] md:w-full common-row-list">
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
                  <div className="flex flex-row font-tajawal items-start justify-evenly mb-[13px] w-[13%] md:w-full">
                    <Text
                      className="mt-[23px] text-center text-gray_50"
                      variant="body10"
                    >
                      العربية
                    </Text>
                    <Img
                      src="images/img_vector.svg"
                      className="h-[3px]"
                      alt="vector"
                    />
                    <Img
                      src="images/img_materialsymbolslanguage.svg"
                      className="h-[21px] mt-[18px] w-[21px]"
                      alt="materialsymbols"
                    />
                  </div>
                </div>
              </div>
              <Line className="bg-amber_700 h-[5px] rounded-sm w-full" />
            </div>
          </header>
          <Text
            className="font-tajawal md:ml-[0] ml-[503px] mt-[58px] text-white_A700"
            as="h5"
            variant="h5"
          >
            POS system
          </Text>
          <Text
            className="font-normal font-tajawal md:ml-[0] ml-[295px] mt-[25px] text-center text-white_A700"
            variant="body4"
          >
            <>
              &quot;Effortlessly manage your business with our powerful POS
              system.&quot;
            </>
          </Text>
          <div className="flex md:flex-col flex-row gap-[27px] items-start justify-end md:ml-[0] ml-[58px] mt-[61px] md:px-5 w-[96%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[148px] w-[47%] md:w-full">
              <Text
                className="font-tajawal text-white_A700"
                as="h5"
                variant="h5"
              >
                Streamlined Sales Processes
              </Text>
              <Text
                className="font-normal font-poppins text-white_A700"
                variant="body4"
              >
                <span className="md:text-[38px] sm:text-4xl text-white_A700 text-[40px] font-tajawal text-left font-bold">
                  <>
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal text-left">
                  {" "}
                  POS systems simplify sales transactions, making the checkout
                  process faster and more efficient.
                </span>
              </Text>
              <div className="h-[434px] md:h-[625px] md:ml-[0] ml-[22px] mt-[227px] relative w-[87%] sm:w-full">
                <div className="absolute border border-amber_700 border-solid h-[347px] left-[0] rounded-lg top-[0] w-[87%]"></div>
                <Img
                  src="images/img_img00092.png"
                  className="absolute bottom-[0] h-[398px] object-cover right-[0] rounded-lg w-[84%]"
                  alt="img00092"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[165px] items-center justify-start mb-[76px] w-[48%] md:w-full">
              <div className="md:h-[358px] h-[401px] relative w-full">
                <div className="absolute border border-amber_700 border-solid bottom-[0] h-[276px] left-[0] rounded-lg w-[79%]"></div>
                <Img
                  src="images/img_image7.png"
                  className="absolute h-[358px] object-cover right-[0] rounded-lg top-[0] w-[85%]"
                  alt="imageSeven"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="font-tajawal text-white_A700 w-full"
                  as="h5"
                  variant="h5"
                >
                  Enhanced Inventory Management
                </Text>
                <Text
                  className="font-normal font-poppins text-white_A700"
                  variant="body4"
                >
                  <span className="md:text-[38px] sm:text-4xl text-white_A700 text-[40px] font-tajawal text-left font-bold">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal text-left">
                    {" "}
                    help businesses maintain better control over their
                    inventory. By tracking sales in real-time, monitoring stock
                    levels, and generating automatic alerts for low stock or
                    out-of-stock items, you can optimize your inventory
                    management, avoid overstocking or stockouts, and make
                    informed purchasing decisions.
                  </span>
                </Text>
              </div>
            </div>
            <Img
              src="images/img_ellipse2_2.png"
              className="h-[558px] sm:h-auto md:mt-0 mt-10 object-cover w-[5%] md:w-full"
              alt="ellipseTwo"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-[43px] items-start justify-start mt-[116px] md:px-5 w-[92%] md:w-full">
            <Img
              src="images/img_ellipse3_1.png"
              className="h-[558px] sm:h-auto md:mt-0 mt-[78px] object-cover w-[4%] md:w-full"
              alt="ellipseThree"
            />
            <div className="flex flex-col justify-start w-[94%] md:w-full">
              <Text className="font-normal text-white_A700" variant="body4">
                <span className="md:text-[38px] sm:text-4xl text-white_A700 text-[40px] font-tajawal text-left font-bold">
                  <>
                    <br />
                    Customer Relationship Management (CRM)
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal text-left">
                  {" "}
                  allow you to build a database of customer information,
                  including purchase history, contact details, and preferences.
                  This enables personalized marketing campaigns, loyalty
                  programs, and targeted promotions, fostering stronger customer
                  relationships and repeat business.
                </span>
              </Text>
              <div className="h-[556px] md:h-[640px] md:ml-[0] ml-[72px] mt-[84px] relative w-[94%] md:w-full">
                <div className="absolute border border-amber_700 border-solid h-[476px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                <Img
                  src="images/img_img06841.png"
                  className="absolute h-[556px] inset-[0] justify-center m-auto object-cover rounded-lg w-[94%]"
                  alt="img06841"
                />
              </div>
              <div className="flex flex-col font-tajawal items-center justify-start md:ml-[0] ml-[34px] mt-[336px] w-[97%] md:w-full">
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
              </div>
            </div>
          </div>
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

export default PosOnePage;
