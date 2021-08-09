module.exports = {
	siteMetadata: {
		siteUrl: "https://nilsnilk.github.io",
		title: "Nils Sundberg's Portfolio",
		author: "Nils Sundberg",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
			plugins: [
				{
				resolve: "gatsby-remark-images",
				options: {
					// It's important to specify the maxWidth (in pixels) of
					// the content container as this plugin uses this as the
					// base for generating different widths of each image.
					maxWidth: 420,
				},
				},
			],
			},
		},
	
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: `${__dirname}/src/pages`
			},
			__key: "pages",
		},
	],
};
