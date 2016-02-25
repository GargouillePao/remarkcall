/**
 * Created by qs on 2016/1/22.
 */
var express = require('express');
var router = express.Router();
router.get("/", function(req,res){
    if (req.session.sign) {//����û��Ƿ��Ѿ���¼
        res.redirect("/index");
    }else{
        res.render("login",{rootPath:remarkcall.ROOT_PATH});
    }
});
router.post("/", function(req,res){
    if (req.session.sign) {//����û��Ƿ��Ѿ���¼
        console.log(req.session);//��ӡsession��ֵ
        res.send(200);
    } else {
        var uid = req.body.username.trim();
        if(uid!=""){
            req.session.sign = true;
            req.session.name = uid;
            if(req.hostname=="localhost"){
                req.session.author = uid;
            }
            res.send(200);
        }else{
            res.send(404);
        }
    }
});

module.exports = router;