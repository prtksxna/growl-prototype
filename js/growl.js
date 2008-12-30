var Growl = Class.create({
  initialize: function(folder){
    this.n = 0; //Its only to help in giving the ID's to DIV's
    this.mediaFolder = folder || "media/"; //Choose the images folder given by user or use default
    this.keeper = new Element('div', {'class': 'growl-keeper', 'id': 'growl_keeper' }); //Create a container where
		this.sound = false;
    $(document.body).insert({bottom: this.keeper});
  },
  display: function(text){
    this.n++;
    var gid = "growl-alert-"+this.n, opt = Object.extend({image: "asterisk_orange.png",delay: 5, sound: false, }, arguments[1] || {});
		if(this.sound || opt.sound) Sound.play(this.mediaFolder+"sounds/waterdrop.mp3");
    this.keeper.insert({bottom: new Element('div', {'class': "growl-alert",  'id': gid})});
		var me = this;
    $(gid).insert({top: new Element('img',{'class':'growl-icon', 'src': this.mediaFolder+"icons/"+opt.image}), bottom: new Element('p', {'class': 'growl-text'}).update(text.capitalize())}).setOpacity(0).appear({to: 0.8}).observe('click',function(e) {me.remove(Event.findElement(e,'DIV').id);}).setPngBackground(opt.image,{ backgroundColor: '#000000'});
		$(gid).observe('mouseover',function(e) {this.addClassName('growl-alert-hover')});
		$(gid).observe('mouseout',function(e) {this.removeClassName('growl-alert-hover')});
    this.remove.delay(opt.delay, gid);
		return $(gid);
  },
	remove: function(gid){
		if(!$(gid).hasClassName('growl-alert-hover')) Effect.DropOut(gid);
		else this.delay(1,gid);
	},
});