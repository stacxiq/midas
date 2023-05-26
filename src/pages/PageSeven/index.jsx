import React from "react";

import { Button, Img, Line, Text } from "components";

const PageSeven = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col items-center justify-end mx-auto shadow-bs2 w-full">
        <div className="flex flex-col justify-end w-full">
          <header className="flex md:flex-col font-poppins md:gap-5 items-center justify-center mr-[45px] md:px-5 w-full">
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
                  <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-between md:ml-[0] ml-[5px] w-[95%] md:w-full">
                      <Text className="mt-1 text-gray_50" variant="body10">
                        English
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[7px] mt-[9px]"
                        alt="checkmark"
                      />
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
                      العربية
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Text
            className="font-tajawal md:ml-[0] ml-[271px] mr-[268px] mt-[83px] text-amber_700 text-center"
            as="h2"
            variant="h2"
          >
            Meet our creative team members
          </Text>
          <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1178px] mt-[71px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_rectangle133.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle133"
            />
            <Img
              src="images/img_rectangle134.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle134"
            />
            <Img
              src="images/img_rectangle135.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle135"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[976px] mt-3.5 mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start">
              <Text className="font-semibold text-white_A700" variant="body5">
                Simon Árpád
              </Text>
              <Text className="font-normal text-white_A700" variant="body5">
                Team Consultant
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[59%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-[94%] md:w-full">
                <Text className="font-semibold text-white_A700" variant="body5">
                  Mezei Ágnes
                </Text>
                <Text className="font-semibold text-white_A700" variant="body5">
                  Farkas Ágnes
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text className="font-normal text-white_A700" variant="body5">
                  Financial Analyst
                </Text>
                <Text className="font-normal text-white_A700" variant="body5">
                  Web Developer IV
                </Text>
              </div>
            </div>
          </div>
          <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1178px] mt-[68px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_rectangle136.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle136"
            />
            <Img
              src="images/img_rectangle138.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle138"
            />
            <Img
              src="images/img_rectangle137.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle137"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start ml-14 md:ml-[0] mr-[247px] mt-3.5 md:px-5 w-[77%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-1.5">
              <Text className="font-semibold text-white_A700" variant="body5">
                Simon Árpád
              </Text>
              <Text className="font-normal text-white_A700" variant="body5">
                Team Consultant
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start ml-56 md:ml-[0] md:mt-0 mt-[7px]">
              <Text className="font-semibold text-white_A700" variant="body5">
                Mezei Ágnes
              </Text>
              <Text className="font-normal text-white_A700" variant="body5">
                Financial Analyst
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mb-1.5 md:ml-[0] ml-[232px]">
              <Text className="font-semibold text-white_A700" variant="body5">
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
          <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1178px] mt-[39px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_rectangle139.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle139"
            />
            <Img
              src="images/img_rectangle141.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle141"
            />
            <Img
              src="images/img_rectangle140.png"
              className="flex-1 h-[378px] md:h-auto object-cover w-full"
              alt="rectangle140"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start md:ml-[0] ml-[60px] mr-[243px] mt-3.5 md:px-5 w-[77%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-1.5">
              <Text className="font-semibold text-white_A700" variant="body5">
                Simon Árpád
              </Text>
              <Text className="font-normal text-white_A700" variant="body5">
                Team Consultant
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start ml-56 md:ml-[0] md:mt-0 mt-[7px]">
              <Text className="font-semibold text-white_A700" variant="body5">
                Mezei Ágnes
              </Text>
              <Text className="font-normal text-white_A700" variant="body5">
                Financial Analyst
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mb-1.5 md:ml-[0] ml-[232px]">
              <Text className="font-semibold text-white_A700" variant="body5">
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
          <div className="flex md:flex-col flex-row font-tajawal md:gap-5 items-end justify-start max-w-[1049px] mt-[85px] mx-auto md:px-5 w-full">
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
          <div className="flex md:flex-col flex-row font-tajawal gap-2 items-start justify-start md:ml-[0] ml-[114px] mr-[908px] mt-3.5 md:px-5 w-[21%] md:w-full">
            <Text className="font-normal text-gray_50" variant="body5">
              Phone number
            </Text>
            <Text
              className="md:mt-0 mt-[3px] text-center text-white_A700"
              variant="body6"
            >
              +694 772 788 0505
            </Text>
          </div>
          <div className="sm:h-[1901px] h-[1957px] md:h-[244px] mt-[29px] md:px-5 relative w-full">
            <div className="absolute h-[1956px] inset-[0] justify-center m-auto w-full">
              <div className="flex flex-col items-center justify-start mb-[-178.13px] ml-[37px] mt-auto w-[43%] z-[1]">
                <div className="flex flex-col md:gap-10 gap-[1820px] justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[71%] md:w-full">
                    <Img
                      src="images/img_location_gray_900.svg"
                      className="h-3.5 mb-0.5"
                      alt="location"
                    />
                    <Img
                      src="images/img_call.svg"
                      className="h-[13px] sm:ml-[0] ml-[164px] sm:mt-0 mt-[3px]"
                      alt="call"
                    />
                    <Img
                      src="images/img_mail.svg"
                      className="h-[9px] sm:ml-[0] ml-[153px] sm:mt-0 mt-[3px]"
                      alt="mail"
                    />
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[34px] w-[94%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[88%] md:w-full">
                      <Img
                        src="images/img_adress.svg"
                        className="h-[17px]"
                        alt="adress_One"
                      />
                      <Img
                        src="images/img_phone.svg"
                        className="h-[17px] sm:ml-[0] ml-[129px]"
                        alt="phone"
                      />
                      <Img
                        src="images/img_location_gray_900_18x56.svg"
                        className="h-[18px] sm:ml-[0] ml-[120px] sm:mt-0 mt-1"
                        alt="location_One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_iraqbaghadaalsaydiah.svg"
                        className="h-[39px]"
                        alt="iraqbaghadaalsa"
                      />
                      <Img
                        src="images/img_checkmark_gray_900.svg"
                        className="h-[11px]"
                        alt="checkmark_One"
                      />
                      <Img
                        src="images/img_midasgmailcom.svg"
                        className="h-4"
                        alt="midasgmailcom"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-amber_700 flex flex-col items-end justify-end mt-auto mx-auto p-10 sm:px-5 w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start mr-2 mt-[58px] w-[11%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[93%] md:w-full">
                    <Img
                      src="images/img_iconsaxlinearinstagram.svg"
                      className="h-8 w-8"
                      alt="iconsaxlinearin"
                    />
                    <Img
                      src="images/img_midasiq.svg"
                      className="h-4"
                      alt="midasiq"
                    />
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      src="images/img_iconsaxlinearfacebook.svg"
                      className="h-8 w-8"
                      alt="iconsaxlinearfa"
                    />
                    <Img src="images/img_menu.svg" className="h-4" alt="menu" />
                  </div>
                </div>
              </div>
            </div>
            <Line className="absolute bg-blue_gray_100_0f h-px inset-x-[0] mx-auto top-[0] w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSeven;
