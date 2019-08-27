module.exports = {
  instruction: "The user needs to confirm payment in the UI",
  action: "Confirm payment in the app",
  autoStart: true,
  execute: async function(state, { setDevicePage, waitForPageMessage }) {
	  const asset = state.withdraw_asset + " @ Any-anchor";
    const account = state.anchors_stellar_address.slice(0,8) + "..." +
    state.anchors_stellar_address.slice(state.anchors_stellar_address.length - 8, state.anchors_stellar_address.length);
	  
    await waitForPageMessage("pages/confirm.html?anchor="+account+"&amount="+state.withdraw_amount+"&asset="+asset,);
  },
};
