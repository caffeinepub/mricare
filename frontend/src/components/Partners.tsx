const partners = [
  'DentaMax', 'OralCare Pro', 'SmileTech', 'BioMed', 'HealthFirst',
  'ClearAlign', 'DentalPlus', 'MedCore', 'PureSmile', 'TechDent',
];

export default function Partners() {
  return (
    <section className="py-14 bg-clinic-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-clinic-gray text-sm font-semibold uppercase tracking-widest">
          Trusted by Leading Healthcare Partners
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-scroll-x whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center px-8 py-3 bg-white rounded-xl shadow-sm grayscale hover:grayscale-0 transition-all duration-300 min-w-[140px]"
            >
              <span className="text-clinic-dark font-bold text-sm tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
