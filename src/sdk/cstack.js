import ContentstackLivePreview from "@contentstack/live-preview-utils";
const contentstack = require("contentstack");
contentstack.Utils.addEditableTags();

const Stack = contentstack.Stack({
  "api_key": "bltf9a71e4780fdf6ee",
  "delivery_token": "cs53538b088de8f0c6047ecf78",
  "environment": "preview",
  live_preview: {
    management_token: 'csadcace65b63572707b0daf57',
    enable: true,
    host: 'api.contenstack.io',
  }
});

ContentstackLivePreview.init({
  stackSdk: Stack,
  stackDetails: {
    apiKey: "bltf9a71e4780fdf6ee",
  },
  clientUrlParams: {
      protocol: "https",
      host: "app.contentstack.com",
      port: 443,
  },
});

export default {
  getMainPage() {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType("mainpage")
        .Entry("blt7c5ea8ef2fe3ec39")
        .toJSON()
        .fetch()
        .then(
          function success(entry) {
            console.log(entry.title);
            contentstack.Utils.addEditableTags(entry, "mainpage", true);
            resolve(entry);
          },
          function error(err) {
            reject(err);
          }
        );
    });
  },

  getStack(){
    return Stack;
  }
};
