var Growl = Class.create({
	initialize: function(folder){
		this.n = 0; //Its only to help in giving the ID's to DIV's
		this.imageFolder = folder || "images/"; //Choose the images folder given by user or use default
		this.keeper  = new Element('div', {'class': "growl-keeper", 'id': 'growl_keeper' }); //Create a container where 
		document.body.appendChild(this.keeper);
	},
	display: function(text,opt){
		this.n++;
		var delay = 5000;
		var image = "asterisk_orange.png";
		if (opt && opt.delay) delay = opt.delay*1000;
		if (opt && opt.image)  image = opt.image;
		var html = "<img src='"+this.imageFolder+""+image+"' alt='' class='growl-icon' />" + "<p class='growl-text'>"+text.capitalize()+"</p>";
		var growlAlert = new Element('div', {'class': "growl-alert",	'id': "growl-alert-"+this.n}).update(html).setOpacity(0).appear({to: 0.8}).observe('click',function() {new Effect.DropOut(this.id);});
		this.keeper.appendChild(growlAlert);
		timer = setTimeout( "new Effect.DropOut('growl-alert-"+this.n+"')", delay);
		return $("growl-alert-"+this.n);
	}
});