const clientId = "1366339996759363614";
const discordRPC = require("discord-rpc");
const RPC = new discordRPC.Client({ transport: "ipc" });

discordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: "CDID ROLEPLAY",
    state: "JOIN NOW",
    startTimestamp: Date.now(),
    largeImageKey: "lanzio",
    largeImageText: ".gg/eESQYgjMVu",
    instance: false,
    buttons: [
      {
        label: "Discord",
        url: "https://discord.com",
      },
      {
        label: "Game",
        url: "https://roblox.com",
      },
    ],
  });
}

RPC.on("ready", async () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});

RPC.login({ clientId }).catch((err) => console.error(err));
