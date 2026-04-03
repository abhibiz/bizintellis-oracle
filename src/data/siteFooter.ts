/** Footer contact & social — replace URLs and phone with production values. */
export const siteFooterContact = {
	email: "oracle-practice@bizintellis.com",
	phoneDisplay: "+1 (555) 000-0000",
	phoneTel: "+15550000000",
} as const;

export const siteFooterQuickLinks = [
	{ href: "/", label: "Home" },
	{ href: "/#audience", label: "Approach" },
	{ href: "/#services", label: "Services" },
	{ href: "/services", label: "All services" },
	{ href: "/contact", label: "Contact" },
] as const;

export const siteFooterSocial = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/bizintellis",
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/@bizintellis",
	},
	{
		label: "X",
		href: "https://x.com/bizintellis",
	},
] as const;
