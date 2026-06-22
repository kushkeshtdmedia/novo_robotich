import { ArrowRight, CheckCircle, Shield, Zap, Activity, Cpu, TrendingDown, HeartPulse, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Surgical diagram lives in /public/screen.png — replace the filename to swap the image.
const SURGICAL_DIAGRAM = '/screen.png';

const warningSigns = [
  { label: 'Feeling Full Quickly', desc: 'Early satiety even after small meals' },
  { label: 'Persistent Indigestion', desc: 'Chronic discomfort or burning throughout the day' },
  { label: 'Unexplained Weight Loss', desc: 'Significant unintentional drop in body mass' },
  { label: 'Abdominal Pain', desc: 'Persistent pain or pressure in the stomach region' },
];

const roboStats = [
  { value: '0.1mm', label: 'Surgical Precision' },
  { value: '3D+', label: 'Visualisation' },
  { value: '5×', label: 'Magnification' },
];

const procedures = [
  {
    title: 'Robotic Total Gastrectomy',
    desc: 'Complete removal of the stomach for advanced gastric cancers affecting the entire organ, restoring digestive continuity with reconstructed pathways.',
    bullets: ['Full organ removal', 'Lymph node dissection', 'Bowel reconstruction'],
  },
  {
    title: 'Partial Gastrectomy',
    desc: 'Strategic removal of the cancerous portion of the stomach, preserving healthy tissue and organ function wherever oncologically safe.',
    bullets: ['Organ-sparing approach', 'Faster recovery pathway', 'Preserved digestive function'],
  },
  {
    title: 'Wedge Gastric Resection',
    desc: 'Precise excision of localised tumours or lesions with minimal tissue disruption, ideal for early-stage growths at the edge of the stomach wall.',
    bullets: ['Minimal tissue disruption', '3 keyhole incisions'],
  },
];

const surgicalSteps = [
  {
    num: '1',
    title: 'Detailed Pre-Surgical Evaluation',
    desc: 'Up to 3D CT scan mapping of the tumour site and surrounding lymph node territory to plan each instrument movement in advance.',
  },
  {
    num: '2',
    title: 'Anaesthesia & Port Placement',
    desc: 'The patient receives general anaesthesia and five small (5–12mm) ports are created for robotic arms and a HD camera.',
  },
  {
    num: '3',
    title: 'Robot Docking',
    desc: "The da Vinci robotic system is docked to the patient's side, giving the surgeon a tremor-filtered, high-definition 3D view.",
  },
  {
    num: '4',
    title: 'Tumour Mobilisation & Closure',
    desc: 'Careful dissection, removal of tumour with clear margins, lymph node harvest, and meticulous closure for the best functional results.',
  },
];

const clinicalAdvantages = [
  { icon: Cpu, title: 'Superior 3D Vision', desc: 'Augmented imaging provides unmatched precision for intricate tumour dissection.' },
  { icon: Zap, title: 'Tremor-Free Precision', desc: 'Robotic filtration eliminates hand tremor for pinpoint accuracy.' },
  { icon: Activity, title: 'Less Blood Loss', desc: 'Careful dissection and sealing dramatically reduces intra-operative blood loss.' },
  { icon: TrendingDown, title: 'Faster Recovery', desc: 'Patients return to daily activities significantly sooner than open surgery.' },
  { icon: HeartPulse, title: 'Better Incision Healing', desc: 'Keyhole ports heal quickly with minimal scarring and reduced infection risk.' },
  { icon: Shield, title: 'Better Outcomes', desc: 'Higher complete resection rates and improved long-term survival statistics.' },
];

const recoverySteps = [
  { num: '01', icon: HeartPulse, title: 'Walking Within 24h', desc: 'Guided ambulation begins the next day to stimulate circulation and reduce clot risk.' },
  { num: '02', icon: Activity, title: 'Gradual Diet', desc: 'Starting with clear liquids, moving to solid foods over a structured six-week schedule.' },
  { num: '03', icon: TrendingDown, title: 'Return to Activity', desc: 'Most patients resume light activity within 2–3 weeks, full activity within 6–8 weeks.' },
];

export default function StomachSurgery() {
  const [activeProc, setActiveProc] = useState(0);

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ─── Hero ─── */}
      <section className="relative min-h-[540px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
            alt="Robotic Gastrectomy"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Precision Oncology
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              Advanced Robotic<br />
              <span className="text-teal-400">Gastrectomy</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
              Minimally invasive stomach cancer surgery with superior accuracy and faster recovery. Our cutting-edge robotic platform consistently produces aggressive outcomes — for meaningful and longer lives.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 group">
                Consult Our Expert
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-full transition-all duration-200">
                View Technology
              </button>
            </div>
          </div>

          {/* Precision badge */}
          <div className="hidden md:flex justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center w-56">
              <p className="text-5xl font-black text-yellow-400 mb-1">0.1<span className="text-2xl">mm</span></p>
              <p className="text-white text-sm font-semibold mb-1">Surgical Precision</p>
              <p className="text-slate-400 text-xs">Robotic instrument accuracy — unmatched by human hand</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Understanding Stomach Cancer ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Awareness</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Understanding<br />Stomach Cancer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gastric cancer arises from the lining of the stomach. Early detection dramatically improves outcomes, making awareness of warning signs critical for prompt intervention.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Robotic surgery allows surgeons to precisely target tumours while preserving surrounding healthy tissue — translating to better survival rates, fewer complications and faster recovery.
            </p>
            <a href="#" className="text-teal-600 text-sm font-semibold hover:underline flex items-center gap-1.5">
              Download Care Guide <ArrowRight size={13} />
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 bg-yellow-400 rounded-full" />
              <p className="font-bold text-gray-800 text-sm">Early Warning Signs</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {warningSigns.map((sign) => (
                <div key={sign.label} className="bg-slate-50 rounded-2xl p-5 border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mb-3" />
                  <p className="font-bold text-gray-900 text-sm mb-1">{sign.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{sign.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Robotic Solution ─── */}
      <section className="py-20 bg-teal-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-700/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-900/50 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">Innovation</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Robotic Solution</h2>
          <p className="text-teal-200 max-w-2xl mx-auto leading-relaxed mb-14 text-sm">
            Robotic Gastrectomy is a leap forward from tired laparoscopic surgery. Using the da Vinci surgical system, our surgeons operate with such precision that it is virtually impossible to provide a range of motions far exceeding those of the human hand.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {roboStats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl py-7 px-4 hover:bg-white/15 transition-colors">
                <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                <p className="text-xs text-teal-200 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Procedure Spectrum ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Procedures</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Procedure Spectrum</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveProc((p) => (p - 1 + procedures.length) % procedures.length)}
                className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-teal-500 hover:text-teal-600 flex items-center justify-center transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setActiveProc((p) => (p + 1) % procedures.length)}
                className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-teal-500 hover:text-teal-600 flex items-center justify-center transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {procedures.map((proc, i) => (
              <div
                key={proc.title}
                onClick={() => setActiveProc(i)}
                className={`rounded-3xl p-8 cursor-pointer transition-all duration-300 ${activeProc === i ? 'bg-teal-800 text-white shadow-2xl shadow-teal-800/25 scale-[1.02]' : 'bg-slate-50 hover:bg-slate-100 hover:shadow-md'}`}
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-5 ${activeProc === i ? 'bg-white/20' : 'bg-teal-100'}`}>
                  <Scissors size={17} className={activeProc === i ? 'text-white' : 'text-teal-600'} />
                </div>
                <h3 className={`font-black text-lg mb-3 ${activeProc === i ? 'text-white' : 'text-gray-900'}`}>{proc.title}</h3>
                <p className={`text-sm leading-relaxed mb-5 ${activeProc === i ? 'text-teal-100' : 'text-gray-500'}`}>{proc.desc}</p>
                <ul className="space-y-2">
                  {proc.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeProc === i ? 'bg-yellow-400' : 'bg-teal-400'}`} />
                      <span className={`text-xs font-medium ${activeProc === i ? 'text-teal-100' : 'text-gray-600'}`}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Surgical Journey ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">The Surgical Journey</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Surgical diagram — swap /public/screen.png to change image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
              <img
                src={SURGICAL_DIAGRAM}
                alt="Surgical diagram — Partial Gastrectomy"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-8">
              {surgicalSteps.map((step) => (
                <div key={step.num} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-11 h-11 bg-teal-600 group-hover:bg-teal-700 rounded-2xl flex items-center justify-center text-white font-black text-sm transition-colors shadow-md shadow-teal-600/25">
                    {step.num}
                  </div>
                  <div className="pt-1">
                    <p className="font-bold text-gray-900 mb-1">{step.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Clinical Advantages ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Why Robotic</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Clinical Advantages</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Why robotic surgery delivers consistently superior outcomes.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalAdvantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div key={adv.title} className="bg-slate-50 rounded-3xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-50 group">
                  <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={20} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="font-bold text-gray-900 mb-2">{adv.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Recovery Pathway ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Post Surgery</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Recovery Pathway</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">A structured, guided programme ensuring you heal safely and return to life fully.</p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-12 left-[18%] right-[18%] h-0.5 bg-teal-100 z-0" />
            {recoverySteps.map(({ num, icon: Icon, title, desc }, i) => (
              <div key={num} className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className={`w-24 h-24 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all ${i === 1 ? 'bg-teal-700 shadow-teal-700/30' : 'bg-white border-2 border-teal-100 hover:border-teal-400'}`}>
                  <Icon size={26} className={i === 1 ? 'text-white' : 'text-teal-600'} />
                  <span className={`text-xs font-bold mt-1 ${i === 1 ? 'text-teal-200' : 'text-teal-500'}`}>{num}</span>
                </div>
                <p className={`font-bold text-sm ${i === 1 ? 'text-teal-700' : 'text-gray-800'}`}>{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust & Expertise ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-2">Credentials</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Trust &amp; Expertise:<br />Why Choose Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Novo Robotic Hospital, every gastrectomy is guided by a senior oncological surgeon supported by an international-standard multidisciplinary team approach.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <p className="text-4xl font-black text-teal-700 mb-1">10,000<span className="text-2xl">+</span></p>
                <p className="text-xs text-teal-600 font-semibold">Surgeries Performed</p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <p className="text-4xl font-black text-teal-700 mb-1">98<span className="text-2xl">%</span></p>
                <p className="text-xs text-teal-600 font-semibold">Patient Satisfaction</p>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                'Board Certified Gastrointestinal & Oncological Surgeon',
                'NABH Accredited — meeting international surgical standards',
                'Your treatment journey through collaborative tumour board review',
                'Experienced in handling the most complex stomach cancer cases',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
                alt="Dr. Vikrant Sharma"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <Award size={18} className="text-teal-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Dr. Vikrant Sharma</p>
                  <p className="text-xs text-gray-500">Gastrointestinal Oncological Surgeon</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-teal-100/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-teal-800 rounded-3xl px-8 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-teal-700/40 rounded-full -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-900/50 rounded-full translate-x-1/4 translate-y-1/4" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Take the First Step Toward Recovery
              </h2>
              <p className="text-teal-200 max-w-lg mx-auto mb-10 leading-relaxed text-sm">
                Our specialists are available to evaluate your case and recommend the most effective robotic surgery pathway — for outcomes that go beyond surgery.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30">
                  Book Consultation
                </button>
                <button className="border border-white/40 text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-full transition-all duration-200">
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Local alias to avoid adding lucide-react Scissors twice (already imported above via Activity etc.)
function Scissors({ size, className }: { size: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}
