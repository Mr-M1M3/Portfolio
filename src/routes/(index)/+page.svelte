<script>
  // data received from server
  export let data;

  // import components
  import Header from "./components/Header.svelte";
  import Skills from "./components/Skills.svelte";
  import Projects from "./components/Projects.svelte";
  import Contact from "./components/Contact.svelte";

  // destructure data received from server
  // const {skills, projects, socials} = data;
  const skills = data.skills.items;
  const projects = data.projects.items;
  const socials = data.socials.items;
</script>
<svelte:head>
  <title>Mr-M1M3 - A Computer Addicted</title>
</svelte:head>
<Header />
<Skills data={skills} />
<Projects data={projects} />
<Contact data={socials}/>
