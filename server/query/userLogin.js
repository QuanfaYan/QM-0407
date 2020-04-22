/**
 * 用户登录
 * 输入账号和密码→数据库查询账号密码是否存在→跳转登录(3)
 * 数据库返回user(obj)
 * get: id & key
 * return: users_(boolean)
 */
const axios = require('axios');
const login = async function(info) {
    result = 388;   

    await axios.post(
        'https://afusuj.toutiao15.com/login',
        {    
            id: info.id,
            key: info.key,
        }
    ).then(function(response){
        let status = response.data;
        if (status == 0)
        {
            /**
             * 用户名或密码错误
             * code:400
             */
            console.log(400);
            result = 400;
        }
        else if (status == -1)
        {
            /**
             * 用户已登录
             * code:403
             */
            console.log(403);
            result = 403;
        }
        else
        {
            /**
             * 登录成功
             * code:200
             */
            console.log(status + " 200");
            result = status;
        }
    })
    
    return result;
};

module.exports = login;
