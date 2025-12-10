import { JsonLd } from "@/components/seo/JsonLd";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a live-edge slab?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A live-edge slab is a solid piece of wood that keeps the tree’s natural edge instead of a straight, machine-cut side. Each slab has its own shape, grain pattern, and character, which means no two pieces are ever identical."
                }
            },
            {
                "@type": "Question",
                "name": "Are your slabs kiln-dried?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our slabs are professionally kiln-dried to a stable moisture content before they’re ready for sale or finishing. Kiln-drying helps minimize movement, cracking, and warping over time."
                }
            },
            {
                "@type": "Question",
                "name": "Do you plane or sand the slabs before sale?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most slabs are surfaced and flattened so you’re not starting from a rough sawmill cut. The exact prep level is listed on each product, such as flattened and planed or ready for final sanding and finish."
                }
            },
            {
                "@type": "Question",
                "name": "Can you cut, flatten, or finish the slab for me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. If you do not have access to a full workshop, we can handle flattening, dimensioning, sanding, epoxy work, and finishing for you. Submit a custom request with your project details and we’ll provide pricing and timelines."
                }
            },
            {
                "@type": "Question",
                "name": "What species do you carry?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our inventory rotates, but you’ll typically find Parota and other hardwoods known for their rich color, striking grain, and stability. Each product page lists the exact species and key characteristics."
                }
            },
            {
                "@type": "Question",
                "name": "Can I select the exact slab I will receive?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Each slab listing is photographed individually, and the dimensions on the product page match the exact slab you are purchasing. You are choosing the actual piece that will be shipped to you."
                }
            },
            {
                "@type": "Question",
                "name": "Can you build a full table from the slab?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer complete custom builds that include slab selection, flattening, finishing, and base installation. You can choose from a range of leg styles and finishes, and we handle the joinery and final assembly."
                }
            },
            {
                "@type": "Question",
                "name": "What is the typical lead time for custom furniture?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lead times vary with complexity and workload, but most custom builds take approximately 4–8 weeks from deposit to completion. We’ll confirm an estimated delivery window when you approve the final design."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer design help?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. If you’re not sure what size, species, or base style you need, our team can help you design the right piece for your space and recommend slabs, layouts, and finishes."
                }
            },
            {
                "@type": "Question",
                "name": "Do you work with contractors, designers, and builders?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we regularly work with trade partners on residential, commercial, and hospitality projects. Designers, builders, and contractors can submit project details for trade pricing and support."
                }
            },
            {
                "@type": "Question",
                "name": "Do you ship slabs and tables across the US?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we ship slabs and finished furniture throughout the continental United States. Smaller pieces ship via parcel carriers, while larger slabs and tables ship via freight on custom packaging or crates."
                }
            },
            {
                "@type": "Question",
                "name": "How much does shipping cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shipping cost depends on the size, weight, and destination. You’ll see estimates at checkout for standard orders, and we provide freight quotes for oversized or custom pieces as part of your project proposal."
                }
            },
            {
                "@type": "Question",
                "name": "Can I pick up my slab locally in Texas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Local pickup is available from our Texas location by appointment. After you place your order, we’ll send pickup instructions and scheduling details."
                }
            },
            {
                "@type": "Question",
                "name": "Do you deliver locally?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In many cases, we can arrange local delivery or in-home placement for finished tables and large pieces. Availability and pricing depend on your address and item size."
                }
            },
            {
                "@type": "Question",
                "name": "How long does shipping take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Once your slab or finished piece leaves our facility, transit time is typically 3–7 business days within the continental US, depending on location and carrier. Tracking details are provided when your order ships."
                }
            },
            {
                "@type": "Question",
                "name": "Do you accept returns on slabs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Because each slab is unique and often reserved for specific projects, all slab sales are generally final. If there is an issue with your order on arrival, contact us right away and we’ll review options."
                }
            },
            {
                "@type": "Question",
                "name": "What if my slab arrives damaged?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your slab arrives damaged, photograph the packaging and slab from several angles and contact us within 48 hours with your order number. We’ll file a claim with the carrier and arrange a repair, replacement, or other solution."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a warranty on finished tables?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our finished furniture includes a workmanship warranty against defects in joinery or construction under normal residential use for a defined period. Natural movement and minor color changes in solid wood are expected."
                }
            },
            {
                "@type": "Question",
                "name": "How do I maintain a live-edge slab?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Keep your slab clean with a soft cloth and mild, non-abrasive cleaner, avoid harsh chemicals and standing water, and maintain stable indoor humidity. Use trivets and coasters to protect the finish from heat and moisture."
                }
            },
            {
                "@type": "Question",
                "name": "Will the wood crack or move over time?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All real wood moves slightly with changes in temperature and humidity. Kiln-drying and proper construction help minimize this, but small checks or seasonal gaps are normal and part of the character of solid wood."
                }
            },
            {
                "@type": "Question",
                "name": "Can I place a live-edge table outdoors?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most of our slabs and finishes are intended for indoor use only. Outdoor exposure to sun, rain, and temperature swings will accelerate wear and can cause checking or warping."
                }
            },
            {
                "@type": "Question",
                "name": "How do I place a custom order?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can purchase a listed slab and add custom build services, or submit a project request with your dimensions and style preferences. We’ll recommend slabs and provide a detailed quote before moving forward."
                }
            },
            {
                "@type": "Question",
                "name": "Do you require a deposit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Custom projects typically require a non-refundable deposit to reserve the slab and secure production time, with the remaining balance due before delivery or pickup. Exact terms are outlined in your quote or invoice."
                }
            },
            {
                "@type": "Question",
                "name": "What payment methods are accepted?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept major credit cards and Shop Pay through our online checkout. For larger custom projects, we can also arrange payment by invoice through our secure online system."
                }
            },
            {
                "@type": "Question",
                "name": "Can I reserve a slab while deciding?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In some cases we can place a short hold on a slab or allow you to reserve it with a deposit while final design details are confirmed. Because slabs are one-of-a-kind, we recommend reaching out quickly about any piece you love."
                }
            },
            {
                "@type": "Question",
                "name": "Where do your slabs come from?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our slabs are sourced from responsible partners and mills that specialize in live-edge and specialty hardwoods. Many pieces come from responsibly harvested or salvaged trees given a second life as furniture."
                }
            },
            {
                "@type": "Question",
                "name": "Is your wood sustainably harvested?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We prioritize suppliers who follow sustainable forestry practices, local regulations, and ethical sourcing. When possible, we work with reclaimed, storm-fallen, or responsibly harvested material."
                }
            },
            {
                "@type": "Question",
                "name": "Do you finish the slabs with eco-friendly products?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use professional, durable finishes selected for both performance and indoor air quality, favoring low-VOC options where possible. If you have specific requirements or sensitivities, contact us to discuss available finish options."
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pb-20">
            <JsonLd data={faqData} />

            <section className="bg-slate-50 py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Everything you need to know about our slabs, custom builds, and shipping.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 max-w-3xl space-y-4">
                {faqData.mainEntity.map((item, index) => (
                    <details key={index} className="group border border-slate-200 rounded-lg p-6 open:bg-slate-50 transition-colors">
                        <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none text-slate-900">
                            {item.name}
                            <ChevronDown className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="mt-4 text-slate-600 leading-relaxed pr-8">
                            {item.acceptedAnswer.text}
                        </p>
                    </details>
                ))}
            </div>
        </div>
    );
}
