import Image from "next/image";
import Bmi from "@/components/Bmi";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import HeroSlides from "@/components/HeroSlides";
import * as I from "@/components/Icons";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { img } from "@/lib/images";
import { HAS_WA, SITE, contactLabel, directionsLink, mapEmbed, telLink, waProps } from "@/lib/site";

/* ---------------- Content (only facts we can stand behind) ---------------- */

const MARQUEE = ["Open 6 AM – 10:30 PM", "Air-conditioned", "Free weights", "Machines", "Treadmills", "Spin bikes", "Evening yoga", "Personal training", "Lockers"];

const FLOOR = [
  { src: img.webDumbbellRack, title: "Free weights", text: "Dumbbell racks, Olympic bars, plates and adjustable benches." },
  { src: img.machinesRed, title: "Machines", text: "Plate-loaded and pin machines for chest, back, shoulders and legs." },
  { src: img.cardioTreadmills3, title: "Cardio", text: "Treadmills, cross-trainers and bikes, all along the windows." },
  { src: img.webSpinLockers, title: "Spin bikes", text: "A row of spin bikes, with the member lockers right beside them." },
  { src: img.studio2, title: "Studio", text: "A separate mirrored room. Yoga runs here every evening, 8–9 PM." },
];

const GOALS = [
  { src: img.cardioTreadmills2, title: "Weight loss", text: "Cardio and circuits, plus simple food habits you can keep." },
  { src: img.machinesRed2, title: "Weight gain", text: "A split built around the big lifts, and eating enough to grow." },
  { src: img.webBenches, title: "Strength", text: "Learn the squat, bench and deadlift properly, then add weight." },
  { src: img.webCableStation, title: "Toning", text: "Machines and cables for shape and definition." },
  { src: img.studio1, title: "Yoga", text: "Mobility and stretching, every evening 8–9 PM." },
  { src: img.strengthWall, title: "Personal training", text: "One trainer, one plan, checking your form every session." },
];

const PLANS = [
  { name: "Monthly", len: "1 month" },
  { name: "Quarterly", len: "3 months" },
  { name: "Half-yearly", len: "6 months" },
  { name: "Yearly", len: "12 months", note: "Cheapest per month" },
];

const GALLERY: GalleryItem[] = [
  { src: img.floorWide, label: "Main floor", alt: "Main training floor", size: "wide" },
  { src: img.floorRig, label: "Rig", alt: "Functional rig", size: "tall" },
  { src: img.dumbbells, label: "Dumbbells", alt: "Dumbbell rack" },
  { src: img.cardioTreadmills, label: "Treadmills", alt: "Treadmills by the windows" },
  { src: img.strengthBench, label: "Strength", alt: "Strength bench", size: "tall" },
  { src: img.webFloorColor, label: "Machines", alt: "Machine floor with tyre" },
  { src: img.studio3, label: "Studio", alt: "LED-lit studio" },
  { src: img.cardioEllipticals2, label: "Cardio", alt: "Cross trainers and bikes", size: "wide" },
  { src: img.machinesRed, label: "Back & legs", alt: "Strength machines" },
  { src: img.webMachine, label: "Cable station", alt: "Selectorised machine" },
  { src: img.floorBenches, label: "Benches", alt: "Adjustable benches" },
  { src: img.strengthWall2, label: "Green wall", alt: "Strength area with green mural" },
];

const REVIEWS = [
  { name: "Mohd Kashif Malik", text: "Good equipment and a fully standard setup, including lockers. They maintain hygiene." },
  { name: "Nasir", text: "Best gym in Jamia Nagar." },
  { name: "Mohd Bilal", text: "Friendly staff." },
];

const FAQ = [
  ["Can I come and see the gym before joining?", "Yes. Walk in any time between 6 AM and 10:30 PM and someone at reception will show you around. No appointment needed."],
  ["What are the timings?", "6:00 AM to 10:30 PM. Sunday hours can be shorter, so call before coming on a Sunday."],
  ["How much is the membership?", "It depends on the plan and on any offer running that month. Call us or ask at reception for today's price."],
  ["I've never been to a gym. Is that okay?", "Yes. A trainer will show you how the equipment works and help with your form while you learn."],
  ["Do you have personal training?", "Yes, one-on-one with a certified trainer. Ask at reception for details."],
  ["Is there yoga?", "Yes, every evening from 8 to 9 PM in the studio."],
  ["Is it air-conditioned? Are there lockers?", "Yes to both."],
  ["What should I bring?", "Workout clothes, clean indoor shoes, a towel and a water bottle."],
];

/* ---------------- Helpers ---------------- */

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;
const ContactIcon = HAS_WA ? I.Chat : I.Phone;

function Head({ kicker, title, sub }: { kicker?: string; title: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="head">
      <div>
        {kicker && <p className="kicker fu">{kicker}</p>}
        <h2 className="h2 fu">{title}</h2>
      </div>
      {sub && <p className="head__sub fu">{sub}</p>}
    </div>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Nav />
      <Reveal />

      <main id="main">
        {/* HERO */}
        <section className="hero">
          <HeroSlides
            slides={[
              { src: img.heroDeadlift, alt: "Athlete gripping a loaded barbell for a deadlift" },
              { src: img.heroCurl, alt: "Muscular athlete doing a dumbbell curl" },
              { src: img.heroRopes, alt: "Two athletes training with battle ropes" },
              { src: img.heroBarbell, alt: "Loaded barbell on a dark gym floor" },
            ]}
          />
          <div className="hero__shade" />
          <div className="container hero__content">
            <p className="kicker fu">Thokar No. 6 · Shaheen Bagh · New Delhi</p>
            <h1 className="hero__title fu" style={d(0.08)}>Leave your <em>mark</em></h1>
            <p className="hero__sub fu" style={d(0.16)}>
              Strength, cardio and yoga in Shaheen Bagh. <span className="nowrap">Open daily, 6 AM – 10:30 PM.</span>
            </p>
            <div className="hero__ctas fu" style={d(0.24)}>
              <a href="#membership" className="btn btn--gold">See membership <I.Arrow /></a>
              <a className="btn btn--ghost" {...waProps("Hi Gym City! I have a question.")}><ContactIcon /> {contactLabel}</a>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__strip">
            <div className="marquee__track">
              {[0, 1].map((g) => (
                <div key={g} className="marquee__group">
                  {[...MARQUEE, ...MARQUEE].map((m, i) => (
                    <span key={i} className="marquee__item">{m}<i>✦</i></span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container about">
            <div className="about__text">
              <p className="kicker fu">About the gym</p>
              <h2 className="h2 fu">A full-size gym on<br />Thokar No. 6</h2>
              <p className="fu">
                Gym City is on Main Road, Shaheen Bagh, a short walk from Jasola Vihar Shaheen Bagh Metro.
                There&apos;s a strength floor with racks, benches and machines, treadmills and cross-trainers along the windows,
                a row of spin bikes, and a separate studio for the evening yoga class.
              </p>
              <p className="fu">
                If you&apos;re new, a trainer will show you around and teach you the basics. If you already train,
                you&apos;ll have the space and the equipment to train properly.
              </p>
              <dl className="facts fu">
                <div><dt>{SITE.rating} ★</dt><dd>{SITE.ratingCount} ratings on FITPASS</dd></div>
                <div><dt>6 AM – 10:30 PM</dt><dd>Open daily</dd></div>
                <div><dt>Air-conditioned</dt><dd>The whole floor</dd></div>
                <div><dt>Lockers</dt><dd>For members</dd></div>
              </dl>
            </div>
            <div className="about__grid">
              {([
                [img.floorBranding, "Main floor"],
                [img.dumbbells, "Dumbbells"],
                [img.cardioEllipticals, "Cardio"],
                [img.reception, "Reception"],
              ] as const).map(([src, cap], i) => (
                <figure key={cap} className="pop" style={d(i * 0.1)}>
                  <Image src={src} alt={cap} fill placeholder="blur" sizes="(max-width: 820px) 50vw, 25vw" />
                  <figcaption>{cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* THE FLOOR */}
        <section className="section section--alt" id="floor">
          <div className="container">
            <Head kicker="Facilities" title="What's on the floor" sub="All of these are real photos from inside Gym City." />
            <div className="rail">
              {FLOOR.map((z, i) => (
                <article key={z.title} className="zone pop" style={d(i * 0.06)}>
                  <div className="zone__img"><Image src={z.src} alt={z.title} fill placeholder="blur" sizes="(max-width: 820px) 80vw, 20vw" /></div>
                  <div className="zone__body">
                    <h3>{z.title}</h3>
                    <p>{z.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="rail__hint" aria-hidden="true">Swipe <I.Arrow /></p>
          </div>
        </section>

        {/* GOALS */}
        <section className="section" id="programs">
          <div className="container">
            <Head
              kicker="Training"
              title="Tell us your goal"
              sub="A trainer will set up a plan around it. Most members come in for one of these."
            />
            <div className="rail rail--goals">
              {GOALS.map((g, i) => (
                <article key={g.title} className="goal pop" style={d(i * 0.05)}>
                  <Image src={g.src} alt="" fill placeholder="blur" sizes="(max-width: 820px) 70vw, 33vw" />
                  <div className="goal__body">
                    <h3>{g.title}</h3>
                    <p>{g.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="rail__hint" aria-hidden="true">Swipe <I.Arrow /></p>
          </div>
        </section>

        {/* MEMBERSHIP */}
        <section className="section section--alt" id="membership">
          <div className="container membership">
            <div>
              <p className="kicker fu">Membership</p>
              <h2 className="h2 fu">Pick a plan</h2>
              <p className="fu">
                The longer the plan, the less you pay per month. Prices change with offers, so we don&apos;t list them here.
                Call us or ask at reception for today&apos;s price.
              </p>
              <p className="fu">Every plan includes the full gym floor, cardio, the studio and help from the floor trainers. Personal training is extra.</p>
              <a className="btn btn--gold fu" {...waProps("Hi Gym City! Please share membership prices.")}><ContactIcon /> Ask for prices</a>
            </div>
            <ul className="plans">
              {PLANS.map((p, i) => (
                <li key={p.name} className={`plan pop${p.note ? " plan--best" : ""}`} style={d(i * 0.06)}>
                  <div>
                    <h3>{p.name}</h3>
                    <span>{p.len}</span>
                  </div>
                  {p.note && <em>{p.note}</em>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section" id="gallery">
          <div className="container">
            <Head kicker="Gallery" title="Inside the gym" sub="Tap a photo to see it bigger." />
            <Gallery items={GALLERY} />
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section section--alt" id="reviews">
          <div className="container">
            <div className="reviews-head">
              <div>
                <p className="kicker fu">Reviews</p>
                <h2 className="h2 fu">What members say</h2>
              </div>
              <div className="score fu">
                <b>{SITE.rating}</b>
                <div><span className="stars" aria-label="5 stars">★★★★★</span><small>{SITE.ratingCount} ratings on FITPASS</small></div>
              </div>
            </div>
            <div className="reviews">
              {REVIEWS.map((r, i) => (
                <blockquote key={r.name} className="review pop" style={d(i * 0.08)}>
                  <span className="stars" aria-label="5 stars">★★★★★</span>
                  <p>{r.text}</p>
                  <footer>{r.name} <small>· FITPASS</small></footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* BMI */}
        <section className="section" id="bmi">
          <div className="container bmi">
            <div className="bmi__text">
              <p className="kicker fu">Free tool</p>
              <h2 className="h2 fu">BMI calculator</h2>
              <p className="fu">
                BMI compares your weight to your height. It&apos;s a rough guide, not a diagnosis. A trainer can help you set a proper target.
              </p>
              <ul className="bmi__legend fu">
                <li><i style={{ background: "#60a5fa" }} />Under <span>&lt; 18.5</span></li>
                <li><i style={{ background: "#22c55e" }} />Healthy <span>18.5 – 24.9</span></li>
                <li><i style={{ background: "#fbbf24" }} />Over <span>25 – 29.9</span></li>
                <li><i style={{ background: "#f97316" }} />Obese <span>30+</span></li>
              </ul>
            </div>
            <Bmi />
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--alt" id="faq">
          <div className="container faq-wrap">
            <div>
              <p className="kicker fu">FAQ</p>
              <h2 className="h2 fu">Common questions</h2>
              <p className="fu">Anything else? Just ask.</p>
              <a className="btn btn--ghost fu" {...waProps("Hi Gym City! I have a question.")}><ContactIcon /> {contactLabel}</a>
            </div>
            <div className="faq">
              {FAQ.map(([q, a]) => (
                <details key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="container contact__inner">
            <div className="contact__text">
              <p className="kicker fu">Visit</p>
              <h2 className="h2 fu">Come and see it</h2>
              <div className="info">
                <div className="info__item fu"><span>Address</span><p>{SITE.addressLines.map((l) => <span key={l} className="line">{l}</span>)}</p></div>
                <div className="info__item fu"><span>Timings</span><p>Daily, {SITE.hours}<small className="line">Yoga {SITE.yoga}. Sunday hours may vary.</small></p></div>
                <div className="info__item fu"><span>Phone</span><p><a className="tap" href={telLink}>{SITE.phoneDisplay}</a></p></div>
              </div>
              <div className="contact__ctas fu">
                <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="btn btn--gold"><I.Pin /> Get directions</a>
                <a className="btn btn--ghost" {...waProps("Hi Gym City! I'd like to join.")}><ContactIcon /> {contactLabel}</a>
              </div>
            </div>
            <div className="map pop">
              <iframe title="Gym City on Google Maps" src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Image src={img.logoLight} alt="Gym City: Leave Your Mark" width={130} />
            <p>Gym City, Main Road, Thokar No. 6, Shaheen Bagh, New Delhi.</p>
          </div>
          <nav aria-label="Footer">
            <a href="#about">About</a>
            <a href="#floor">Facilities</a>
            <a href="#membership">Membership</a>
            <a href="#gallery">Gallery</a>
            <a href="#bmi">BMI calculator</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer__contact">
            <a className="tap" href={telLink}><I.Phone /> {SITE.phoneDisplay}</a>
            <a className="tap" href={directionsLink} target="_blank" rel="noopener noreferrer"><I.Pin /> Directions</a>
            <p><I.Clock /> {SITE.hours}</p>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} Gym City, Shaheen Bagh</span>
        </div>
      </footer>
    </>
  );
}
