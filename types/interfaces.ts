import { PortableTextBlock } from "@portabletext/types";
import { IconType } from "react-icons";

interface ImageData {
	alt: string;
	asset: {
		_ref: string;
		_type: string;
	};
	_type: string;
}
export interface IAuthor {
	image?: ImageData;
	name: string;
	designation: string;
	bio: string;
	post?: any;
	slug: {
		current: string;
	};
}
export interface ITechStack {
	technologies: Technology[];
	liveSiteUrl?: string;
	githubUrl?: string;
}
export interface Feature {
	title: string;
	description: string;
	icon: Icon;
}
export interface IArticleHeaderData {
	author: IAuthor;
	_createdAt: Date;
	publishedAt: Date;
	title: string;
	tags: string[];
	thumbnail: string;
	meta_description: string;
	category?: string;
	mainImage: any;
	body: any;
	estimatedReadingTime: number;
}

export interface ISnippetHeaderData {
	date: string;
	title: string;
}

export interface ISnippet {
	path: string;
	preview: ISnippetHeaderData;
	seo?: iSEO;
}

export interface iArticle {
	path: string;
	featureArticle?: boolean;
	preview: IArticleHeaderData;
	seo?: iSEO;
}

export interface iSEO {
	title?: string;
	description?: string;
	keywords?: string;
	ogImage?: string;
	twitterHandle?: string;
	author?: string;
	url?: string;
}

export interface iNavLink {
	label: string;
	path: string;
	type?: string;
	newTab?: boolean;
}

export interface iNavSocials {
	link: string;
	icon: any;
}
export interface Icon {
	type: "reactIcon" | "imageUrl" | "svg";
	value: string;
}

export interface Technology {
	name: string;
	icon: Icon;
}

export interface Feature {
	title: string;
	description: string;
	icon: Icon;
}

export interface Project {
	_id: string;
	title: string;
	subtitle: string;
	slug: string;
	description: string;
	mainImage: string;
	galleryImages: string[];
	videoUrl?: string;
	technologies: Technology[];
	features: Feature[];
	body: PortableTextBlock[]; // You might want to define a more specific type for blockContent
	liveSiteUrl?: string;
	githubUrl?: string;
}
