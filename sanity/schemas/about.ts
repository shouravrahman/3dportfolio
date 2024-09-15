import { defineType, defineField } from "sanity";

export default defineType({
	name: "aboutPage",
	title: "About Page",
	type: "document",
	fields: [
		defineField({
			name: "intro",
			title: "Introduction",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "subtitle",
					title: "Subtitle",
					type: "string",
				}),
				defineField({
					name: "description",
					title: "Description",
					type: "text",
				}),
				defineField({
					name: "buttonText",
					title: "Button Text",
					type: "string",
				}),
				defineField({
					name: "buttonLink",
					title: "Button Link",
					type: "url",
				}),
				defineField({
					name: "image",
					title: "Profile Image",
					type: "image",
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Alternative Text",
						},
					],
				}),
			],
		}),
		defineField({
			name: "aboutSections",
			title: "About Sections",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "title",
							title: "Title",
							type: "string",
						},
						{
							name: "content",
							title: "Content",
							type: "text",
						},
					],
				},
			],
		}),
		defineField({
			name: "skills",
			title: "Skills",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "name",
							title: "Skill Name",
							type: "string",
						},
					],
				},
			],
		}),
		defineField({
			name: "education",
			title: "Education",
			type: "object",
			fields: [
				defineField({
					name: "degree",
					title: "Degree",
					type: "string",
				}),
				defineField({
					name: "institution",
					title: "Institution",
					type: "string",
				}),
				defineField({
					name: "year",
					title: "Year",
					type: "string",
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "intro.title",
			subtitle: "intro.subtitle",
			media: "intro.image",
		},
	},
});
