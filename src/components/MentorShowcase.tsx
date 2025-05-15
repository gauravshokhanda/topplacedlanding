import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";

interface Mentor {
  name: string;
  role: string;
  company: string;
  image: string;
  companyLogo: string;
}

const mentors: Mentor[] = [
  {
    name: "Sarah Chen",
    role: "Senior Engineering Manager",
    company: "Google",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png",
  },
  {
    name: "Raj Patel",
    role: "Tech Lead",
    company: "Meta",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/150px-Meta_Platforms_Inc._logo.svg.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Director",
    company: "Microsoft",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/150px-Microsoft_logo.svg.png",
  },
  {
    name: "Alex Thompson",
    role: "VP Engineering",
    company: "Amazon",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/150px-Amazon_logo.svg.png",
  },
  {
    name: "Priya Sharma",
    role: "Engineering Director",
    company: "PayTM",
    image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%282019%29.svg/150px-Paytm_Logo_%282019%29.svg.png",
  },
];

const MentorShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Learn from Industry Leaders"
          subtitle="Get mentored by professionals from top companies who are passionate about helping students succeed"
        />

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {mentors.map((mentor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-xl font-bold text-white">
                        {mentor.name}
                      </h3>
                      <p className="text-white/90">{mentor.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Mentoring from</span>
                      <img
                        src={mentor.companyLogo}
                        alt={mentor.company}
                        className="h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default MentorShowcase;
