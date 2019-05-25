export default (input) => {
  try {
    return encodeURI(input);
  } catch (error) {
    console.log(error);
  }
}