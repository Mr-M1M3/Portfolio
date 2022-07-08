<script>
  export let type = [];
  export let delay = 1000;
  type.forEach((v) => {
    v = v.toString();
  });
  let index = 0;
  let typing = "";
  let typingIndex = 0;
  let increase = true;
    function startType(sec) {
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
      }, sec);
    }
    startType(Number(delay));
</script>
<span class="inline-flex flex-col justify-center items-center">{type[index].slice(0, typingIndex + 1)}|</span>
