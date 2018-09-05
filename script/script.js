var newsData;

var vm = new Vue({
	el: '#news',
	data: {
		tabs: ["头条", "科技", "汽车", "财经", "体育", "推荐", "军事", "娱乐"],
		sites: [],
		ins: 0,
	},
	mounted: function() {
		this.$nextTick(function() {
			var self = this;

			layer.msg('加载中……', {
				icon: 16,
				shade: 0.01,
				time: false //取消自动关闭
			});

			news(self) // 获取资讯列表

			layer.closeAll()
		})
	},
	methods: {
		tab(index) {
			this.ins = index;

			if(index == 0)
				this.sites = newsData.toutiao
			else if(index == 1)
				this.sites = newsData.tech
			else if(index == 2)
				this.sites = newsData.auto
			else if(index == 3)
				this.sites = newsData.money
			else if(index == 4)
				this.sites = newsData.sports
			else if(index == 5)
				this.sites = newsData.dy
			else if(index == 6)
				this.sites = newsData.war
			else if(index == 7)
				this.sites = newsData.ent
			else
				this.sites = []
		}
	},
	computed: {}
});

// 获取资讯列表
function news(self) {
	$.ajax({
		url: "https://www.apiopen.top/journalismApi",
		type: "get",
		data: {},
		beforeSend: function() {},
		complete: function() {},
		success: function(res) {
			if(res.code == 200) {
				newsData = res.data
				self.sites = newsData.toutiao;
			}
		},
		error: function() {
			alert('服务器忙，请稍候');
		}
	});
}