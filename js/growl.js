var Growl = Class.create({
	initialize: function(folder){
		this.n = 0; //Its only to help in giving the ID's to DIV's
		this.imageFolder = folder || "images/"; //Choose the images folder given by user or use default
		this.keeper  = new Element('div', {'class': "growl-keeper", 'id': 'growl_keeper' }); //Create a container where 
		document.body.appendChild(this.keeper);
	},
	display: function(text, opt){
		this.n++;
		var delay = 5, gsrc = this.imageFolder+"asterisk_orange.png", gid = "growl-alert-"+this.n;
		if (opt && opt.delay) delay = opt.delay;
		if (opt && opt.image) gsrc = this.imageFolder+""+opt.image;
		this.keeper.insert({bottom: new Element('div', {'class': "growl-alert",	'id': gid})});
		$(gid).insert({top: new Element('img',{'class':'growl-icon', 'src': gsrc}), bottom: new Element('p', {'class': 'growl-text'}).update(text.capitalize())}).setOpacity(0).appear({to: 0.8}).observe('click',function() {
			new Effect.DropOut(this.id);
		}).setPngBackground(image,{ backgroundColor: '#000000'});
		Effect.DropOut.delay(delay, gid)
		return $(gid);
	}
});