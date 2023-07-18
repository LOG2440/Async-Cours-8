const waitMessage = (message, ms) => {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(message);
            resolve(ms * 2);
        }, ms)
    );
};

const delay1 = await waitMessage("Message 1", 500);
const delay2 = await waitMessage("Message 2", delay1);
await waitMessage("Message 3", delay2);

// Si on veut simplement afficher les 3 messages
const time = 500;
await waitMessage("Message 1", time);
await waitMessage("Message 2", time);
await waitMessage("Message 3", time);