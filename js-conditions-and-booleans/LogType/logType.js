const data = [1, 2, 3];

switch (typeof data) {
  case "undefined":
    console.log(typeof data + "!");
    break;
  case "null":
    console.log(typeof data + "!");
    break;
  case "number":
    console.log(typeof data + "!");
    break;
  case "not a number":
    console.log(typeof data + "!");
    break;
  case "string":
    console.log(typeof data + "!");
    break;
  case "boolean":
    console.log(typeof data + "!");
    break;
  case "bigint":
    console.log(typeof data + "!");
    break;
  case "function":
    console.log(typeof data + "!");
    break;
  case "object":
    console.log(typeof data + "!");
    break;
  case "array":
    console.log(typeof data + "!");
    break;
  default:
    console.log("I have no idea!");
    break;
}
