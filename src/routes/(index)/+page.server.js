// TODO: retrieve data dynamically using pocketbase
export async function load() {
	const skills = [
		{
			name: "HTML 5",
			icon: "vscode-icons:file-type-html",
		},
		{
			name: "CSS",
			icon: "vscode-icons:file-type-css",
		},
		{
			name: "JavaScript",
			icon: "logos:javascript",
		},
		{
			name: "Svelte",
			icon: "logos:svelte-icon",
		},
		{
			name: "NodeJS",
			icon: "logos:nodejs",
		},
		{
			name: "Prisma",
			icon: "vscode-icons:file-type-light-prisma",
		},
		{
			name: "Git",
			icon: "logos:git-icon",
		},
		{
			name: "GNU/Linux",
			icon: "flat-color-icons:linux",
		},
	];

	const socials = [
		{
			name: "facebook",
			url: "/",
			icon: "logos:facebook",
		},
		{
			name: "twitter",
			url: "/",
			icon: "logos:twitter",
		},
		{
			name: "github",
			url: "/",
			icon: "fe:github",
			color: "#ffffff",
		},
	];

	const projects = [
		{
			name: "User Manager API",
			url: "https://github.com/Mr-M1M3/user-manager",
			description: `Fuga sunt sit adipisci. Ipsum deleniti odit maxime qui ut eos magnam ipsa sapiente. Vero tenetur dignissimos fugit vitae est et maiores. Dignissimos dolores accusamus qui occaecati nam. Aut molestias aperiam cum necessitatibus magnam natus.
 
                      Ea culpa rerum aut deleniti cupiditate consequatur. Et omnis modi saepe soluta voluptas eum labore. Suscipit nisi corrupti et voluptas explicabo officia debitis eos. Dicta dolor deserunt qui nemo expedita. Debitis voluptas qui consequuntur atque magnam velit rerum voluptatem. Alias necessitatibus aut corporis et quia aut odio.
 
                      Vel quam itaque. Praesentium perferendis sequi aut. Ea beatae nihil et magnam. Perferendis et voluptas aperiam.`,
		},
		{
			name: "JSON Hero",
			url: "https://github.com/Mr-M1M3/json-hero",
			description: `Sunt officiis quisquam sit aut provident. Et reprehenderit esse. Ea quia fugit. Pariatur labore est voluptatem accusantium.
 
                      Distinctio impedit vel sit nam fuga consectetur sunt. Quis eum repellat nam. Rerum neque harum quod. Quia natus repellendus ipsum illum deleniti.
 
                      Delectus nam et veniam qui pariatur et dolores. Necessitatibus sunt qui illum aut vitae nam autem. Voluptatem nam quis. Pariatur quidem dolores corrupti dolorem amet. Eligendi qui iste sit reiciendis itaque consequatur hic quia.`,
		},
	];
	return {
		skills,
		socials,
		projects,
	};
}
