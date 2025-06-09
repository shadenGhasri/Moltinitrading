import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const AboutUSContent = () => {
  return (
    <section className="py-12 bg-gray-50">
        <div className="flex flex-col gap-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative h-[400px] rounded-xl overflow-hidden mt-8 bg-white ">
            <img
              src="https://rayamarketing.com/uploads/files/panelUpload/5ab223361aec56395ba556cc0d314ca0.png"
              className="object-contain w-full h-full bg-center bg-no-repeat absolute top-0 left-0 rounded-xl"
            />
          </div>
          <div className="text-gray-500 font-medium text-lg leading-normal">
            بازرگانی مولتینی فعالیت خود را از سال ۱۳۹۵ با تمرکز بر واردات مستقیم
            و بدون واسطه انواع لوازم آشپزخانه پیرکس، از جمله قابلمه‌های تمام
            پیرکس، فنجان، کتری و قوری، آغاز کرد. همچنین واردات لوازم برقی مانند
            سرخ‌کن، خردکن، اسپرسوساز و دیگر محصولات آشپزخانه، بخش دیگری از حوزه
            فعالیت ما بود که همواره با بهترین کیفیت و همراه با ۱۸ ماه ضمانت
            ارائه شده‌اند. با اتکا به اعتماد و حمایت شما مشتریان گرامی، از سال
            ۱۴۰۰ مسیر خود را گسترش داده و وارد حوزه تولید داخلی انواع ظروف استیل
            و فلزی مانند قابلمه‌های چدن، کتری و قوری، سینی و سرویس‌های کامل
            آشپزخانه شدیم. ما در بازرگانی مولتینی هر روز تلاش می‌کنیم تا با
            ارتقاء کیفیت خدمات و محصولات، پاسخی شایسته به اعتماد روزافزون شما
            .عزیزان بدهیم و همواره در مسیر خدمت صادقانه گام برداریم
          </div>
        </div>

    </section>
  );
};

export default AboutUSContent;
