import { defineStore } from "pinia";

export const useChannelInfoStore = defineStore("channelInfo", {
  state: () => {
    return {
      channelInfoList: [],
      loadingChannelInfo: false,
      isShow: true,
    };
  },
  actions: {
  }
});
