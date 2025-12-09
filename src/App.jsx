import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0E12] text-[#E6EEF3] font-sans">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Keval Kathiriya</h1>
          <p className="text-sm mt-1 text-slate-300">
            Business Intelligence Analyst • Data Analyst
          </p>
        </div>

        <nav className="flex items-center gap-5 mt-4 md:mt-0">
          <a
            href="/Keval Kathiriya Data Analyst.pdf"
            download
            className="px-4 py-2 bg-[#00B8FF] text-black font-medium rounded-md hover:brightness-90 transition"
          >
            📄 Download Resume
          </a>
          <a
            href="https://github.com/kevalkathiriya4211"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#00B8FF] hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/keval-kathiriya/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#00B8FF] hover:underline"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-10 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Data. Insights. Intelligence.
            </h2>
            <p className="mt-6 text-slate-300 max-w-xl leading-relaxed">
              I’m Keval Kathiriya — a Business Intelligence & Data Analyst
              building production-ready dashboards in Power BI and Excel. I
              transform raw data into clear business insights and interactive
              dashboards to drive decisions.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="/Keval Kathiriya Data Analyst.pdf"
                download
                className="px-5 py-3 rounded-md bg-[#00B8FF] text-black font-medium hover:brightness-95 transition"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-5 py-3 rounded-md border border-slate-700 text-slate-200 hover:border-slate-500"
              >
                View Projects
              </a>
            </div>

            <div className="mt-6 flex gap-4 text-sm text-slate-400">
              <span>📍 Surat, India</span>
              <span>✉️ kathiriyakeval24@gmail.com</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#07101a] to-[#071a22] rounded-xl p-3 shadow-xl border border-slate-800">
              <img
                src="/assets/metaads.PNG"
                alt="Portfolio Preview"
                className="w-full rounded-md"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-[#07121a] px-4 py-2 rounded-md border border-slate-800 shadow-md">
              <p className="text-xs text-slate-400">Featured Project</p>
              <p className="text-sm font-semibold text-[#00B8FF]">
                Meta Ads Performance Dashboard
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          <p className="text-slate-400 mb-8">
            Selected dashboards and analytics projects with complete
            documentation on GitHub.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mobile Sales Dashboard */}
            <ProjectCard
              image="/assets/mobileSales.PNG"
              title="Mobile Sales Performance & Insights Dashboard"
              desc="An interactive Power BI dashboard that visualizes mobile sales performance using city-wise insights, monthly trends, customer ratings, and payment behavior analysis."
              link="https://github.com/kevalkathiriya4211/Sales-Data-Analysis.git"
              tool="Power BI"
            />


            {/* Blinkit Dashboard */}
            <ProjectCard
              image="/assets/blinkit.PNG"
              title="Blinkit Sales & Outlet Performance"
              desc="Excel-based dashboard analyzing outlet tier performance, category contribution and sales trends."
              link="https://github.com/kevalkathiriya4211/Blinkit-Excel-Analysis"
              tool="Excel"
            />

            {/* Credit Card Dashboard */}
            <ProjectCard
              image="/assets/creditcard.PNG"
              title="Credit Card Customer Revenue Insights"
              desc="Power BI dashboard for customer segmentation, revenue trends and high-value targeting."
              link="https://github.com/kevalkathiriya4211/Credit-Card-Data-Analysis"
              tool="Power BI"
            />

            {/* Meta Ads Dashboard */}
            <ProjectCard
              image="/assets/metaads.PNG"
              title="Meta Ads Performance Dashboard"
              desc="Combined Facebook & Instagram analysis with ROAS, funnel and audience insights."
              link="https://github.com/kevalkathiriya4211/Facebook-Instagram-AD-Data-Analysis"
              tool="Power BI"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <SkillBar name="Excel" level={5} />
              <SkillBar name="Power BI" level={4} />
              <SkillBar name="SQL" level={3} />
              <SkillBar name="Python" level={2} />
            </div>
            <div className="space-y-4">
              <SkillBar name="Data Cleaning" level={5} />
              <SkillBar name="Visualization" level={4} />
              <SkillBar name="Business Analysis" level={3} />
              <SkillBar name="AI Tools (ChatGPT, Gemini)" level={5} />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            I’m an aspiring Business Intelligence Analyst with expertise in
            Power BI, Excel and SQL. I build dashboards that help teams make
            data-driven decisions — from marketing ROAS to customer revenue
            analysis. I combine technical skills with business thinking to
            deliver measurable outcomes.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F1418] p-6 rounded-lg border border-slate-800">
              <h4 className="font-semibold mb-2">Get in touch</h4>
              <p className="text-slate-400 text-sm mb-4">
                Email me at{" "}
                <a
                  href="mailto:kathiriyakeval24@gmail.com"
                  className="text-[#00B8FF]"
                >
                  kathiriyakeval24@gmail.com
                </a>
              </p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>📍 Surat, India</li>
                <li>
                  🔗{" "}
                  <a
                    href="https://github.com/kevalkathiriya4211"
                    className="text-[#00B8FF]"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  🔗{" "}
                  <a
                    href="https://www.linkedin.com/in/keval-kathiriya/"
                    className="text-[#00B8FF]"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <form
              action="https://formsubmit.co/kathiriyakeval24@gmail.com"
              method="POST"
              className="bg-[#0F1418] p-6 rounded-lg border border-slate-800 space-y-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="Portfolio Contact Message from Keval Analytics"
              />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-3 rounded bg-[#0b1012] border border-slate-800"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-3 rounded bg-[#0b1012] border border-slate-800"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 rounded bg-[#0b1012] border border-slate-800 h-32"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded bg-[#00B8FF] text-black font-medium hover:brightness-95 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Keval Kathiriya</span>
          <span>Made with ❤️ by Keval Kathiriya</span>
        </div>
      </footer>
    </div>
  );
}

// 💡 Reusable Components
function ProjectCard({ image, title, desc, link, tool }) {
  return (
    <article className="bg-[#0F1418] rounded-lg overflow-hidden border border-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover border-b border-slate-800"
      />
      <div className="p-4">
        <h4 className="font-semibold text-[#00B8FF]">{title}</h4>
        <p className="mt-2 text-sm text-slate-400">{desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#00B8FF] hover:underline"
          >
            View on GitHub
          </a>
          <span className="text-xs text-slate-500">{tool}</span>
        </div>
      </div>
    </article>
  );
}

function SkillBar({ name, level }) {
  const width = `${(level / 5) * 100}%`;
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-slate-500">{level}/5</span>
      </div>
      <div className="mt-2 bg-[#071219] h-3 rounded overflow-hidden border border-slate-800">
        <div
          className="h-3 rounded"
          style={{
            width,
            background: "linear-gradient(90deg, #00B8FF, #00E5FF)",
          }}
        />
      </div>
    </div>
  );
}
