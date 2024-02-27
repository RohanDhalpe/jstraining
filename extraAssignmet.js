const tasks = [
  function() {
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve("Chopping done");
  }, 1000);
  });
  },
  function() {
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve("Baking done");
  }, 2000);
  });
  },
  function() {
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve("Serving done");
  }, 1000);
  });
  },
  function() {
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve("Eating done");
  }, 1000);
  });
  }
  ];
  
  async function completeTask(tasks){
    const response = [];
    for (const task of tasks) {
      const data = await task();
      response.push(data);
    }
    return response;
  };

  completeTask(tasks).then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err)
  })
  // Output : [ 'Chopping done', 'Baking done', 'Serving done', 'Eating done' ]