function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
  )


//   The below does the same thing, but using a function 
// expression would not allow a code block to be executed prior to the declaration
  let ask = (question, yes, no) => {
    confirm(question) ? yes():
    no()
  };
  ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")

  );
