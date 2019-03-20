# Packer

3D box packing web application.
Calculates number of boxes, which are needed to fill three different types of bags. I use the Guillotine algorithm to pack the boxes.
If you are interested you can read about it in the paper of Jukka Jylänki.
[A Thousand Ways to Pack the Bin](http://clb.demon.fi/files/RectangleBinPack.pdf)

## About

This is not only my first repository on GitHub but also the first JavaScript web app I have ever made.
Out of curiosity I have chosen to use ReactJs for this task.
Because of some issues while handling the state in the app, I decided to use Redux to do so.
The Redux implementation is actually pretty simple at the moment. I need to split the code
and use the Redux combineReducers() function, when I do a refactoring of the code in the future.
(Winter 2018)

Now trying to refactor the project...

### Installing

1. git clone https://github.com/lbinscheck/packer.git
2. cd packer
3. npm i
4. npm start

### Built With

* [ReactJs](https://github.com/facebook/react) - [Create React App](https://reactjs.org/docs/add-react-to-a-new-app.html)
* [Redux](https://redux.js.org)
* [Material UI](http://www.material-ui.com/#/)

#### Author

* **Lennart Binscheck** - [lbinscheck](https://gitlab.com/lbinscheck)
