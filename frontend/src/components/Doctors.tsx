import { Star } from 'lucide-react';
import { SiLinkedin, SiX, SiFacebook } from 'react-icons/si';

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialization: 'Orthodontist',
    rating: 4.9,
    image: '/assets/generated/doctor-1.dim_400x480.png',
  },
  {
    name: 'Dr. James Chen',
    specialization: 'Oral Surgeon',
    rating: 4.8,
    image: '/assets/generated/doctor-2.dim_400x480.png',
  },
  {
    name: 'Dr. Amara Osei',
    specialization: 'Periodontist',
    rating: 5.0,
    image: '/assets/generated/doctor-3.dim_400x480.png',
  },
  {
    name: 'Dr. Lucas Rivera',
    specialization: 'Endodontist',
    rating: 4.7,
    image: '/assets/generated/doctor-4.dim_400x480.png',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      ))}
      <span className="text-xs text-clinic-gray ml-1 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-clinic-bg-start to-clinic-bg-end">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-dark mb-4">
            Meet Our Expert Doctors & Medical Specialists
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto text-base leading-relaxed">
            Our team of highly qualified specialists is dedicated to providing you with
            the best dental care and a comfortable experience.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-clinic-purple/15 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Social overlay */}
                <div className="absolute inset-0 bg-clinic-purple/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-clinic-purple hover:bg-clinic-light transition-colors duration-200">
                    <SiLinkedin size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-clinic-purple hover:bg-clinic-light transition-colors duration-200">
                    <SiX size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-clinic-purple hover:bg-clinic-light transition-colors duration-200">
                    <SiFacebook size={16} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-clinic-dark text-base mb-1">{doctor.name}</h3>
                <p className="text-clinic-purple text-sm font-medium mb-3">{doctor.specialization}</p>
                <StarRating rating={doctor.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
