class HTMLButtonElement extends HTMLElement {

}
export class WebLikeButton extends HTMLButtonElement {
}

export class WebLikeButtonComponent extends WebLikeButton {
  public static observedAttributes = ['action', 'item', 'likes'];

  private xhr = new XMLHttpRequest();

  set item(value) {
    this.setAttribute('item', value);
  }
  get item() {
    return this.getAttribute('item');
  }
  set action(value) {
    this.setAttribute('action', value);
  }
  get action() {
    return this.getAttribute('action');
  }
  set likes(value) {
    this.setAttribute('likes', value);
  }
  get likes() {
    return this.getAttribute('likes');
  }
  constructor() {
    super();
    this.addEventListener('click', this.onLike);
    this.attachShadow({ mode: 'open' });
  }
  attributeChangedCallback() {
    this.shadowRoot.innerHTML = this.createButton();
  }
  createButton() {
    if (this.action) {
      this.xhr.open('POST', this.action, true);
    }

    return `
      <button type="button">
        <span>${this.likes}</span>
      </button>
    `;
  }
  onLike() {
    let likes = +this.likes;
    console.log(likes++);
    this.likes = `${likes}`;
    console.log(this.action);
    const data = new FormData();
    data.append('item', this.item);
    data.append('like', this.likes);
    this.xhr.send(data);

    this.dispatchEvent(
      new CustomEvent('webLikeClicked', { detail: this.likes })
    );
  }
}
