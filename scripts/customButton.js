class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["label", "color", "size"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || "Кнопка";
    const shadowColor = this.getAttribute("shadowColor") || "var(--c-primary)";

    console.log(shadowColor);

    this.shadowRoot.innerHTML = `
      <style>
        .custom-button {
            --shadow-size: clamp(5px, 0.26vw, 40px);

            position: relative;
            height: clamp(60px, 3.125vw, 180px);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--c-primary);
            background-color: var(--c-accent);
            box-shadow: var(--shadow-size) var(--shadow-size) ${shadowColor};
            font-size: var(--font-18);
            text-transform: uppercase;
            font-family: var(--font-primary-o-1);
            border: none;
            width: 100%;
            cursor: pointer;
            transition: box-shadow 0.15s ease, translate 0.15s ease, opacity 0.15s ease;

            &:active {
              opacity: 0.2;
            }
        }

        @media (max-width: 440px) {
          .custom-button {
            box-shadow: unset;
          }
        }

        @media (hover: hover) {
          .custom-button:hover {
              translate: var(--shadow-size) var(--shadow-size);
              box-shadow: 0px 0px ${shadowColor};
            }
          }
        }
      </style>
      <button class="custom-button" type="button">${label}</button>
    `;
  }
}

customElements.define("custom-button", CustomButton);
