import { defineType, defineField } from "sanity";

export default defineType({
	name: "aboutSection",
	title: "About Landing Section",
	type: "document",
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
			name: "image",
			title: "Image",
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
			name: "order",
			title: "Display Order",
			type: "number",
			description: "Order in which this section appears on the page.",
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "subtitle",
			media: "image",
		},
	},
});
