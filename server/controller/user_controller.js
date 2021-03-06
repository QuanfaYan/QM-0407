/**
 * Module Dependencies
 */
const service = require('../service/userService');

/**
 * API
 */
const Controller = {};

/**
 * register controller middleware
 * 
 * static method
 * 
 * @param {Koa.ctx} ctx
 */
Controller.register = async function(ctx) {
	if (ctx.session.authenticated) return ctx.status = 403;
	let { username, password, nickname } = ctx.request.body;
	const flag = await service.register(username, password, nickname);
	if (flag !== true)
		return ctx.status = flag;
	ctx.status = 200;
};

/**
 * login controller middleware
 * 
 * static method
 * 
 * @param {Koa.ctx} ctx
 */
Controller.login = async function(ctx) {
	// if (ctx.session.authenticated) return ctx.status = 403;
	let { username, password } = ctx.request.body;
	console.log(`${username}, ${password}`);
	const flag = await service.login(username, password);
	console.log(flag);
	if (flag !== true)
		return ctx.status = flag;
	ctx.status = 200;
	// ctx.session.authenticated = true;
	ctx.session.username = username;
};

/**
 * logout controller middleware
 * 
 * static method
 * 
 * @param {Koa.ctx} ctx
 */
Controller.logout = async function(ctx) {
	const username = ctx.session.username;
	service.logout(username);
	ctx.session.authenticated = false;
	return ctx.status = 200;
};

module.exports = Controller;