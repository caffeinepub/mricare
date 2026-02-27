import { Clock, Heart, ShieldCheck } from 'lucide-react';

export default function Dentistry() {
  return (
    <section id="dentistry" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-clinic-bg-start to-clinic-bg-end">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-dark mb-4">
            Modern Dentistry with a{' '}
            <span className="text-clinic-purple">Gentle</span> Touch
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto text-base leading-relaxed">
            We combine cutting-edge technology with compassionate care to deliver
            exceptional dental experiences for every patient.
          </p>
        </div>

        {/* Two large feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Experienced Dentists */}
          <div className="group bg-white rounded-3xl p-8 flex gap-6 items-start shadow-sm hover:shadow-xl hover:shadow-clinic-purple/10 hover:-translate-y-1 transition-all duration-300">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-clinic-light shadow-md">
              <img
                src="/assets/generated/dentist-experienced.dim_400x400.png"
                alt="Experienced Dentists"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-clinic-dark mb-2">Experienced Dentists</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Our team of board-certified dentists brings decades of combined experience,
                ensuring you receive the highest standard of care with every visit.
              </p>
            </div>
          </div>

          {/* Modern Technology */}
          <div className="group bg-white rounded-3xl p-8 flex gap-6 items-start shadow-sm hover:shadow-xl hover:shadow-clinic-purple/10 hover:-translate-y-1 transition-all duration-300">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-clinic-light shadow-md">
              <img
                src="/assets/generated/dental-technology.dim_400x400.png"
                alt="Modern Technology"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-clinic-dark mb-2">Modern Technology</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">
                We invest in the latest dental technology — from digital X-rays to laser
                treatments — to provide precise, efficient, and comfortable procedures.
              </p>
            </div>
          </div>
        </div>

        {/* Three smaller feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-clinic-light flex items-center justify-center mb-4">
              <Heart size={22} className="text-clinic-purple" />
            </div>
            <h4 className="font-bold text-clinic-dark mb-2">Personalized & Patient-Centered Care</h4>
            <p className="text-clinic-gray text-sm">
              Every treatment plan is tailored to your unique needs and goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-clinic-light flex items-center justify-center mb-4">
              <Clock size={22} className="text-clinic-purple" />
            </div>
            <h4 className="font-bold text-clinic-dark mb-2">Flexible Hours for You</h4>
            <p className="text-clinic-gray text-sm">
              Early morning, evening, and weekend appointments available for your convenience.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-clinic-light flex items-center justify-center mb-4">
              <ShieldCheck size={22} className="text-clinic-purple" />
            </div>
            <h4 className="font-bold text-clinic-dark mb-2">Why Trust MediCare?</h4>
            <p className="text-clinic-gray text-sm">
              Accredited, insured, and trusted by over 10,000 satisfied patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
