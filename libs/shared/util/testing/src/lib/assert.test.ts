export function assert(value, desc) {
  const li = document.createElement('li');
  li.className = value ? 'pass' : 'fail';
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

export function assertGroup(

) {}