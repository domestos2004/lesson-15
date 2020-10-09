function start(){

  let user = {
    name: "Alex"
  };

  let user2 = {
    age: 15
  };

  let user3 = {
    height: 185
  };

  let user4 = {
    place: "Maribor"
  };

  let user5 = {
    name: "Nikita"
  };

  Object.assign(user, user2, user3, user4, user5);

  for(let key in user){
    console.log(user[key]);
  }

  let userClone = Object.assign({}, user);
  for(let key in userClone){
    console.log(userClone[key]);
  }

  let userJson = JSON.stringify(user);
  console.log(userJson);

  let user0 = JSON.parse(userJson);
  console.log(user0.name);
  console.log(user0.age);
  console.log(user0.height);
  console.log(user0.place);

  var saying = new Map();
  saying.set("Alex", "+2394868").set("Veno", "+4754849").set("Vasija", "+437997");
  for(let [key,value] of saying){
    console.log(key + " is " + value);
  }

}
