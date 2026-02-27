import { useState } from 'react';
import { useSubmitConsultation } from '../hooks/useQueries';
import { CheckCircle, Loader2 } from 'lucide-react';

const services = [
  'General Checkup',
  'Gum Surgery',
  'Tooth Extraction',
  'Orthodontics',
  'Teeth Whitening',
  'Dental Implants',
  'Emergency Care',
  'Pediatric Dentistry',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';
  if (!data.phone.trim()) errors.phone = 'Phone number is required';
  if (!data.service) errors.service = 'Please select a service';
  if (!data.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitConsultation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await mutation.mutateAsync(formData);
      setSubmitted(true);
    } catch {
      // error handled by mutation state
    }
  };

  return (
    <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-clinic-purple/10 via-clinic-light to-clinic-bg-end">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-clinic-dark mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto text-base leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours
            to confirm your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl shadow-clinic-purple/10 p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-clinic-dark mb-2">Consultation Booked!</h3>
                <p className="text-clinic-gray">
                  Thank you, {formData.name}! We'll contact you at {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="mt-6 text-clinic-purple font-semibold text-sm hover:underline"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-clinic-dark mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-clinic-dark placeholder-clinic-gray/60 focus:outline-none focus:ring-2 focus:ring-clinic-purple/40 transition-all duration-200 ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-clinic-border bg-clinic-bg-start'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-clinic-dark mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-clinic-dark placeholder-clinic-gray/60 focus:outline-none focus:ring-2 focus:ring-clinic-purple/40 transition-all duration-200 ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-clinic-border bg-clinic-bg-start'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-clinic-dark mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-clinic-dark placeholder-clinic-gray/60 focus:outline-none focus:ring-2 focus:ring-clinic-purple/40 transition-all duration-200 ${
                      errors.phone ? 'border-red-400 bg-red-50' : 'border-clinic-border bg-clinic-bg-start'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-clinic-dark mb-1.5">
                    Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-clinic-dark focus:outline-none focus:ring-2 focus:ring-clinic-purple/40 transition-all duration-200 appearance-none cursor-pointer ${
                      errors.service ? 'border-red-400 bg-red-50' : 'border-clinic-border bg-clinic-bg-start'
                    }`}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-clinic-dark mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your dental concern or question..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-clinic-dark placeholder-clinic-gray/60 focus:outline-none focus:ring-2 focus:ring-clinic-purple/40 transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-400 bg-red-50' : 'border-clinic-border bg-clinic-bg-start'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-clinic-purple text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-clinic-purple-dark hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-clinic-purple/30"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Book Free Consultation'
                  )}
                </button>

                {mutation.isError && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Doctor Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-clinic-purple/20 to-clinic-light rounded-3xl blur-2xl scale-110" />
              <img
                src="/assets/generated/consultation-doctor.dim_600x700.png"
                alt="Consultation Doctor"
                className="relative z-10 w-full max-w-sm rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-lg px-5 py-4">
                <p className="text-sm font-bold text-clinic-dark">Free First Consultation</p>
                <p className="text-xs text-clinic-gray mt-0.5">No hidden fees, ever.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
