// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve("!!Successfully");
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }

// getWeatherData();

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Your data is = ", dataId);
//         resolve("Data fetched successfully!!");
//       }, 2000);
//     });
//   }


function getData(daatid){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("your data is :" , daatid);
            resolve('success');
        },1000);
    })
}

async function getInfo(){
    console.log('daat is fetching...');
    await getData(1);
    console.log('daat is fetching...');
    await getData(2);
    console.log('daat is fetching...');
    await getData(3);
}

getInfo();












  
//   async function getInfo() {
//     console.log("\nGetting data 1...");
//     await getData(1);
//     console.log("\nGetting data 2...");
//     await getData(2);
//     console.log("\nGetting data 3...");
//     await getData(3);
//     console.log("\nGetting data 4...");
//     await getData(4);
//   }
  
//   getInfo();