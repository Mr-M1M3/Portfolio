<script context="module">
  export async function load({fetch}){
    const skills = [{
      name: 'HTML 5',
      icon: 'vscode-icons:file-type-html'
    },{
      name: 'CSS',
      icon: 'vscode-icons:file-type-css'
    },{
      name: 'JavaScript',
      icon: 'logos:javascript'
    },{
      'name': 'Svelte',
      'icon': 'logos:svelte-icon'
    },{
      name: 'NodeJS',
      icon: 'logos:nodejs'
    }, {
      name: 'Prisma',
      icon: 'vscode-icons:file-type-light-prisma'
    }, {
      name: 'Git',
      icon: 'logos:git-icon'
    },{
      name: 'GNU/Linux',
      icon: 'flat-color-icons:linux'
    }]

    const socials = [{
      name: 'facebook',
      url: '/',
      icon: 'logos:facebook'
    },{
      name: 'twitter',
      url: '/',
      icon: 'logos:twitter'
    }, {
      name: 'github',
      url: '/',
      icon: 'logos:github-octocat'
    }
  ]
      return {
          status: 200,
          props:{
              skills,
              socials
          }
      }
  }
</script>
<script>
  export let skills = [];
  export let socials = [];
  import Header from "$lib/components/Header.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>
<Header data="{socials}"/>
<Skills data="{skills}"/>