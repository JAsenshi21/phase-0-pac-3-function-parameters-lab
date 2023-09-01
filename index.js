function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}


sayHelloTo('Joseph')

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

function introduction (name) {
  const output = `Hi, my name is ${name}.`
  return output 
}

function introductionWithLanguage (name , language) {
  const output = `Hi, my name is ${name} and I am learning to program in ${language}.`
  return output 
}

function introductionWithLanguageOptional (name , language = "JavaScript") {
    const output = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return output 
  }