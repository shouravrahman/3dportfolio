import { type SchemaTypeDefinition } from "sanity";

import blockContent from "../schemas/blockContent";
import category from "../schemas/category";
import post from "../schemas/post";
import snippet from "../schemas/snippet";
import legal from "../schemas/legal";
import tags from "../schemas/tags";
import about from "../schemas/about";
import contact from "../schemas/contact";
import aboutLanding from "../schemas/aboutLanding";
import globeSection from "../schemas/globeSection";
import projects from "../schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		legal,
		category,
		contact,
		blockContent,
		tags,
		snippet,
		about,
		aboutLanding,
		globeSection,
		projects,
	],
};
