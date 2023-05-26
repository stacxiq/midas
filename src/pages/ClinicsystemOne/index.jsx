import React from "react";

import { Img, Line, Text } from "components";
import Header from "components/Header";

const ClinicsystemOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-tajawal items-center justify-start mx-auto pb-28 shadow-bs2 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <Text
            className="md:ml-[0] ml-[503px] mt-[55px] text-white_A700"
            as="h5"
            variant="h5"
          >
            Clinic system
          </Text>
          <div className="md:h-[603px] sm:h-[781px] h-[874px] max-w-[1229px] mt-4 mx-auto md:px-5 relative w-full">
            <Img
              src="images/img_ellipse2_7.png"
              className="absolute h-[558px] object-cover right-[0] top-[16%] w-[5%]"
              alt="ellipseTwo"
            />
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[96%]">
              <Text
                className="font-normal text-center text-white_A700 w-3/4 sm:w-full"
                variant="body4"
              >
                نحن متحمسون لتقديم نظام إدارة العيادات الشامل المصمم لتبسيط
                العمليات وتعزيز الكفاءة وتحسين رعاية المرضى في مرافق الرعاية
                الصحية. يوفر برنامج إدارة العيادة لدينا مجموعة من الميزات
                والوظائف لإدارة الجوانب المختلفة لعمليات عيادتك بشكل فعال
              </Text>
              <Text
                className="text-center text-white_A700"
                as="h5"
                variant="h5"
              >
                الفواتير الطبية وتكامل التأمين
              </Text>
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-[27px] w-full">
                <Text
                  className="font-normal text-center text-white_A700"
                  variant="body4"
                >
                  يتكامل نظام إدارة العيادات لدينا بسلاسة مع أنظمة الفواتير
                  الطبية والتأمين.: يقوم بتنظيم عمليات الفوترة ، وإنشاء فواتير
                  دقيقة ، وتتبع المدفوعات. يتيح التكامل مع أنظمة التأمين معالجة
                  المطالبات بشكل مبسط ، وتقليل العبء الإداري وتعزيز إدارة
                  الإيرادات.
                </Text>
                <Img
                  src="images/img_image11.png"
                  className="h-[218px] md:h-auto object-cover rounded-lg"
                  alt="imageEleven"
                />
              </div>
              <Text
                className="mt-[101px] text-center text-white_A700"
                as="h5"
                variant="h5"
              >
                التقارير والتحليلات
              </Text>
            </div>
            <Img
              src="images/img_screenshot41.png"
              className="absolute bottom-[0] h-[247px] left-[1%] object-cover rounded-lg w-[43%]"
              alt="screenshotFortyOne"
            />
            <Text
              className="absolute bottom-[1%] font-normal right-[4%] text-center text-white_A700 w-[48%] sm:w-full"
              variant="body4"
            >
              {" "}
              يوفر نظام إدارة العيادات لدينا قدرات قوية لإعداد التقارير
              والتحليلات. يقوم بإنشاء تقارير شاملة حول المقاييس الرئيسية مثل
              التركيبة السكانية للمرضى وإحصاءات المواعيد والإيرادات والمزيد.
              تتيح هذه الرؤى اتخاذ القرارات المستندة إلى البيانات وتحسين
              العمليات وتحسين نتائج المرضى.
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[441px] mt-[129px] text-center text-white_A700"
            as="h5"
            variant="h5"
          >
            إدارة الموظفين والموارد
          </Text>
          <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start mt-[25px] md:px-5 w-[95%] md:w-full">
            <Img
              src="images/img_ellipse3_6.png"
              className="h-[558px] sm:h-auto md:mt-0 mt-[152px] object-cover w-[4%] md:w-full"
              alt="ellipseThree"
            />
            <div className="flex flex-col md:gap-10 gap-[308px] items-center justify-start mb-2 w-[96%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[30px] items-end justify-between w-full">
                <Text
                  className="font-normal sm:mt-0 mt-[54px] text-center text-white_A700"
                  variant="body4"
                >
                  يساعد نظامنا في تبسيط إدارة الموظفين والموارد داخل العيادة.
                  يسمح للمسؤولين بجدولة الموظفين وتعيينهم وإدارة التحولات وتتبع
                  الحضور. كما أنه يساعد على تخصيص الموارد مثل المعدات والغرف
                  الطبية ، مما يضمن الاستخدام الفعال وتقليل وقت التوقف عن العمل.
                </Text>
                <Img
                  src="images/img_image10.png"
                  className="h-[259px] md:h-auto object-cover rounded-lg"
                  alt="imageTen"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
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
          </div>
          <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[94px] mt-[5px] md:px-5 w-[21%] md:w-full">
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
          <Line className="bg-blue_gray_100_0f h-px max-w-[1260px] mt-[70px] mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default ClinicsystemOnePage;
