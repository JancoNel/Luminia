// LUMINIA V2 
// This time were starting with it being open source

const makeWASocket = require('@whiskeysockets/baileys').default;

function connectionLogic() {
  const sock = makeWAsocket({
    printQRInTerminal: true,
    )}
    sock.ev.on('connection.update', async (update) => {

      const {connection, lastDisconnect } = update;

      if (update?.qr) {
        console.log(qr);
      }

        if (connection == 'close') {
            const shouldReconnect = 
              lastDisconnect?.error?.output?.statusCode != 
                DisconnectReason.loggedOut;
            
          
        }
    })
}
