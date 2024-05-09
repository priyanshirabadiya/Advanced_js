// const apiURL = "https://cat-fact.herokuapp.com/facts";

// const getData = async () => {
//   console.log("Getting data... Please wait...");
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// //   console.log(data[0].text);
// //   console.log(data[1].text);
// //   console.log(data[2].text);
// //   console.log(data[3].text);
// //   console.log(data[4].text);
// };

// getData();

const getData = async () => {
    console.log("Getting data... Please wait...");
    let response = await fetch('https://jsonplaceholder.typicode.com/comments');
    let data = await response.json();
    console.log(data);
    console.log(data[0].name);
}
getData();
