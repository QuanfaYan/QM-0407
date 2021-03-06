/**
 * Module dependencies
 */
const compose = require('koa-compose');
const Router = require('@koa/router');
const user_controller = require('../controller/user_controller');
const userinfo_controller = require('../controller/userinfo_controller');
const friend_controller = require('../controller/friend_controller');

const router = new Router();

/**
 * register router middleware
 */
router.post('/register', user_controller.register);

/**
 * login router middleware
 */
router.post('/login', user_controller.login);

/**
 * logout router middleware
 */
router.get('/logout', user_controller.logout);

/**
 * Get users infos
 */
router.post('/userinfo', userinfo_controller.getUsers);

/**
 * Update the nickname of a user
 */
router.put('/userinfo/nickname', userinfo_controller.updateNickname);

/**
 * Update the photo of a user
 */
router.put('/userinfo/photo', userinfo_controller.updatePhoto);

/**
 * Get the friends of a user
 */
router.get('/friends/:username', friend_controller.getFriends);

/**
 * Get the notifications of a user
 */
router.get('/notifications/:username', friend_controller.getNotifications);

module.exports = router;