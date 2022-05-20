var app = new Vue ({
	el: '#article',
	data:{
		products:[
		{id:1,title:"Vidnaya", short_text:'A typical summer variety, which is a medium-sized tree with a narrow pyramidal crown with curved, brown, bare and rounded shoots.', image:'1.jpg', desc: "33"},
		{id:2,title:"Bryansk beauty", short_text:'A typical late summer variety, which is a medium-sized tree, weakly growing, with a crown in the form of a rarefied ball with compact, brownish-brown, cranked, bare and rounded shoots, the ends of which are directed upwards.', image:'2.jpg', desc: "Full desc"},
		{id:3,title:"Same age", short_text:'A typical late summer variety, which is a medium-sized tree with a crown in the form of a rounded compact pyramid of medium density.', image:'3.jpg', desc: "Full desc"},
		{id:4,title:"Banana", short_text:'A typical summer variety, which is a medium-sized tree with a drooping, medium-thickened crown and curved, brown, bare and rounded shoots.', image:'4.jpg', desc: "Full desc"},
		{id:5,title:"Skorospelka from Michurinsk", short_text:'A typical early summer variety, which is a medium-sized tree with a crown in the form of a rounded pyramid of medium density.', image:'5.jpg', desc: "Full desc"}]
	},



	mounted: function() {
		console.log(window.localStorage.getItem('prod'));
		this.getProduct();
	},

	methods:{
		addItem:function(id){
			window.localStorage.setItem('prod', id);
		},

		getProduct:function(){
			if(window.location.hash){
				var id = window.location.hash.replace('#', '');
				if(this.products && this.products.length>0){
					for(i in this.products){
						if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
					}
				}
			}
		}
	}

});