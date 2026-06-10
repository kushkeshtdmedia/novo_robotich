import { Bot, Heart, Bone, Brain, Eye, Activity, Scissors, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const generalSurgeries = [
  {
    title: 'Gallbladder Surgery',
    desc: 'Robotic cholecystectomy for gallstones with minimal scarring and faster recovery.',
    to: '/services/gallbladder-surgery',
    badge: 'Popular',
  },
  {
    title: 'Hernia Surgery',
    desc: 'Precision robotic hernia repair reducing recurrence and post-op pain.',
    to: '/services/hernia-surgery',
    badge: null,
  },
  {
    title: 'Appendix Surgery',
    desc: 'Minimally invasive robotic appendectomy for swift, safe appendix removal.',
    to: '/services/appendix-surgery',
    badge: null,
  },
  {
    title: 'Robotic Sleeve Gastrectomy',
    desc: 'Advanced weight-loss surgery with robotic precision and faster healing.',
    to: '/services/robotic-sleeve-gastrectomy',
    badge: null,
  },
];

const departments = [
  {
    icon: Bot,
    title: 'Robotic Surgery',
    description: 'Minimally invasive procedures powered by the latest da Vinci systems for complex abdominal and thoracic surgeries.',
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Robotic-assisted heart bypass and valve repairs with microscopic accuracy and faster recovery.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Smart implant technology and robotic knee/hip replacements for life-long durability.',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Cutting-edge neuro-robotic procedures for brain and spinal cord conditions with pinpoint accuracy.',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Laser-guided robotic eye surgeries for cataracts, retinal disorders, and vision correction.',
  },
  {
    icon: Activity,
    title: 'Oncology',
    description: 'Robotic tumor resection and minimally invasive cancer surgeries with precision targeting.',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Expertise</p>
          <h1 className="text-5xl font-black text-gray-900 mb-5">World-Class Services</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            From robotic surgery to empathetic recovery care — our departments are equipped with the latest medical technology to deliver the best outcomes.
          </p>
        </div>
      </section>

      {/* ── General Surgery quick links ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
              <Scissors size={18} className="text-teal-600" />
            </div>
            <div>
              <p className="text-xs text-teal-600 font-semibold uppercase tracking-widest">Explore</p>
              <h2 className="text-2xl font-black text-gray-900">General Surgery Procedures</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {generalSurgeries.map((s) => (
              <NavLink
                key={s.title}
                to={s.to}
                className="group relative bg-slate-50 hover:bg-teal-700 rounded-3xl p-7 border border-slate-100 hover:border-teal-700 transition-all duration-300 hover:shadow-xl hover:shadow-teal-700/20 hover:-translate-y-1 flex flex-col gap-3"
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {s.badge}
                  </span>
                )}
                <h3 className="font-black text-gray-900 group-hover:text-white text-base transition-colors">{s.title}</h3>
                <p className="text-gray-500 group-hover:text-teal-100 text-xs leading-relaxed flex-1 transition-colors">{s.desc}</p>
                <div className="flex items-center gap-1 text-teal-600 group-hover:text-yellow-400 text-xs font-semibold transition-colors mt-1">
                  View Procedure <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Departments grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Departments</p>
            <h2 className="text-3xl font-black text-gray-900">All Specialties</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group bg-white hover:bg-white hover:shadow-xl hover:shadow-gray-200/60 rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-teal-600 transition-colors duration-300">
                    <Icon size={22} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                  <button className="mt-5 text-teal-600 font-semibold text-sm flex items-center gap-1 transition-all hover:gap-2">
                    Learn More &rarr;
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
