import { defineType, defineField } from "sanity";

export default defineType({
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
		defineField({
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "galleryImages",
			title: "Gallery Images",
			type: "array",
			of: [{ type: "image", options: { hotspot: true } }],
		}),
		defineField({
			name: "videoUrl",
			title: "Video URL",
			type: "url",
			description: "URL to a video showcasing the project",
		}),
		defineField({
			name: "technologies",
			title: "Technologies",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "name",
							type: "string",
							title: "Technology Name",
						},
						{
							name: "icon",
							title: "Icon",
							type: "object",
							fields: [
								{
									name: "type",
									title: "Icon Type",
									type: "string",
									options: {
										list: [
											{
												title: "React Icon",
												value: "reactIcon",
											},
											{
												title: "Image URL",
												value: "imageUrl",
											},
											{ title: "SVG", value: "svg" },
										],
										layout: "radio",
									},
								},
								{
									name: "value",
									title: "Icon Value",
									type: "string",
									description:
										"React Icon name, Image URL, or inline SVG",
								},
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "features",
			title: "Features",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "title",
							type: "string",
							title: "Title",
						}),
						defineField({
							name: "description",
							type: "text",
							title: "Description",
						}),
						defineField({
							name: "icon",
							title: "Icon",
							type: "object",
							fields: [
								{
									name: "type",
									title: "Icon Type",
									type: "string",
									options: {
										list: [
											{
												title: "React Icon",
												value: "reactIcon",
											},
											{
												title: "Image URL",
												value: "imageUrl",
											},
											{ title: "SVG", value: "svg" },
										],
										layout: "radio",
									},
								},
								{
									name: "value",
									title: "Icon Value",
									type: "string",
									description:
										"React Icon name, Image URL, or inline SVG",
								},
							],
						}),
					],
				},
			],
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent", // Assuming you have a blockContent type defined
		}),
		defineField({
			name: "liveSiteUrl",
			title: "Live Site URL",
			type: "url",
		}),
		defineField({
			name: "githubUrl",
			title: "GitHub URL",
			type: "url",
		}),
	],
});
