"use strict";

let Rosnodejs = {
  initNode: function() {
    return new Promise((resolve, reject) => {
      resolve({
        advertise: function(topic, type) {
          return {
            publish: function(msg) {

            }
          }
        },

        subscribe: function(topic, type, callback) {

        }
      })
    });
  }
};

module.exports = Rosnodejs;
