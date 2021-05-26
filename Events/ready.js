module.exports = async(client, data) => {
    client.user.setActivity(`Bot handler`, {
        type: "STREAMING",
      });
}