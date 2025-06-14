class ArrowButton extends HTMLElement {
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
    const icon = this.getAttribute("icon") || "right";

    const styles = `
      <style>
        .arrow-button {
            width: clamp(50px, 2.604vw, 500px);
            aspect-ratio: 1/1;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: var(--c-primary);
            background-color: var(--c-accent);
            border: none;
            cursor: pointer;
            border: 2px solid var(--c-accent);
            transition: background-color 0.15s ease, opacity 0.15s ease, border-color 0.15s ease;

            &:active {
              opacity: 0.2;
            }
        }

        @media (hover: hover) {
          .custom-button:hover {
              background-color: var(--c-primary);
              color: var(--c-accent);
            }
          }
        }
      </style>
      <button class="arrow-button" type="button">$icon</button>
    `;

    if (icon === "right") {
      this.shadowRoot.innerHTML = styles.replace(
        "$icon",
        `
      <svg
        width="28"
        height="20"
        viewBox="0 0 28 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3273 20V16.9231H20.8727V14.8718H23.4182V12H25.4545V10.2564M25.4545 10.2564H28M25.4545 10.2564V8.5H23.4182V6.15385H20.8727V3.07692H18.3273V0M25.4545 10.2564H0"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
      `
      );
    } else if (icon === "left") {
      this.shadowRoot.innerHTML = styles.replace(
        "$icon",
        `
        <svg
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.67273 1.32245e-06L9.67273 3.07692L7.12727 3.07692L7.12727 5.12821L4.58182 5.12821L4.58182 8L2.54546 8L2.54546 9.74359M2.54546 9.74359L8.96644e-07 9.74359M2.54546 9.74359L2.54546 11.5L4.58182 11.5L4.58182 13.8462L7.12727 13.8462L7.12727 16.9231L9.67273 16.9231L9.67273 20M2.54546 9.74359L28 9.74359"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      `
      );
    }
  }
}

customElements.define("arrow-button", ArrowButton);
