import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
	name: "globeSection",
	title: "Globe Section",
	type: "document",
	fields: [
		defineField({
			name: "globeImageUrl",
			title: "Globe Image URL",
			type: "url",
			description: "URL for the globe image.",
			validation: (Rule) =>
				Rule.required().uri({ scheme: ["http", "https"] }),
		}),
		defineField({
			name: "bumpImageUrl",
			title: "Bump Image URL",
			type: "url",
			description: "URL for the bump image (texture).",
			validation: (Rule) =>
				Rule.required().uri({ scheme: ["http", "https"] }),
		}),
		defineField({
			name: "labelsData",
			title: "Labels Data",
			type: "array",
			of: [
				defineArrayMember({
					type: "object",
					fields: [
						defineField({
							name: "lat",
							title: "Latitude",
							type: "number",
							validation: (Rule) =>
								Rule.required().min(-90).max(90),
						}),
						defineField({
							name: "lng",
							title: "Longitude",
							type: "number",
							validation: (Rule) =>
								Rule.required().min(-180).max(180),
						}),
						defineField({
							name: "text",
							title: "Label Text",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "color",
							title: "Label Color",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "size",
							title: "Label Size",
							type: "number",
							validation: (Rule) => Rule.required().min(1),
						}),
					],
				}),
			],
			description: "Data for labels displayed on the globe.",
		}),
		defineField({
			name: "headerText",
			title: "Header Text",
			type: "string",
			description: "Main header text for the globe section.",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "subText",
			title: "Subtext",
			type: "string",
			description: "Subtext for the globe section.",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "buttonLabel",
			title: "Button Label",
			type: "string",
			description: "Text for the button in the globe section.",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "buttonLink",
			title: "Button Link",
			type: "url",
			description: "URL for the button link.",
			validation: (Rule) =>
				Rule.required().uri({ scheme: ["http", "https"] }),
		}),
	],
	preview: {
		select: {
			title: "headerText",
			subtitle: "subText",
		},
	},
});
