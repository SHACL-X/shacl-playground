import { LitElement, html, css } from "lit";

export class InferenceBox extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
      background: #fafbfc;
      border-left: 1px solid #e0e0e0;
      padding: 16px;
      box-sizing: border-box;
      overflow: auto;
    }
    h2 {
      margin-top: 0;
      font-size: 1.2em;
    }
  `;

  render() {
    return html`
      <slot name="header"><h2>Inference</h2></slot>
      <div>
        <!-- Inference results or controls go here -->
        <p>Inference results will appear here.</p>
      </div>
    `;
  }
}

customElements.define("inference-box", InferenceBox);
