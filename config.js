var _config = {
    blog_name       : 'Zunlu Blog',         // 博客名称
    owner           : 'zunlu',           // github 用户名
    repo            : 'blog',// github 中对应项目名
    duoshuo_id      : 'absurd',            // 在第三方评论插件多说申请站点的子域名
    access_token : 'aabe385f021dfb3714add63f82bec6a104177bd1',                     // 请求量大时需要在 github 后台单独设置一个读取公开库的 token
    per_page        : '15'                    // 默认一页显示几篇文章
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};
