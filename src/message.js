module.exports.Message = class Message {
    message;
    constructor(message) {
      this.message = message;
    }
  
    displayMessage() {
      // DO SOMETHING LONG/CALL API 
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve(this.message);
        }, 5000);
      });
      
    }
  };