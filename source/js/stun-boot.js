$(document).ready(function () {
  CONFIG.shortcuts.switch_post && Stun.utils.registerSwitchPost();
  CONFIG.back2top && Stun.utils.back2Top();
  CONFIG.reward && Stun.utils.registerShowReward();
});
