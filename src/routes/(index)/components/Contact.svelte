<script>
  import Icon from "@iconify/svelte";
  export let data = [];
</script>

<section class="px-5 py-3" id="contact">
  <h1 class="text-4xl lg:text-5xl text-s-primary my-4 text-center font-secondary md:hidden">Reach Out To Me</h1>
  <div class="contacts-container grid grid-cols-1 place-items-center md:grid-cols-2 md:place-items-center">
    <figure class="max-w-xs h-full flex justify-center items-center flex-col">
      <img src="/images/me.jpg" alt="" class="rounded-full border-8 border-s-primary" data-aos="zoom-in"/>
      <figcaption class="text-white font-bold text-lg my-3 text-centers md:hidden">
        <p class="flex justify-center items-center">
          "It's not a bug <span
            class="flex justify-center items-center mx-2 text-red-600"
            ><i class="text-xl"><Icon icon="tabler:bug-off" /></i><i>!</i></span
          > It's a feature"
        </p>
      </figcaption>
    </figure>
    <div class="social-list h-full flex flex-col justify-between items-center">
        <h1 class="text-4xl lg:text-5xl text-s-primary my-4 text-center hidden md:block">Reach Out To Me</h1>
        
        <div class="texts">
            <p class="hidden justify-center items-center text-white font-bold text-2xl my-3 text-centers md:flex flex-wrap">
                "It's not a bug <span
                  class="flex justify-center items-center mx-2 text-red-600"
                  ><i class="text-xl"><Icon icon="tabler:bug-off" /></i><i>!</i></span
                > It's a feature"
              </p>
            <p class="text-lg text-white my-3 text-center">Liked my works? Stay Connected.</p>
        </div>
        <ul class="socials flex justify-center items-center">
          {#each data as social}
            <li data-aos="zoom-out">
              <a
                href={social.url}
                class="flex flex-col justify-center items-center mx-2"
              >
                <span
                  class="text-3xl md:text-4xl"
                  style={social.color ? `color:${social.color}` : ""}
                  ><Icon icon={social.icon} /></span
                >
                <span class="text-white capitalize inline-block my-1"
                  >{social.name}</span
                >
              </a>
            </li>
          {/each}
        </ul>
    </div>
  </div>

  <!-- <figure>
    <img src="" alt="">
  </figure> -->
</section>

<style>
    .contacts-container{
        direction: rtl;
    }
    .contacts-container > *{
        direction: ltr;
    }
</style>