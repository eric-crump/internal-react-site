import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from "contentstack";
Contentstack.Utils.addEditableTags();

const Stack = Contentstack.Stack({
  "api_key": "bltf9a71e4780fdf6ee",
  "delivery_token": "cs53538b088de8f0c6047ecf78",
  "environment": "preview",
  live_preview: {
    management_token: 'csadcace65b63572707b0daf57',
    enable: true,
    host: 'api.contentstack.io',
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
  getElement(id, type) {
    return new Promise((resolve, reject) => {
      const Query = Stack.ContentType(type)
        .Entry(id)
        .toJSON()
        .fetch()
        .then(
          function success(entry) {
            //console.log(entry.title);
            Contentstack.Utils.addEditableTags(entry, type, true);
            resolve(entry);
          },
          function error(err) {
            console.log('error id', id);
            reject(err);
          }
        );
    });
  },

  getStack(){
    return Stack;
  }
};
