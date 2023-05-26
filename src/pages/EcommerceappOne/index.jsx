import React from "react";

import { Button, Img, Line, Text } from "components";

const EcommerceappOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 font-tajawal h-[2471px] mx-auto pb-24 relative shadow-bs2 w-full">
        <Img
          src="images/img_ellipse2_4.png"
          className="absolute h-[558px] object-cover right-[0] top-[15%] w-[5%]"
          alt="ellipseTwo"
        />
        <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start md:px-5 w-3/5 md:w-full">
              <Line className="bg-amber_700_3d h-px w-full" />
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
                <Img
                  src="images/img_ellipse3_3.png"
                  className="sm:flex-1 h-[558px] md:h-auto object-cover w-[5%] sm:w-full"
                  alt="ellipseThree"
                />
                <Text
                  className="font-normal sm:mt-0 mt-[138px] text-center text-white_A700"
                  variant="body4"
                >
                  <>
                    Seamless Product Catalog Management
                    <br /> We take pride in offering a vast and well-organized
                    product catalog. Our app allows you to easily explore
                    different categories, filter results, and compare products
                    to make informed purchasing decisions. With up-to-date
                    product information and high-quality images, you can
                    confidently choose the right products for your needs.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[67px] justify-start md:mt-0 mt-[30px] md:px-5 w-2/5 md:w-full">
              <Img
                src="images/img_img03431.png"
                className="h-[427px] md:h-auto md:ml-[0] ml-[35px] object-cover rounded-lg w-[82%]"
                alt="img03431"
              />
              <Line className="bg-amber_700_3d h-px w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1051px] mt-[150px] md:px-5 w-full">
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
              className="h-[22px] md:h-auto md:ml-[0] ml-[281px] md:mt-0 mt-9 object-cover w-[22px]"
              alt="instagramOne"
            />
            <Img
              src="images/img_gmail1.png"
              className="h-[22px] md:h-auto md:ml-[0] ml-[22px] md:mt-0 mt-9 object-cover w-[22px]"
              alt="gmailOne"
            />
          </div>
          <Line className="bg-amber_700_70 h-px max-w-[1051px] mt-1 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1049px] mt-[19px] md:px-5 w-full">
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
          <div className="flex flex-row gap-2 items-start justify-start mt-3.5 md:px-5 w-[21%] md:w-full">
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
          <Line className="bg-blue_gray_100_0f h-px mt-[34px] w-full" />
        </div>
        <div className="absolute flex md:flex-col flex-row gap-[58px] inset-x-[0] items-start justify-start max-w-[1125px] mx-auto md:px-5 top-[9%] w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start md:mt-0 mt-[118px]">
            <Text className="text-white_A700" as="h3" variant="h3">
              {" "}
              E-commerce app
            </Text>
            <Text
              className="font-normal text-white_A700 w-full"
              variant="body4"
            >
              Designed to enhance your online shopping experience. Our
              e-commerce app combines seamless interface to provide you with a
              hassle-free and enjoyable way to shop for your favorite products.
            </Text>
          </div>
          <Img
            src="images/img_image8.png"
            className="md:flex-1 h-[426px] sm:h-auto object-cover rounded-lg w-[36%] md:w-full"
            alt="imageEight"
          />
        </div>
        <div className="absolute flex md:h-[385px] h-[721px] inset-x-[0] justify-end max-w-[1167px] mx-auto md:px-5 top-[28%] w-full">
          <Text
            className="font-normal mb-14 ml-auto mr-1.5 mt-auto text-center text-white_A700"
            variant="body4"
          >
            <>
              Wishlist and Saved Items
              <br />
              Keep track of your favorite products with our wishlist and saved
              items feature. Simply add items to your wishlist or save them for
              later to easily access and purchase them when you&#39;re ready.
              Never lose sight of the products you love.
            </>
          </Text>
          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
            <div className="md:h-56 h-[336px] mx-auto w-full">
              <Text
                className="absolute font-normal inset-x-[0] mx-auto text-white_A700 top-[0] w-[98%] sm:w-full"
                variant="body4"
              >
                <>
                  Easy Navigation and Intuitive Interface: Our app boasts a
                  user-friendly interface that makes browsing, searching, and
                  navigating through various products effortless. Discover
                  products with just a few taps and find what you&#39;re looking
                  for in no time.
                </>
              </Text>
              <Text
                className="absolute bottom-[0] font-normal inset-x-[0] mx-auto text-white_A700 w-full"
                variant="body4"
              >
                Secure and Convenient Checkout: We prioritize the security of
                your transactions. Our app incorporates robust security measures
                and encrypted payment gateways to ensure that your personal
                information and payment details are always protected. Enjoy a
                smooth and hassle-free checkout process, with multiple payment
                options available.
              </Text>
            </div>
            <Img
              src="images/img_img03441.png"
              className="h-[441px] ml-[5px] mt-[-56px] object-cover rounded-lg w-[34%] z-[1]"
              alt="img03441"
            />
          </div>
        </div>
        <header className="absolute flex md:flex-col font-poppins md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[0] w-full">
          <Img
            src="images/img_asset1sh1.png"
            className="md:flex-1 h-[91px] sm:h-auto mb-5 ml-11 md:ml-[0] mr-[1092px] object-cover w-[9%] md:w-full"
            alt="asset1shOne"
          />
          <div className="md:h-[162px] h-[88px] md:mt-0 mt-[22px] relative w-full">
            <Line className="absolute bg-amber_700 bottom-[3%] h-[5px] left-[0] rounded-sm w-[48%]" />
            <div className="absolute flex md:flex-col flex-row gap-[34px] h-full inset-y-[0] items-start justify-between my-auto right-[0] w-[58%]">
              <ul className="flex flex-row sm:hidden items-center justify-between md:mt-0 mt-[17px] w-[82%] md:w-full common-row-list">
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
                <div className="flex flex-col gap-[19px] items-center justify-start w-full">
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
      </div>
    </>
  );
};

export default EcommerceappOnePage;
