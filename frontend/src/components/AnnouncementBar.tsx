export default function AnnouncementBar() {
  return (
    <div className="announcement-bar fixed top-0 left-0 right-0 z-50 bg-clinic-purple text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        <span className="font-medium">🦷 Available for Free Dental Consultation — Limited Slots!</span>
        <a
          href="#consultation"
          className="hidden sm:inline-flex items-center gap-1 bg-white text-clinic-purple font-semibold px-3 py-1 rounded-full text-xs hover:bg-clinic-light transition-colors duration-200"
        >
          Book Now →
        </a>
      </div>
    </div>
  );
}
