import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const doctors = useCountUp(100, 1800, visible);
  const facilities = useCountUp(200, 2000, visible);

  return (
    <section
      id="home"
      ref={ref}
      className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-clinic-bg-start to-clinic-bg-end overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 bg-clinic-light text-clinic-purple text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-clinic-purple" />
            Advanced Dental Care
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-clinic-dark leading-tight mb-6">
            Advanced Your Smile{' '}
            <span className="text-clinic-purple">Our Every Day</span> Mission
          </h1>

          <p className="text-clinic-gray text-lg leading-relaxed mb-8 max-w-lg">
            Experience world-class dental care with our team of specialized doctors and
            state-of-the-art facilities. Your perfect smile is just one appointment away.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#consultation"
              className="bg-clinic-dark text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-clinic-dark/90 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="border-2 border-clinic-dark text-clinic-dark px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-clinic-dark hover:text-white hover:scale-105 transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-extrabold text-clinic-dark">24/7</p>
              <p className="text-xs text-clinic-gray font-medium mt-0.5">Emergency Support</p>
            </div>
            <div className="w-px bg-clinic-border" />
            <div>
              <p className="text-2xl font-extrabold text-clinic-dark">{doctors}+</p>
              <p className="text-xs text-clinic-gray font-medium mt-0.5">Specialized Doctors</p>
            </div>
            <div className="w-px bg-clinic-border" />
            <div>
              <p className="text-2xl font-extrabold text-clinic-dark">{facilities}+</p>
              <p className="text-xs text-clinic-gray font-medium mt-0.5">Medical Facilities</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className={`relative flex justify-center transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative w-full max-w-md">
            {/* Soft gradient blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-clinic-purple/20 to-clinic-light rounded-3xl blur-2xl scale-110" />

            <img
              src="/assets/generated/hero-dentist.dim_800x900.png"
              alt="Dentist with patient"
              className="relative z-10 w-full rounded-3xl shadow-2xl object-cover"
            />

            {/* Static badge */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-clinic-light flex items-center justify-center text-clinic-purple font-bold text-lg">
                ✓
              </div>
              <div>
                <p className="text-xs font-bold text-clinic-dark">Certified Clinic</p>
                <p className="text-xs text-clinic-gray">ISO 9001:2015</p>
              </div>
            </div>

            {/* Static rating */}
            <div className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 text-center">
              <p className="text-2xl font-extrabold text-clinic-purple">4.9★</p>
              <p className="text-xs text-clinic-gray">Patient Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
