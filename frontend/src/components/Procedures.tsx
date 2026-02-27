export default function Procedures() {
  return (
    <section id="procedures" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-dark mb-4">
            Our Advanced Surgical Dental Procedures
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto text-base leading-relaxed">
            We offer a comprehensive range of dental procedures using the latest technology
            to ensure your comfort and the best possible outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Gum Surgery */}
          <div className="group bg-clinic-card-1 rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg hover:shadow-clinic-purple/10">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-white shadow-md">
              <img
                src="/assets/generated/gum-surgery.dim_300x300.png"
                alt="Gum Surgery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-clinic-dark mb-2">Gum Surgery</h3>
            <p className="text-clinic-gray text-sm mb-1">Professional periodontal treatment</p>
            <p className="text-clinic-purple font-bold text-lg mb-6">From $60</p>
            <button className="bg-clinic-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-clinic-purple hover:scale-105 transition-all duration-200">
              Add to Cart
            </button>
          </div>

          {/* Card 2 - Consultation */}
          <div className="group bg-clinic-card-2 rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg hover:shadow-clinic-purple/10">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-white shadow-md">
              <img
                src="/assets/generated/consultation-doctor.dim_600x700.png"
                alt="Get Consultation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-clinic-dark mb-2">Get Consultation</h3>
            <p className="text-clinic-gray text-sm mb-1">Expert dental advice & diagnosis</p>
            <p className="text-clinic-purple font-bold text-lg mb-6">Free First Visit</p>
            <a
              href="#consultation"
              className="bg-clinic-purple text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-clinic-purple-dark hover:scale-105 transition-all duration-200"
            >
              Explore
            </a>
          </div>

          {/* Card 3 - Tooth Extraction */}
          <div className="group bg-clinic-card-3 rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg hover:shadow-clinic-purple/10">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-white shadow-md">
              <img
                src="/assets/generated/tooth-extraction.dim_300x300.png"
                alt="Tooth Extraction"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-clinic-dark mb-2">Tooth Extraction</h3>
            <p className="text-clinic-gray text-sm mb-1">Safe & painless extraction</p>
            <p className="text-clinic-purple font-bold text-lg mb-6">From $40</p>
            <button className="bg-clinic-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-clinic-purple hover:scale-105 transition-all duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
