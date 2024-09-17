import { postsQuery, allProjectsQuery } from "@/sanity/lib/queries";
import { createClient } from "next-sanity";
import clientConfig from "@/utils/sanity-client-config";
import { WEBSITE_URL } from "@/constants/appSetup";

export default async function sitemap() {
	const baseUrl = WEBSITE_URL;

	const posts = await createClient(clientConfig).fetch(postsQuery);

	const postUrls = posts?.map(
		(post: { slug: { current: any }; updatedAt: any }) => ({
			url: `${baseUrl}/post/${post?.slug?.current}`,
			lastModified: post?.updatedAt,
		})
	);
	const portfolio = await createClient(clientConfig).fetch(allProjectsQuery);

	const portfolioUrls = portfolio?.map(
		(post: { slug: { current: any }; updatedAt: any }) => ({
			url: `${baseUrl}/portfolio/${post?.slug?.current}`,
			lastModified: post?.updatedAt,
		})
	);

	return [
		{ url: baseUrl, lastModified: new Date() },
		{ url: `${baseUrl}/about`, lastModified: new Date() },
		{ url: `${baseUrl}/contact`, lastModified: new Date() },
		{ url: `${baseUrl}/blogs`, lastModified: new Date() },
		{ url: `${baseUrl}/portfolio`, lastModified: new Date() },
		...postUrls,
		...portfolioUrls,
	];
}

export const dynamic = "force-dynamic";
