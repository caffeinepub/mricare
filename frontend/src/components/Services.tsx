import { Stethoscope, UserCheck, Zap, Scissors, ScanLine, Baby } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Checkups',
    description: 'Comprehensive oral health examinations to detect and prevent dental issues early.',
  },
  {
    icon: UserCheck,
    title: 'Specialist Consultations',
    description: 'Access to orthodontists, periodontists, and oral surgeons for specialized care.',
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: '24/7 emergency dental services for sudden pain, injuries, or urgent needs.',
  },
  {
    icon: Scissors,
    title: 'Surgical Procedures',
    description: 'Advanced oral surgery including implants, extractions, and jaw corrections.',
  },
  {
    icon: ScanLine,
    title: 'Diagnostic Imaging',
    description: 'Digital X-rays and 3D scans for precise diagnosis and treatment planning.',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Gentle, child-friendly dental care to build healthy habits from an early age.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-dark mb-4">
            Comprehensive Healthcare Services for Every Need
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto text-base leading-relaxed">
            From routine checkups to complex surgical procedures, we provide a full spectrum
            of dental and healthcare services under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-gradient-to-br from-clinic-bg-start to-white rounded-2xl p-7 border border-clinic-border hover:border-clinic-purple/30 hover:shadow-xl hover:shadow-clinic-purple/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-clinic-light flex items-center justify-center mb-5 group-hover:bg-clinic-purple group-hover:text-white transition-colors duration-300">
                  <Icon size={22} className="text-clinic-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-clinic-dark mb-2">{service.title}</h3>
                <p className="text-clinic-gray text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
