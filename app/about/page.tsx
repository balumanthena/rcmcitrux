export default function About() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 font-body max-w-5xl mx-auto">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display text-primary font-bold mb-4">
          About Us
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We’re on a mission to simplify medical coding and revenue cycle management for healthcare providers across the nation.
        </p>
      </header>

      {/* Content Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mb-6 text-gray-700 leading-relaxed">
            RCM Health Service is dedicated to delivering efficient and accurate medical coding
            solutions for healthcare providers. Our systems are built to ensure compliance, reduce
            claim denials, and improve reimbursement speed.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            By combining innovative technology with industry expertise, we help streamline revenue
            cycle management, freeing providers to focus on patient care while we handle the
            complexities of billing and coding.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our commitment is to accuracy, efficiency, and partnership — working alongside you to
            achieve operational excellence.
          </p>
        </div>

        {/* Optional Image */}
        <div className="flex justify-center">
          <img
            src="/images/about-team.jpg"
            alt="RCM Health Service Team"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>
    </main>
  );
}
