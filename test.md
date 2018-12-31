## Don't use callbacks

Use the alternatives: promises or await/async.

When in doubt, prefer await/async.

Await/async is newer and easier to use.

## Learning about async/await

Consider you need to make some API calls, for your 301 final project.

Each API call takes 10 seconds to process (for some reason), and you need to make 50 api calls. You have a very complicated 301 project.

If these requests were sent in synchronously the time to compute would lbe 50 * 10 seconds === 500 seconds, or 8 minutes. Let's assume you need to send this data to the user. If your page took 8 minutes to display data you would never get VC funding.

So obviously we need to send out all 50 requests at the same time. If we could successfully do this our page load could be as low as 10 seconds! (we'll assume you don't need information from one API call to make another).

However we do need to wait until we get all 50 responses back because lets say we need to do something with them before we send that data to the user. Our 10s page load time will still be atrocious but you get the idea.

We google around and find that there's something called async/await and it solves this exact problem. Yay!

Lets say our super long API call is this function:
```JavaScript
const tenSecondAPIcall = function(url){
    
    waitFor10Seconds();
}
```

To call this 50 times we do this:
```JavaScript
for (i = 0; i < 50; i++){
    tenSecondAPIcall();
}
var makeTheCalls = async function() {
  let data = [];

  tenSecondAPIcall(url);

  return data;
}
```
