import type { TemplateResult } from 'lit';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@alwatr/icon';

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = [
    css`
      html {
        font-family: var(--ion-font-family);
      }

      a {
        background-color: transparent;
        color: var(--ion-color-primary, #3880ff);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 1rem;
        margin-bottom: 0.625rem;
        font-weight: 500;
        line-height: 1.2;
      }

      h1 {
        margin-top: 1.25rem;
        font-size: 1.625rem;
      }

      h2 {
        margin-top: 1.25rem;
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1.375rem;
      }

      h4 {
        font-size: 1.25rem;
      }

      h5 {
        font-size: 1.25rem;
      }

      h6 {
        font-size: 1rem;
      }
    `,
    css`
      :host {
        display: flex;
        flex-direction: column;
      }

      * {
        box-sizing: border-box;
      }

      main {
        display: flex;
        flex: 1 1 0;
        flex-direction: column;
        align-items: center;
      }

      img {
        max-width: 100%;
        border: 0;
      }
    `,
    css`
      .row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }

      .row .col {
        display: flex;
        flex: 1 1 0;
        flex-direction: column;
      }

      .box {
        border-radius: 0.2em;
        box-shadow: 0 2px 2px 0 rgba(0 0 0 14%), 0 3px 1px -2px rgba(0 0 0 12%),
          0 1px 5px 0 rgba(0 0 0 20%);
      }
    `,
    css`
      .row.intro {
        flex-direction: column;
        gap: 1em;
        max-width: 400px;
        margin: 0 auto;
        padding: 2vh 6vw;
      }

      .banner {
        display: flex;
        min-width: 256px;
      }

      .banner img {
        overflow: hidden;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 1em;
        min-width: 256px;
      }

      .info > h1,
      .info > h6 {
        margin: 0;
      }
    `,
    css`
      .row.cards {
        flex-direction: column;
        gap: 1.5em;
        max-width: 400px;
        margin: 0 auto;
        padding: 2vh 6vw;
      }

      .card {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        padding: 1em;
        background-image: linear-gradient(145deg, #efefef, #fafafa, #fff);
        cursor: pointer;
      }

      .card .card-arrow {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0.8em;
        font-size: 1.4em;
      }

      .card .card-icon {
        margin: 0 0.2em 0.2em;
        font-size: 3em;
      }

      .card .card-title {
        display: block;
        color: #111;
        font-size: 1.1em;
      }

      .card .card-description {
        display: block;
        color: #444;
        font-size: 0.8em;
      }
    `,
    css`
      .card:nth-child(1) .card-icon {
        color: #e91e63;
      }

      .card:nth-child(2) .card-icon {
        color: #673ab7;
      }

      .card:nth-child(3) .card-icon {
        color: #009688;
      }
    `,
  ];

  render() {
    return html`
      <main role="main">${this.__renderIntro()}${this.__renderCards()}</main>
    `;
  }

  __renderIntro(): TemplateResult {
    return html`
      <section class="row intro">
        <div class="col">
          <div class="info">
            <h1>شرکت تولیدی بازرگانی سافیت</h1>
            <h6>
              شرکت بازرگانی سافیت با فعالیت های بین المللی و ویژگی های ممتاز
            </h6>
          </div>
        </div>
        <div class="col">
          <div class="banner">
            <img class="box" src="images/banner.jpeg" alt="***" />
          </div>
        </div>
      </section>
    `;
  }
  __renderCards(): TemplateResult {
    const cards = [
      {
        title: 'پانل پی وی سی سفید',
        description: 'شرکت تولیدی بازرگانی سافیت',
        icon: 'bar-chart',
      },
      {
        title: 'پی وی سی',
        description: 'شرکت تولیدی بازرگانی سافیت',
        icon: 'grid',
      },
      {
        title: 'تایل پی وی سی سفید',
        description: 'شرکت تولیدی بازرگانی سافیت',
        icon: 'newspaper',
      },
    ];
    return html`<div class="row cards">${cards.map(this.__renderCard)}</div>`;
  }
  __renderCard(card: {
    title: string;
    description: string;
    icon: string;
  }): TemplateResult {
    return html`
      <div class="card box">
        <alwatr-icon
          class="card-icon"
          name=${card.icon + '-outline'}
        ></alwatr-icon>
        <alwatr-icon
          class="card-arrow"
          name="open-outline"
          dir="rtl"
          flip-rtl
        ></alwatr-icon>
        <span class="card-title">${card.title}</span>
        <span class="card-description">${card.description}</span>
      </div>
    `;
  }
}
