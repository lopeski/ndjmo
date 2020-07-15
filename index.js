var os = require('os');
setInterval(algo, 6000);

function algo() {
    console.log(os.cpus());
    console.log(os.totalmem());
    console.log(os.freemem())
}
