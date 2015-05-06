Hosta
=======

[![Join the chat at https://gitter.im/BraindeadCrew/hosta](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/BraindeadCrew/hosta?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Prerequisite
------------
A mongodb server is required. Read the configuration section for more details.

Install
-------
```sh
sudo npm install -g grunt-cli
npm install
grunt build
cd server
npm install
npm start
```

Configuration
-------------
System configuration is based on [https://npmjs.org/package/config]

### Configuration keys :
* **mongodb : ** mongodb path configuration.
* **files-path : ** path to files storage directory.
