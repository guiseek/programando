export function UseState(seed: any) {
  return function (target, key) {
    target[key] = seed;
    target[`set${key.replace(/^\w/, c => c.toUpperCase())}`] = (val) => target[key] = val;
  };
}


export function UseEffect() {
  return function (target, key, descriptor) {
    console.log(target, key, descriptor);

    target.ngOnInit = descriptor.value;
    target.ngAfterViewChecked = descriptor.value;
  };
}