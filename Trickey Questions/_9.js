var test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 2000);
});

test
  .finally(() => {
    console.log("data call....");
  })
  .then((data) => {
    console.log("resolve", data);
  })
  .catch((error) => {
    console.log("reject", error);
  });

// finally always run .
