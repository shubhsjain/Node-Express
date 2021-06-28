// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmiter = require("events");

const customEmiter = new EventEmiter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmiter.on("response", (name, id) => {
  console.log(`data recieved ${name} with id: ${id}`);
});
customEmiter.on("response", () => {
  console.log(`we can have as many function as we want`);
});

customEmiter.emit("response", "Jhon", 34);
// THE ORDER MATTERS , WE FIRST LISTEN FOR EVENT AND THEN EMIT IT. NOT THE OTHER WAY, ALSO WE CAN PASS THE ARGUMENTS WHILE WE ARE EMITTIN  THE EVENT
