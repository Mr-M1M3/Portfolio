<script>
  // data received from server
  export let data;

  // import components
  import Header from "./components/Header.svelte";
  import Skills from "./components/Skills.svelte";
  import Projects from "./components/Projects.svelte";
  import Contact from "./components/Contact.svelte";

  // destructure data received from server
  const {skills, projects, socials} = data;
</script>

<Header />
<Skills data={skills} />
<Projects data={projects} />
<Contact data={socials}/>
