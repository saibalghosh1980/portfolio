class TestClass {
  #value;
  constructor(value) {
    this.#value = value;
  }

  printName = ()=> {
    console.log(this.#value);
  }

  getValue = ()=>{
      return this.#value;
  }
}

export default TestClass;
