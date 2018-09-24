/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

'use strict';

defineParticle(({DomParticle, html}) => {

  const template = html`
    <style>
      [play-record] {
        padding: 4px 0;
        margin: -1px 0; /* removing the borders from the styling of the List.js */
        background-color: white;
      }
      [play-record] [time] {
        font-size: 12px;
        color: #666;
        margin-top: 4px;
      }
    </style>
    <div play-record>
      <div>{{song}}</div>
      <div time>Heard on <span>{{dateTime}}</span></div>
    </div>
  `;

  return class extends DomParticle {
    get template() {
      return template;
    }
    shouldRender(props) {
      return Boolean(props && props.playRecord);
    }
    render({playRecord}) {
      return {
        song: playRecord.song,
        dateTime: new Date(playRecord.dateTime).toLocaleDateString()
      };
    }
  };
});