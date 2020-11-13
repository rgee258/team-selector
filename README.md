# Team Selector

This repo contains a custom team selector to make it easier for assembling teams for games. However some times when making teams between players you know, you might want to avoid having certain groupings on the same team. You are able to do so by identifying player pairings you want separated between teams to make team assembling easier.

[Try it out on Heroku!]()

Setup
-----

Ensure that you have Node.js already installed onto your system prior to anything else.

Download the repository contents and add them to the location of your choosing.

Once situated, navigate to the directory using the command line and use:

```bash
npm install
```

Doing so will obtain the necessary dependencies for the application.

Using the following to run this application locally on port 3000:

```bash
npm run start
```

Usage
-----

To make your own teams, type in the names of your team members to be assembled under the **Member Names** section. If wanted, you can add member pairings you want separated between teams in the **Separated Members** section. Names will be updated accordingly in the members dropdown. Once completed, press the **Create** Team button to view your assembled teams.

Known Issues
------------
- The team shuffling function will default to randomizing all entered names anyway if the separation pairings cannot be fulfilled
- Names entered in one half of a pairing dropdown will still appear as an entry in the dropdown of the other half of the pairing

Future Considerations
---------------------
- Improved header
- Dynamic form with dynamically added name and separations rows
- Option to save and clear previously entered names and separation pairings
- Error message if team randomizing cannot be fulfilled to separation pairings

Main Modules Used
-----------------
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React FontAwesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- [Fontsource](https://github.com/fontsource/fontsource)

Useful References
-----------------
- [Using Arrays in React State](https://www.robinwieruch.de/react-state-array-add-update-remove)
- [Fisher-Yates/Knuth Shuffle for Randomizing](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
- [Knuth Shuffle Implementation](https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1)
- [Identifying Loops with Labels in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)