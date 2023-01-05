<script>
  export let type = [];
  export let delay = 1000;
  type.forEach((v) => {
    v = v.toString();
  });
  let index = 0;
  let typingIndex = 0;
  let increase = true;
    function startType(ms) {
      setInterval(() => {
          if(type[index].charAt(typingIndex + 1) && increase){
              typingIndex += 1;
          }else{
              increase = false;
              if(type[index].charAt(typingIndex -1) && !increase){
                  typingIndex -= 1;
              }else{
                typingIndex -= 1;
                  increase = true;
                  if(type[index + 1]){
                      index += 1;
                  }else{
                      index = 0;
                  }
              }
          }
      }, ms);
    }
    startType(Number(delay));
</script>
<span class="inline-flex justify-center items-center">{type[index].slice(0, typingIndex + 1)} <span class="blink inline relative font-normal">_</span></span>

<style>
  .blink{
    animation-name: blink;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: .5s;
  }
  @keyframes blink{
    from{
      opacity: 0;
    }to{
      opacity: 1;
    }
  }
</style>
