export type ServiceSlug =
	| "cloud-implementation"
	| "cloud-support"
	| "ai-enablement"
	| "redwood-adoption"
	| "report-services"
	| "cloud-advisory";

export interface Service {
	slug: ServiceSlug;
	title: string;
	short: string;
	/** Card / detail hero image under /public/images */
	coverImage: string;
	coverAlt: string;
	perspectives: {
		strategy: string[];
		platform: string[];
		economics: string[];
	};
	outcomes: string[];
	whatWeDo: string[];
}

export const services: Service[] = [
	{
		slug: "cloud-implementation",
		title: "Cloud Implementation",
		short:
			"Structured delivery from discovery through go-live—aligned to your roadmap, security posture, and operating model.",
		coverImage: "/images/service-implementation.jpg",
		coverAlt: "Server racks and data center corridor with cool lighting",
		perspectives: {
			strategy: [
				"Faster time-to-value on digital and operational initiatives.",
				"Clear governance: milestones, risks, and decision points you can brief leadership on.",
			],
			platform: [
				"Reference architectures, environments, and cutover plans that reduce rework.",
				"Integration patterns that keep core systems stable while you modernize.",
			],
			economics: [
				"Phased spend tied to outcomes—not open-ended scope.",
				"Visibility into run-rate implications before you commit.",
			],
		},
		outcomes: [
			"Predictable delivery with leadership-ready reporting",
			"Reduced surprises through disciplined testing and release management",
			"Teams enabled to operate what they inherit at go-live",
		],
		whatWeDo: [
			"Blueprinting, fit/gap, and technical design aligned to Oracle Cloud capabilities",
			"Configuration, migration, interfaces, and validation with clear acceptance criteria",
			"Hypercare and handover into steady-state support",
		],
	},
	{
		slug: "cloud-support",
		title: "Cloud Support",
		short:
			"Keep Oracle Cloud reliable after go-live: responsive operations, proactive tuning, and continuous improvement.",
		coverImage: "/images/service-support.jpg",
		coverAlt: "Analytics dashboard with charts on a monitor",
		perspectives: {
			strategy: [
				"Service levels that protect revenue and customer experience.",
				"A partner who treats incidents as business events—not just tickets.",
			],
			platform: [
				"Operational metrics, backlog hygiene, and root-cause discipline.",
				"Coverage models that match your complexity and compliance needs.",
			],
			economics: [
				"Predictable monthly run costs with transparent scope boundaries.",
				"Fewer escalations that drain internal leadership time.",
			],
		},
		outcomes: [
			"Stabilized operations with clear ownership and escalation paths",
			"Improved performance and reliability through ongoing tuning",
			"Roadmap alignment so enhancements don't destabilize production",
		],
		whatWeDo: [
			"L2/L3 support, release coordination, and environment management",
			"Monitoring, incident/problem management, and change governance",
			"Quarterly health reviews and optimization recommendations",
		],
	},
	{
		slug: "ai-enablement",
		title: "AI Enablement",
		short:
			"Practical AI on Oracle: use cases that clear security and data governance, integrated into real workflows.",
		coverImage: "/images/service-ai.jpg",
		coverAlt: "Abstract neural network and technology visualization",
		perspectives: {
			strategy: [
				"AI initiatives anchored to measurable productivity or revenue impact.",
				"Responsible rollout with clear guardrails and review gates.",
			],
			platform: [
				"Data readiness, model fit, and integration without shadow IT sprawl.",
				"Patterns that reuse Oracle investments rather than duplicating platforms.",
			],
			economics: [
				"Business cases with cost curves and benefit hypotheses you can track.",
				"Controls for vendor usage, licensing, and operational risk.",
			],
		},
		outcomes: [
			"Prioritized use-case portfolio tied to business value",
			"Secure patterns for data, identity, and monitoring",
			"Adoption plans that land change with teams—not slide decks",
		],
		whatWeDo: [
			"Use-case discovery, feasibility, and value framing",
			"Architecture for Oracle-anchored AI assistants, automation, and analytics",
			"Pilot execution, evaluation, and scale readiness",
		],
	},
	{
		slug: "redwood-adoption",
		title: "Redwood Adoption",
		short:
			"Move from classic UI to Redwood experiences with a plan for training, change, and safe rollout.",
		coverImage: "/images/service-redwood.jpg",
		coverAlt: "Person using a smartphone with a clean app interface",
		perspectives: {
			strategy: [
				"A modern experience that improves adoption and reduces friction for employees and partners.",
				"Change management that protects productivity during transition.",
			],
			platform: [
				"Feature readiness, personalization strategy, and extension approach.",
				"Testing coverage for critical flows before broad enablement.",
			],
			economics: [
				"Training and support costs modeled up front.",
				"Benefits tied to cycle-time and error reduction where measurable.",
			],
		},
		outcomes: [
			"Phased rollout with clear pilot groups and success criteria",
			"Role-based enablement and content that sticks",
			"Lower support burden through better UX alignment",
		],
		whatWeDo: [
			"Redwood readiness assessment and gap remediation",
			"Configuration, sandboxes, and test plans for priority journeys",
			"Training assets, office hours, and adoption analytics",
		],
	},
	{
		slug: "report-services",
		title: "Report Services",
		short:
			"Reporting and analytics that leadership trusts: definitions, distribution, and performance tuned for Oracle data.",
		coverImage: "/images/service-reporting.jpg",
		coverAlt: "Laptop showing spreadsheets and business charts",
		perspectives: {
			strategy: [
				"One version of the truth for operating reviews and leadership packs.",
				"Faster answers during quarter-end and planning cycles.",
			],
			platform: [
				"Governed semantic layers, security, and lineage for critical metrics.",
				"Performance engineering for heavy extracts and dashboards.",
			],
			economics: [
				"Close-quality reporting with reconciliations auditors expect.",
				"Forecast and variance narratives your controllers can stand behind.",
			],
		},
		outcomes: [
			"Standardized KPIs with documented definitions",
			"Reliable refresh windows and distribution to stakeholders",
			"Less manual spreadsheet risk in decision-making",
		],
		whatWeDo: [
			"Report rationalization, cataloging, and ownership models",
			"BI/analytics implementation aligned to Oracle reporting tools",
			"UAT, sign-off, and operational handover for production reporting",
		],
	},
	{
		slug: "cloud-advisory",
		title: "Cloud Advisory",
		short:
			"Executive-grade guidance: roadmap, business case, and program design before you sign contracts or lock scope.",
		coverImage: "/images/service-advisory.jpg",
		coverAlt: "High-rise office windows reflecting sky at sunset",
		perspectives: {
			strategy: [
				"Clarity on what transformation actually means for your organization.",
				"Decision-ready options with trade-offs—not generic market slides.",
			],
			platform: [
				"Target architecture, sequencing, and technical risk register.",
				"Vendor evaluation support grounded in delivery reality.",
			],
			economics: [
				"TCO/ROI models with explicit assumptions and sensitivity views.",
				"Financing and contract structures reviewed for long-term fit.",
			],
		},
		outcomes: [
			"Aligned steering committee cadence and success measures",
			"Roadmap that sequences value while controlling risk",
			"Stronger RFP and procurement outcomes",
		],
		whatWeDo: [
			"Current-state assessment and opportunity framing",
			"Business case, benefits map, and program governance design",
			"Architecture patterns, security posture, and migration approach",
		],
	},
];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}
