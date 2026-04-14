const GREETINGS = [
    "WelcomeSree!,"
    "Whalecome!",
    'Hello world!'
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length)]
    });
};